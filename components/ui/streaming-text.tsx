"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export type Source = { href: string; host: string; title: string; icon: string | null };
export type StreamingTextProps = {
  html?: string; done?: boolean; sources?: Source[]; citations?: Source[]; followUps?: string[]; explainFollowUp?:boolean;
  labels: { sources: string; followUps: string; copy: string; copied: string; failed: string; retry: string; up: string; down: string; explain:string };
  feedback?: "up" | "down"; busy?: boolean;
  onCopy?: () => Promise<boolean>; onRetry?: () => void;
  onFeedback?: (vote: "up" | "down") => void; onFollowUp?: (text: string) => void;
  onOpen?: (href: string) => void;
};
function SourceAvatar({ source }: { source: Source }) {
  const [failed, setFailed] = useState(false);
  return <span className="answer-source-icon" aria-hidden="true">{!source.icon || failed ? source.host[0].toUpperCase() : <img src={source.icon} alt="" referrerPolicy="no-referrer" onError={() => setFailed(true)} />}</span>;
}
const paths = {
  copy: <><rect x="9" y="9" width="12" height="12" rx="2.5" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>,
  retry: <path d="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6" />,
  up: <path d="M7 10v12M15 5.88L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88z" />,
  down: <path d="M17 14V2M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88z" />,
};
export default function StreamingText({ html, done = true, sources = [], citations = [], followUps: providedFollowUps = [], explainFollowUp, labels, feedback, busy, onCopy, onRetry, onFeedback, onFollowUp, onOpen }: StreamingTextProps) {
  const followUps=explainFollowUp?[labels.explain]:providedFollowUps;
  const [sourcesOpen, setSourcesOpen] = useState(false), [copyState, setCopyState] = useState<"copy" | "copied" | "failed">("copy"), [copying, setCopying] = useState(false);
  const content = useRef<HTMLDivElement>(null), previous = useRef("");
  useEffect(() => { if (copyState === "copy") return; const timer = setTimeout(() => setCopyState("copy"), 1500); return () => clearTimeout(timer); }, [copyState]);
  useLayoutEffect(() => {
    const root = content.current;if (!root || html === undefined) return;
    const text = root.textContent || "", old = previous.current;previous.current = text;
    if (!done && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), nodes: Text[] = [];let node: Node | null, offset = 0;
      while ((node = walker.nextNode())) nodes.push(node as Text);
      const boundary = text.startsWith(old) ? old.length : 0;
      for (const node of nodes) {
        const value = node.data, start = Math.max(0, boundary - offset);offset += value.length;
        if (start >= value.length || node.parentElement?.closest("pre,code,.katex,svg")) continue;
        const fragment = document.createDocumentFragment();fragment.append(value.slice(0, start));
        for (const word of value.slice(start).match(/\S+\s*|\s+/gu) || []) { const span = document.createElement("span");span.className = "stream-word";span.textContent = word;fragment.append(span); }
        node.replaceWith(fragment);
      }
    }
    let previousLink:HTMLAnchorElement|null=null;
    for (const link of Array.from(root.querySelectorAll<HTMLAnchorElement>("a[href]"))) {
      if (citations.some(source => source.href === link.href)) link.classList.add("stream-source-chip");
      if(previousLink&&previousLink.href===link.href&&previousLink.closest('p,li')===link.closest('p,li')){const gap=document.createRange();gap.setStartAfter(previousLink);gap.setEndBefore(link);if(/^[\s()[\]·.,;:-]*$/.test(gap.toString())){const before=previousLink.previousSibling;if(before?.nodeType===Node.TEXT_NODE&&/\($/.test(before.textContent||'')&&/^\s*\)/.test(gap.toString()))before.textContent=(before.textContent||'').replace(/\($/,'');gap.deleteContents();previousLink.remove();}}
      previousLink=link;
    }
    root.querySelectorAll('.answer-stream-caret').forEach(caret => caret.remove());
    if (!done) {const tail=root.querySelector(':scope > p:last-child,:scope > ul:last-child > li:last-child,:scope > ol:last-child > li:last-child')||root;const caret=document.createElement('span');caret.className='answer-stream-caret';caret.setAttribute('aria-hidden','true');tail.append(caret);}
  }, [html, done, citations]);
  const open = (event: React.MouseEvent, href: string) => { if (onOpen) { event.preventDefault();onOpen(href); } };
  return <div className="streaming-ui n:w-full">
    {html !== undefined && <div ref={content} className="stream-content" dangerouslySetInnerHTML={{ __html: html }} />}
    {(onCopy || sources.length > 0) && <div className="stream-action-row message-actions" hidden={!done}>
      {(["copy", "retry", "up", "down"] as const).map(action => {
        const handler = action === "copy" ? onCopy : action === "retry" ? onRetry : onFeedback;
        if (!handler) return null;
        const label = action === "copy" ? labels[copyState] : labels[action];
        return <button key={action} type="button" className="msg-action-btn stream-action" title={label} aria-label={label} data-answer-action={action} aria-pressed={action === "up" || action === "down" ? feedback === action : undefined} disabled={action === "copy" ? copying : busy} onClick={async () => {
          if (action === "copy") { setCopying(true);try { setCopyState(await onCopy?.() ? "copied" : "failed"); } catch { setCopyState("failed"); } finally { setCopying(false); } }
          else if (action === "retry") onRetry?.();else onFeedback?.(action);
        }}><svg width="15" height="15" viewBox="0 0 24 24" fill={(action==='up'||action==='down')&&feedback===action?'currentColor':'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{action === "copy" && copyState === "copied" ? <path d="M20 6 9 17l-5-5" /> : paths[action]}</svg></button>;
      })}
      {!!sources.length && <button type="button" className="stream-sources-toggle answer-sources-label" aria-expanded={sourcesOpen} onClick={() => setSourcesOpen(value => !value)}>
        <span className="stream-source-avatars">{sources.slice(0, 3).map(source => <SourceAvatar key={source.href} source={source} />)}</span>
        <span>{labels.sources} · {sources.length}</span><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" className={sourcesOpen ? "is-open" : ""}><path d="m3 4 3 3 3-3" /></svg>
      </button>}
    </div>}
    {!!sources.length && <div className="stream-sources-panel" data-open={done && sourcesOpen} inert={!done || !sourcesOpen} aria-hidden={!done || !sourcesOpen}><div><div className="answer-sources">
      {sources.map(source => <a key={source.href} className="answer-source" href={source.href} target="_blank" rel="noopener noreferrer" onClick={event => open(event, source.href)}><SourceAvatar source={source} /><span className="answer-source-title">{source.title}</span><small>{source.host}</small></a>)}
    </div></div></div>}
    {done && !!followUps.length && <div className="stream-followups answer-followups"><p>{labels.followUps}</p>{followUps.map((text, index) => <button key={text} type="button" style={{ animationDelay: `${index * 90}ms` }} disabled={busy} onClick={() => onFollowUp?.(text)}><svg className="answer-explain-line" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m9 10-5 5 5 5M20 4v7a4 4 0 0 1-4 4H4" /></svg>{text}</button>)}</div>}
  </div>;
}
