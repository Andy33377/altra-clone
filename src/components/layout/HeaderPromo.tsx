export default function HeaderPromo() {
  return (
    <div className="bg-neutral-900 text-white text-center py-2 text-sm">
      <div className="max-w-[1280px] mx-auto px-4">
        <p className="m-0">
          <a href="/" className="text-white hover:underline">
            Free Shipping
          </a>
          {' | '}
          <a href="/" className="text-white hover:underline">
            30-Day Trial Runs are Guaranteed
          </a>
        </p>
      </div>
    </div>
  );
}
