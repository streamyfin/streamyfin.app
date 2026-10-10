import { TvScreenshotCarousel } from "@/components/TvScreenshotCarousel";

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
    </section>
  );
}
