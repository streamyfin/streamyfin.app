import Image from "next/image";
import { ArrowDown, Tv } from "lucide-react";

const platforms = ["iPhone", "iPad", "Apple TV", "Android"];

export function Hero() {
  return (
    <section className="relative isolate flex flex-col items-center px-4 pt-12 pb-20 lg:pt-20 lg:pb-28 text-center">
      {/* Soft purple glow behind the headline. Purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-105 w-[min(900px,100vw)] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
      />

      <a
        href="#apple-tv"
        className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-purple-200 transition-colors hover:bg-primary/20"
      >
        <Tv className="h-4 w-4" aria-hidden="true" />
        New: Now available on Apple TV
        <ArrowDown
          className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
          aria-hidden="true"
        />
      </a>

      <h1 className="mt-8 text-5xl font-bold tracking-tight lg:text-7xl">
        Streamyfin
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-300 text-balance lg:text-xl">
        A modern Jellyfin client with support for downloads, Live TV, skip
        intro & credits, trickplay images and more!
      </p>

      <div className="mt-10 flex flex-row flex-wrap justify-center gap-4">
        <a
          href="https://apps.apple.com/app/streamyfin/id6593660679"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/badges/app-store-badge.png"
            alt="Download on the App Store"
            width={2560}
            height={759}
            priority
            className="h-12 w-auto"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.fredrikburmester.streamyfin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/badges/google-play-badge.png"
            alt="Get it on Google Play"
            width={270}
            height={80}
            priority
            className="h-12 w-auto"
          />
        </a>
      </div>

      <p className="mt-6 text-sm text-gray-400">
        Available on {platforms.join(" · ")}
      </p>
    </section>
  );
}
