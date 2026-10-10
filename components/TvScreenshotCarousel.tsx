import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Screenshots already include the TV frame (exported from the mockup),
// just like the iPhone screenshots. Add new ones to
// public/assets/screenshots/Screenshots_new/AppleTV/ and list them here.
const tvScreenshots: { title: string; subtitle: string; link: string }[] = [
  {
    title: "Home",
    subtitle:
      "Continue watching, next up and recently added items, right on your home screen.",
    link: "/assets/screenshots/Screenshots_new/AppleTV/01-home.png",
  },
  {
    title: "Resume Playback",
    subtitle:
      "Pick up exactly where you left off, or start again from the beginning.",
    link: "/assets/screenshots/Screenshots_new/AppleTV/02-resume-playback.png",
  },
  {
    title: "Search",
    subtitle:
      "Search your whole library with the remote, with results split into movies and series.",
    link: "/assets/screenshots/Screenshots_new/AppleTV/03-search.png",
  },
  {
    title: "Series Details",
    subtitle:
      "Ratings, genres, seasons and episodes at a glance, with one click to continue.",
    link: "/assets/screenshots/Screenshots_new/AppleTV/04-series-detail.png",
  },
  {
    title: "Player",
    subtitle:
      "A clean player with subtitles, audio options and the time your episode ends.",
    link: "/assets/screenshots/Screenshots_new/AppleTV/05-player.png",
  },
  {
    title: "Libraries",
    subtitle:
      "All your libraries in one place: movies, TV shows, collections and playlists.",
    link: "/assets/screenshots/Screenshots_new/AppleTV/06-library.png",
  },
  {
    title: "Movies",
    subtitle:
      "Browse your movies and filter by genre, year or tag, sorted the way you like.",
    link: "/assets/screenshots/Screenshots_new/AppleTV/07-movies.png",
  },
];

export function TvScreenshotCarousel() {
  return (
    // On phones the TV takes the full width (minus the page gutter), so the
    // device stays at least 200px tall as Apple's marketing guidelines require
    <div className="w-[calc(100vw-2rem)] max-w-4xl sm:w-[70vw]">
      <Carousel opts={{ loop: true }} aria-label="Apple TV screenshots">
        <CarouselContent>
          {tvScreenshots.map((screenshot, index) => (
            <CarouselItem
              key={index}
              aria-label={`Screenshot ${index + 1} of ${tvScreenshots.length}`}
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={screenshot.link}
                  alt={`Apple TV screenshot: ${screenshot.title}`}
                  width={2150}
                  height={1390}
                  sizes="(min-width: 1280px) 896px, (min-width: 640px) 70vw, 100vw"
                  // The first slide is visible right away at the top of the
                  // page, so load it immediately. The others can stay lazy.
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-auto w-full object-contain"
                />
                <h3 className="mt-3 text-lg font-semibold">
                  {screenshot.title}
                </h3>
                <p className="mt-1 max-w-xl text-sm text-gray-400">
                  {screenshot.subtitle}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* No room for arrows next to a full-width TV on phones; swipe instead */}
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
      </Carousel>
    </div>
  );
}
