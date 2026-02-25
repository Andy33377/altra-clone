export default function ChatButton() {
  return (
    <a
      href="#chat"
      className="fixed right-4 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
      aria-label="Открыть чат"
      title="Чат"
    >
      <img src="/images/svg/chat.svg" alt="" className="h-6 w-6" aria-hidden />
    </a>
  );
}
