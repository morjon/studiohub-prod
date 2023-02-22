import { clsx } from "clsx";

export default function GooeyAnimation() {
  return (
    <div>
      <div className={clsx("relative inline-flex [filter:url(#gooey)]")}>
        <div
          className={clsx(
            "h-60 w-60 animate-movealt rounded-full ",
            "bg-zinc-100 bg-gradient-to-br from-white to-[#a872c77c]",
            "shadow-inner shadow-white"
          )}
        ></div>
        <div
          className={clsx(
            "h-40 w-40 animate-move rounded-full",
            "bg-zinc-300 bg-gradient-to-br from-white to-[#a872c7bf]",
            "shadow-inner shadow-white"
          )}
        ></div>
      </div>
      <svg className={clsx("absolute bottom-0 left-0")}>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
          <feColorMatrix
            values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 50 -40"
          />
        </filter>
      </svg>
    </div>
  );
}
