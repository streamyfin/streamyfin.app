import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { FeatureCarousel } from "@/components/FeatureCarousel";
import { Header } from "@/components/Header";
import { AppleTvSection } from "@/components/AppleTvSection";
import { DownloadSection } from "@/components/DownloadSection";
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

      <section className="flex flex-col items-center px-4 py-16 text-center">
        <h2 className="text-3xl font-bold lg:text-4xl">
          Companion plugin for Streamyfin
        </h2>
        <p className="mt-4 max-w-2xl text-gray-400">
          Install the{" "}
          <a
            href="https://github.com/streamyfin/jellyfin-plugin-streamyfin"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Streamyfin plugin
          </a>{" "}
          on your Jellyfin server to manage the app&apos;s settings for all
          your users in one place and send them push notifications. For
          example:
        </p>
        <div className="mt-10">
          <FeatureCarousel />
        </div>
      </section>

      <DownloadSection />
      <Footer />
    </div>
  );
}
