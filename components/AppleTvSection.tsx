import { Gamepad2, RefreshCw, Server } from "lucide-react";
import { TvScreenshotCarousel } from "@/components/TvScreenshotCarousel";

const highlights = [
  {
    icon: Gamepad2,
    title: "Built for the remote",
    text: "A big-screen interface designed for the Siri Remote.",
  },
  {
    icon: RefreshCw,
    title: "Pick up where you left off",
    text: "Same library, same watch progress across all your devices.",
  },
  {
    icon: Server,
    title: "Straight from your server",
    text: "Stream directly from your own Jellyfin server.",
  },
];

export function AppleTvSection() {
  return (
    // scroll-mt keeps the heading from touching the top edge after the anchor jump
    <section
      id="apple-tv"
      className="flex scroll-mt-8 flex-col items-center px-4 py-16 text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        New
      </p>
      <h2 className="mt-2 text-3xl font-bold lg:text-4xl">
        Streamyfin on Apple TV
      </h2>
      <p className="mt-4 max-w-2xl text-gray-400 text-balance">
        Your Jellyfin library, now on the biggest screen in your home.
      </p>

      <div className="mt-10">
        <TvScreenshotCarousel />
      </div>

      <div className="mt-12 grid w-full max-w-4xl gap-4 md:grid-cols-3">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="rounded-2xl border border-white/10 bg-white/3 p-6 text-left"
          >
            <highlight.icon className="h-6 w-6 text-primary" aria-hidden="true" />
            <h3 className="mt-4 font-semibold">{highlight.title}</h3>
            <p className="mt-1 text-sm text-gray-400">{highlight.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
