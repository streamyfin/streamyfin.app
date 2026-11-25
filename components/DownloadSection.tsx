import Image from "next/image";

const platforms = ["iPhone", "iPad", "Apple TV", "Android"];

export function DownloadSection() {
  return (
    <section className="flex flex-col items-center px-4 py-16 mb-8 text-center">
      <p className="max-w-2xl text-2xl font-bold text-balance">
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
            className="h-12 w-auto"
          />
        </a>
        <a
          href="https://apps.obtainium.imranr.dev/redirect?r=obtainium://app/%7B%22id%22%3A%22com.fredrikburmester.streamyfin%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Fstreamyfin%2Fstreamyfin%22%2C%22author%22%3A%22streamyfin%22%2C%22name%22%3A%22Streamyfin%22%7D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/badges/obtainium-badge.png"
            alt="Get it on Obtainium"
            width={564}
            height={168}
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
