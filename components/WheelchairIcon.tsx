// Small wheelchair drawn as a line icon. The wheels are separate groups so
// they can spin on their own. Spinning is triggered by a parent with the
// `group` class (hover or press), and skipped for "reduce motion" users.
const wheelSpin =
  "origin-center [transform-box:fill-box] motion-safe:group-hover:animate-spin motion-safe:group-active:animate-spin";

export function WheelchairIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Push handle, backrest, seat and front leg */}
      <path d="M5 3h2l1 7h9l2.5 9" />

      {/* Big rear wheel with spokes so the rotation is visible */}
      <g className={wheelSpin}>
        <circle cx="10" cy="16" r="6" />
        <path d="M10 10v12M4 16h12M5.8 11.8l8.4 8.4M14.2 11.8l-8.4 8.4" strokeWidth={0.75} />
      </g>

      {/* Small front caster */}
      <g className={wheelSpin}>
        <circle cx="20" cy="20.5" r="1.5" />
        <path d="M18.5 20.5h3" strokeWidth={0.75} />
      </g>
    </svg>
  );
}
