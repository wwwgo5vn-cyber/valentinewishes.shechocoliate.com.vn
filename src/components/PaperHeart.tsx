export function HeartPaths() {
  return (
    <>
      <path
        className="heart-main"
        d="M32 52C32 52 8 36 8 22 8 12 16 6 24 10 28 12 30 16 32 20 34 16 36 12 40 10 48 6 56 12 56 22 56 36 32 52 32 52Z"
      />
      <path
        className="heart-fold"
        d="M32 52C32 52 8 36 8 22 8 12 16 6 24 10 28 12 30 16 32 20Z"
      />
    </>
  );
}

export function PaperHeart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 58" aria-hidden="true">
      <HeartPaths />
    </svg>
  );
}
