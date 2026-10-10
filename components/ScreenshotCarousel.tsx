import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Screenshots already include the iPhone 17 Pro frame (exported from the
// mockup). Add new ones to public/assets/screenshots/Screenshots_new/Iphone/2026/
// and list them here.
const screenshotDir = "/assets/screenshots/Screenshots_new/Iphone/2026";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 underline"
    >
      {children}
    </Link>
  );
}

const images: { title: string; subtitle: React.ReactNode; link: string }[] = [
  {
    title: "Home",
    subtitle: (
      <span>
        A big carousel with your latest additions, followed by continue
        watching and next up. Downloads and Chromecast are one tap away.
      </span>
    ),
    link: `${screenshotDir}/01-home.png`,
  },
  {
    title: "Libraries",
    subtitle: (
      <span>
        All your libraries at a glance, from movies and series to collections
        and playlists.
      </span>
    ),
    link: `${screenshotDir}/02-library.png`,
  },
  {
    title: "Player",
    subtitle: (
      <span>
        Swipe for brightness and volume, skip with one tap, use
        picture-in-picture, and see when your movie ends.
      </span>
    ),
    link: `${screenshotDir}/03-player.png`,
  },
  {
    title: "Playback Settings",
    subtitle: (
      <span>
        Set your skip lengths and gestures: swipe to skip, hold to speed up,
        pinch to zoom.
      </span>
    ),
    link: `${screenshotDir}/04-playback-settings.png`,
  },
  {
    title: "Search & Discover",
    subtitle: (
      <span>
        Find anything in your library, with support for{" "}
        <ExternalLink href="https://gitlab.com/DomiStyle/jellysearch">
          JellySearch
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink href="https://github.com/fredrikburmester/marlin-search">
          Marlin Search
        </ExternalLink>
        , and discover trending titles from{" "}
        <ExternalLink href="https://github.com/seerr-team/seerr">
          Seerr
        </ExternalLink>
        .
      </span>
    ),
    link: `${screenshotDir}/05-search.png`,
  },
  {
    title: "Request Media",
    subtitle: (
      <span>
        Ratings, genres and release dates at a glance, and one tap to request
        what you want to watch next.
      </span>
    ),
    link: `${screenshotDir}/06-media-details.png`,
  },
  {
    title: "Appearance",
    subtitle: (
      <span>
        Make the app yours: hero carousel, merged rows, episode thumbnails,
        hidden libraries and download progress in the Dynamic Island.
      </span>
    ),
    link: `${screenshotDir}/07-appearance.png`,
  },
  {
    title: "Plugins",
    subtitle: (
      <span>
        Works with Seerr, Streamystats, Marlin Search and KefinTweaks, plus
        awards from Wikidata and subtitles from OpenSubtitles.
      </span>
    ),
    link: `${screenshotDir}/08-plugins.png`,
  },
];

export function ScreenshotCarousel() {
  return (
    <div className="w-[70vw] 2xl:w-[50vw]">
      <Carousel opts={{ loop: true }} aria-label="iPhone screenshots">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
              aria-label={`Feature ${index + 1} of ${images.length}`}
            >
              <div className="flex h-full flex-col items-center text-center">
                {/* Every image gets the same portrait box, so the titles line up
                    even for the landscape player screenshot */}
                <div className="relative aspect-684/1400 w-full">
                  <Image
                    src={image.link}
                    alt={`iPhone screenshot: ${image.title}`}
                    fill
                    sizes="(min-width: 1536px) 16vw, (min-width: 1024px) 23vw, (min-width: 768px) 35vw, 70vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{image.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{image.subtitle}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
