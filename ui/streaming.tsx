import { createRoot, type Root } from "react-dom/client";
import { flushSync } from "react-dom";
import StreamingText, { type StreamingTextProps } from "@/components/ui/streaming-text";
const roots = new Map<HTMLElement, Root>();
const states = new Map<HTMLElement, StreamingTextProps>();
const packs: Record<string, string[]> = {
 en:["Sources","Follow-ups","Copy answer","Copied","Copy failed","Repeat request","Helpful","Not helpful"],
 ru:["Источники","Уточнения","Копировать ответ","Скопировано","Не удалось скопировать","Повторить запрос","Полезно","Не полезно"],
 es:["Fuentes","Seguimiento","Copiar respuesta","Copiado","Error al copiar","Repetir solicitud","Útil","No útil"],
 pt:["Fontes","Seguimento","Copiar resposta","Copiado","Falha ao copiar","Repetir pedido","Útil","Não útil"],
 fr:["Sources","Pour aller plus loin","Copier la réponse","Copié","Échec de copie","Répéter la demande","Utile","Pas utile"],
 de:["Quellen","Nachfragen","Antwort kopieren","Kopiert","Kopieren fehlgeschlagen","Anfrage wiederholen","Hilfreich","Nicht hilfreich"],
 it:["Fonti","Approfondimenti","Copia risposta","Copiato","Copia non riuscita","Ripeti richiesta","Utile","Non utile"],
 tr:["Kaynaklar","Devam soruları","Yanıtı kopyala","Kopyalandı","Kopyalanamadı","İsteği tekrarla","Faydalı","Faydalı değil"],
 pl:["Źródła","Dalsze pytania","Kopiuj odpowiedź","Skopiowano","Błąd kopiowania","Powtórz prośbę","Pomocne","Niepomocne"],
 uk:["Джерела","Уточнення","Копіювати відповідь","Скопійовано","Не вдалося скопіювати","Повторити запит","Корисно","Не корисно"],
};
function labels(lang: string) { const [sources,followUps,copy,copied,failed,retry,up,down] = packs[lang] || packs.en;const presentation=(window as unknown as {AetherAIAnswerPresentation:{labels:(lang:string)=>{explain:string}}}).AetherAIAnswerPresentation;return {sources,followUps,copy,copied,failed,retry,up,down,explain:presentation.labels(lang).explain}; }
declare global { interface Window { AetherAIStreamingUI: { labels:typeof labels;render: (element: HTMLElement, props: StreamingTextProps) => void; clear: (element: HTMLElement) => void; busy:(value:boolean)=>void } } }
window.AetherAIStreamingUI = {
  labels,
  render(element, props) { let root = roots.get(element);if (!root) { root = createRoot(element);roots.set(element, root); }props={...props,labels:labels(document.documentElement.lang)};states.set(element,props);flushSync(() => root.render(<StreamingText {...props} />)); },
  clear(element) { const root = roots.get(element);if (root) { root.unmount();roots.delete(element);states.delete(element); } },
  busy(value) { for(const [element,props] of states) if(props.html===undefined)window.AetherAIStreamingUI.render(element,{...props,busy:value}); },
};
new MutationObserver(() => { for (const [element] of roots) if (!element.isConnected)window.AetherAIStreamingUI.clear(element); }).observe(document.body, { childList: true, subtree: true });
new MutationObserver(() => { for(const [element,props] of states)window.AetherAIStreamingUI.render(element,{...props,labels:labels(document.documentElement.lang)}); }).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
