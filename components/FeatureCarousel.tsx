import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    title: "Automatic Login",
    subtitle: "Automatically log in users into Jellyseerr",
    link: "/assets/screenshots/Screenshots_new/Iphone/Black/jellyseerr_2.PNG"
  },
  {
    title: "Custom Home Screen",
    subtitle: "Customize your Home screen using collections",
    link: "/assets/screenshots/Screenshots_new/Iphone/Black/home.jpg"
  },
  {
    title: "Notifications",
    subtitle: "Notification support",
    link: "/assets/screenshots/Screenshots_new/Iphone/Black/notifications_2.png"
  }
];

export function FeatureCarousel() {
  return (
    <div className="w-[70vw] 2xl:w-[50vw]">
      <Carousel className="" opts={{ loop: true }}>
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="grid grid-rows-[auto_1fr_auto] h-full w-full items-center justify-between text-center">
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <Image
                    src={feature.link}
                    alt={feature.title}
                    width={200}
                    height={200}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className={`mt-2 text-lg font-semibold`}>{feature.title}</h3>
                <p className={`text-sm text-gray-400`}>{feature.subtitle}</p>
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
