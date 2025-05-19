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
          See your next-up Episodes, continue watching, and recently added items. With support
          for {" "}
          <Link
            href="https://github.com/lostb1t/jellyfin-plugin-collection-import"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            collections import plugin
          </Link>{" "}
          for easy importing of external collections.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (5).png",
    },
    {
      title: "Search",
      subtitle: (
        <span>
          Search for anything - with support for{" "}
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
            MarlinSearch
          </Link>{" "}
          for an effortless searching experience.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (1).png",
    },
    {
      title: "Libraries",
      subtitle: (
        <span>
          View all your libraries with every type of filter you could wish for
          to find the exact type of movie you want at that moment.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (2).png",
    },
    {
      title: "Media",
      subtitle: (
        <span>
          Watch any type of media you want, whether it's movies,
          TV-shows, or Live-TV, all from your server in one app.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (6).png",
    },
    {
      title: "Download",
      subtitle: (
        <span>
          Download support inside the app with transcoded downloads and
          background downloads, using the{" "}
          <Link
            href="https://github.com/streamyfin/optimized-versions-server"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            optimized server
          </Link>
          .
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (8).png",
    },
    {
      title: "Streaming Options",
      subtitle: (
        <span>
          Customize how you watch your content—change stream quality, audio, and
          subtitles, whether it's 100Mbps or 100Kbps.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (9).png",
    },
    {
      title: "Chromecast",
      subtitle: (
        <span>
          Full support for Chromecast streaming on both Android and iOS, for
          when the mobile screen isn't enough.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (10).png",
    },
    {
      title: "Extended controls",
      subtitle: (
        <span>
          Extended video controls inside the video player, including integrated{" "}
          <Link
            href="https://github.com/intro-skipper/intro-skipper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            intro-skipper
          </Link>{" "}
          support so you can skip intros/credits during your latest binge.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (11).png",
    },
    {
      title: "Request Media",
      subtitle: (
        <span>
          Request content directly in the app with {" "}
          <Link href="https://github.com/Fallenbagel/jellyseerr" 
          target="_blank" rel="noopener noreferrer" 
          className="text-gray-400 underline"
          >
            Jellyseerr
          </Link>{" "} 
          integration. Discover, request, and track media with ease.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/jellyseerr.png",
    },
    {
      title: "Session View",
      subtitle: (
        <span>
          As an server admin, you can view the sessions of your users in the app, including informations about Codec, device and playback method.
        </span>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/session_view.png",
    },
    {
      title: "Multi-language Support",
      subtitle: (
        <span>
          Support for multiple languages, including German, Spanish, French, and Swedish, with more languages coming.
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
