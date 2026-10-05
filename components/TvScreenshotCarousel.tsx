import * as React from "react";
import Image from "next/image";
import { Tv } from "lucide-react";
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
  // { title: "Home", link: "/assets/screenshots/Screenshots_new/AppleTV/home.png" },
];

export function TvScreenshotCarousel() {
  // Until real screenshots exist, show a placeholder so the layout stays intact
  if (tvScreenshots.length === 0) {
    return (
      <div className="w-[85vw] max-w-4xl">
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/3 text-gray-500">
          <Tv className="h-10 w-10" aria-hidden="true" />
          <p className="text-sm">Apple TV screenshots coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[85vw] max-w-5xl">
      <Carousel opts={{ loop: true }} aria-label="Apple TV screenshots">
        <CarouselContent>
          {tvScreenshots.map((screenshot, index) => (
            <CarouselItem
              key={index}
              className="md:basis-2/3"
              aria-label={`Screenshot ${index + 1} of ${tvScreenshots.length}`}
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={screenshot.link}
                  alt={`Apple TV screenshot: ${screenshot.title}`}
                  width={1600}
                  height={1000}
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
