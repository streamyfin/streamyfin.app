import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { FeatureCarousel } from "@/components/FeatureCarousel";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AppleTvSection } from "@/components/AppleTvSection";
import { Footer } from "@/components/Footer";
import SnowfallComponent from "@/components/Snowfall";

export default function Home() {
  // Auto-enable snowfall during December for festive season
  const currentMonth = new Date().getMonth();
  const isDecember = currentMonth === 11;

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden relative">
      {isDecember && <SnowfallComponent />}
      <Header />
      <Hero />
      <AppleTvSection />

      <section className="flex flex-col items-center px-4 py-16 text-center">
        <h2 className="text-3xl font-bold lg:text-4xl">Features</h2>
        <p className="mt-4 max-w-2xl text-gray-400 text-balance">
          Everything you need to enjoy your Jellyfin library on the go.
        </p>
        <div className="mt-10">
          <ScreenshotCarousel />
        </div>
      </section>

      <section className="flex flex-col items-center px-4 py-16 mb-8 text-center">
        <h2 className="text-3xl font-bold lg:text-4xl">
          Companion plugin for Streamyfin
        </h2>
        <p className="mt-4 max-w-2xl text-gray-400">
          Allows for a centralised configuration of the Streamyfin application.
          Configure and synchronize the apps settings or notifications! With
          this plugin you allow the streamyfin application to do the following
          for all your users...
        </p>
        <div className="mt-10">
          <FeatureCarousel />
        </div>
      </section>

      <Footer />
    </div>
  );
}
