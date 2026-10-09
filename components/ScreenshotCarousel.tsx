import * as React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ScreenshotCarousel() {
  const images: { title: string; subtitle: React.ReactNode; link: string }[] = [
    {
      title: "Overview",
      subtitle: (
        <span>
          See your next up episodes, continue watching and recently added
          items. Works with the{" "}
          <Link
            href="https://github.com/lostb1t/jellyfin-plugin-collection-import"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            collection import plugin
          </Link>{" "}
          to bring in collections from other sources.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (5).png",
    },
    {
      title: "Search",
      subtitle: (
        <span>
          Search for anything, with support for{" "}
          <Link
            href="https://gitlab.com/DomiStyle/jellysearch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            JellySearch
          </Link>{" "}
          and{" "}
          <Link
            href="https://github.com/fredrikburmester/marlin-search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            Marlin Search
          </Link>{" "}
          for faster, smarter results.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (1).png",
    },
    {
      title: "Libraries",
      subtitle: (
        <span>
          Browse all your libraries with every filter you could wish for, to
          find exactly the movie you are in the mood for.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (2).png",
    },
    {
      title: "Media",
      subtitle: (
        <span>
          Movies, TV shows or Live TV: watch everything from your server in
          one app.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (6).png",
    },
    {
      title: "Download",
      subtitle: (
        <span>
          Save movies and episodes to watch offline. Your Jellyfin server
          converts them on the fly, so anything you can stream, you can
          download.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (8).png",
    },
    {
      title: "Streaming Options",
      subtitle: (
        <span>
          Choose stream quality, audio and subtitles, whether you have 100
          Mbps or 100 Kbps.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (9).png",
    },
    {
      title: "Chromecast",
      subtitle: (
        <span>
          Cast to any Chromecast device from Android and iOS, for when the
          phone screen isn’t enough.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (10).png",
    },
    {
      title: "Extended controls",
      subtitle: (
        <span>
          Extended controls in the video player, including{" "}
          <Link
            href="https://github.com/intro-skipper/intro-skipper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            Intro Skipper
          </Link>{" "}
          support to skip intros and credits during your latest binge.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (11).png",
    },
    {
      title: "Request Media",
      subtitle: (
        <span>
          Discover, request and track new movies and shows right in the app,
          thanks to the{" "}
          <Link
            href="https://github.com/seerr-team/seerr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            Seerr
          </Link>{" "}
          integration (formerly Jellyseerr).
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/jellyseerr.png",
    },
    {
      title: "Session View",
      subtitle: (
        <span>
          As a server admin, see who is watching what, including codec,
          device and playback method.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/session_view.png",
    },
    {
      title: "Multi-language Support",
      subtitle: (
        <span>
          Available in more than 30 languages, translated by the community
          on{" "}
          <Link
            href="https://crowdin.com/project/streamyfin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            Crowdin
          </Link>
          .
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/localization screenshot.png",
    }
  ];

  return (
    <div className="w-[70vw] 2xl:w-[50vw]">
      <Carousel className="" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem 
              key={index} 
              className="md:basis-1/2 lg:basis-1/3"
              aria-label={`Feature ${index + 1} of ${images.length}`}
              >
              <div className="grid grid-rows-[auto_1fr_1fr] h-full w-full items-center justify-between text-center">
                <div className="h-full w-full flex flex-col items-center justify-center grow object-contain">
                  <Image
                    src={image.link}
                    alt={`Screenshot showing Feature ${image.title}`}
                    width={300}
                    height={300}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="mt-2 text-lg font-semibold" id={`feature-title-${index}`}>
                  {image.title}
                  </h3>
                <p className="text-sm text-gray-400" id={`feature-desc-${index}`}>
                  {image.subtitle}
                </p>
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
