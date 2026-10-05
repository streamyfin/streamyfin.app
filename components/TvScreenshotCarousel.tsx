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
const tvScreenshots: { title: string; link: string }[] = [
  { title: "Home", link: "/assets/screenshots/Screenshots_new/AppleTV/01-home.png" },
  { title: "Resume Playback", link: "/assets/screenshots/Screenshots_new/AppleTV/02-resume-playback.png" },
  { title: "Search", link: "/assets/screenshots/Screenshots_new/AppleTV/03-search.png" },
  { title: "Series Details", link: "/assets/screenshots/Screenshots_new/AppleTV/04-series-detail.png" },
  { title: "Player", link: "/assets/screenshots/Screenshots_new/AppleTV/05-player.png" },
  { title: "Libraries", link: "/assets/screenshots/Screenshots_new/AppleTV/06-library.png" },
  { title: "Movies", link: "/assets/screenshots/Screenshots_new/AppleTV/07-movies.png" },
];

export function TvScreenshotCarousel() {
  return (
    <div className="w-[70vw] max-w-4xl">
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
                  sizes="(min-width: 1280px) 896px, 70vw"
                  className="h-auto w-full object-contain"
                />
                <h3 className="mt-3 text-lg font-semibold">
                  {screenshot.title}
                </h3>
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
