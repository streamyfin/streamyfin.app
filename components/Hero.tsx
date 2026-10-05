import Image from "next/image";

const platforms = ["iPhone", "iPad", "Apple TV", "Android"];

export function Hero() {
  return (
    <section className="flex flex-col items-center px-4 pt-16 pb-20 lg:pt-24 lg:pb-28 text-center">
      <h1 className="text-5xl font-bold tracking-tight lg:text-7xl">
        Streamyfin
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-300 text-balance lg:text-xl">
        A modern Jellyfin client with support for downloads, Live TV, skip
        intro & credits, trickplay images and more!
      </p>
      {/* Jumps to the Apple TV section further down */}
      <a
        href="#apple-tv"
        className="mt-4 text-lg font-medium underline decoration-primary underline-offset-4 hover:text-primary transition-colors"
      >
        Now also on Apple TV →
      </a>

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
