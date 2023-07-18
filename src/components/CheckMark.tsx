export default function CheckMark() {
  return (
    <div className="pt-3">
      <svg
        className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-testid="svg"
      >
        <circle cx="12" cy="12" r="11" />
        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
      </svg>
    </div>
  );
}
