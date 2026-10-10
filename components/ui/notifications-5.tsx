"use client";

import { CircleCheck, Info, TriangleAlert, CircleAlert, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type Notification = {
  id: string;
  variant: "success" | "info" | "warning" | "error";
  title: string;
  body?: string;
  action?: { label: string; run: () => void; disabled?: boolean };
};

const config = {
  success: { icon: CircleCheck, accent: "n:text-success" },
  info: { icon: Info, accent: "n:text-foreground" },
  warning: { icon: TriangleAlert, accent: "n:text-warning" },
  error: { icon: CircleAlert, accent: "n:text-destructive" },
};

// Real events are supplied by the app. No simulated payments, quotas or updates.
export default function NotificationsBlock({ toasts, dismiss, dismissLabel }: {
  toasts: Notification[]; dismiss: (id: string) => void; dismissLabel: string;
}) {
  return <div className="n:flex n:w-full n:flex-col n:gap-3 n:text-foreground">
    {toasts.map(toast => {
      const { icon: Icon, accent } = config[toast.variant];
      return <div key={toast.id} data-notification={toast.id} role={toast.variant === "error" ? "alert" : "status"}
        className="notification-card n:flex n:items-start n:gap-3 n:rounded-lg n:border n:border-border n:bg-background n:p-4 n:shadow-sm">
        <Icon className={cn("n:mt-0.5 n:size-[18px] n:shrink-0", accent)} aria-hidden="true" />
        <div className="n:flex n:min-w-0 n:flex-1 n:flex-col n:gap-0.5">
          <span className="n:text-[13px] n:font-semibold">{toast.title}</span>
          {toast.body && <span className="n:text-[12px] n:text-muted-foreground">{toast.body}</span>}
          {toast.action && <button type="button" className="notification-action" disabled={toast.action.disabled} onClick={toast.action.run}>{toast.action.label}</button>}
        </div>
        <button type="button" onClick={() => dismiss(toast.id)} aria-label={dismissLabel}
          className="notification-dismiss n:shrink-0 n:text-muted-foreground n:transition-colors n:hover:text-foreground">
          <X className="n:size-[14px]" aria-hidden="true" />
        </button>
      </div>;
    })}
  </div>;
}
