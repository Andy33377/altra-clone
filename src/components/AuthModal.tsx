// AuthModal.tsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type AuthMode = "login" | "signup";

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};

export function AuthModal({ open, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>("login");

  // Закрытие по Esc
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const modal = (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/60"
      aria-modal="true"
      role="dialog"
      aria-labelledby="auth-modal-title"
    >
      {/* клик по фону закрывает */}
      <button
        className="absolute inset-0 cursor-default"
        aria-hidden="true"
        onClick={onClose}
      />

      <div className="relative z-50 w-full max-w-xl rounded bg-white p-8 shadow-xl">
        {/* Крестик */}
        <button
          type="button"
          className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-800"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <h2
          id="auth-modal-title"
          className="mb-6 text-2xl font-bold tracking-wide"
        >
          MY ACCOUNT
        </h2>

        {/* Табы */}
        <div className="mb-6 flex gap-6 text-sm font-semibold">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={
              mode === "login"
                ? "border-b-2 border-neutral-900 pb-2"
                : "pb-2 text-neutral-500"
            }
          >
            LOG IN
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={
              mode === "signup"
                ? "border-b-2 border-neutral-900 pb-2"
                : "pb-2 text-neutral-500"
            }
          >
            CREATE ACCOUNT
          </button>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label
                className="block text-xs font-medium text-neutral-700"
                htmlFor="auth-email"
              >
                Email
              </label>
              <input
                id="auth-email"
                type="email"
                required
                className="mt-1 w-full rounded border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
              />
            </div>
            <div className="space-y-1">
              <label
                className="block text-xs font-medium text-neutral-700"
                htmlFor="auth-password"
              >
                Password
              </label>
              <input
                id="auth-password"
                type="password"
                required
                className="mt-1 w-full rounded border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-700">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                className="h-3.5 w-3.5 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
              />
              <span>Remember me</span>
            </label>
            <button
              type="button"
              className="text-neutral-600 underline underline-offset-2 hover:text-neutral-900"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
