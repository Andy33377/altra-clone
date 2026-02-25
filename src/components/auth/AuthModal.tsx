import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Здесь позже можно добавить реальный вызов API авторизации
  };

  const modal = (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      {/* Клик по фону закрывает */}
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-hidden="true"
        onClick={onClose}
      />

      <div className="relative z-50 w-full max-w-xl rounded bg-white p-8 shadow-xl">
        {/* Кнопка закрытия */}
        <button
          type="button"
          className="absolute right-4 top-4 text-xl text-neutral-500 hover:text-neutral-900"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        <h2
          id="auth-modal-title"
          className="mb-6 text-2xl font-bold tracking-wide text-neutral-900"
        >
          MY ACCOUNT
        </h2>

        {/* Только секция Log in */}
        <h3 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold tracking-[0.12em] text-neutral-900">
          LOG IN
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm text-neutral-900">
            Email *
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1 w-full rounded border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-800 focus:ring-1 focus:ring-neutral-800"
            />
          </label>

          <label className="block text-sm text-neutral-900">
            Password *
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-1 w-full rounded border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-800 focus:ring-1 focus:ring-neutral-800"
            />
          </label>

          <div className="flex items-center justify-between text-xs text-neutral-700">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
                className="h-3.5 w-3.5 rounded border border-neutral-400"
              />
              <span>Remember Me</span>
            </label>
            <button
              type="button"
              className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
            >
              Forgot your password?
            </button>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-neutral-900 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-neutral-800"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

