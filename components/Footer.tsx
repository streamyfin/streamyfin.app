import { WheelchairIcon } from "@/components/WheelchairIcon";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-white/2 py-12 text-sm text-gray-400">
      <div className="container mx-auto px-4 text-center">
        <nav
          aria-label="Footer links"
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
        >
          <a
            href="https://github.com/streamyfin/streamyfin"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span aria-hidden="true" className="text-gray-600">·</span>
          <a
            href="https://discord.streamyfin.app"
            className="hover:text-white transition-colors"
          >
            Discord
          </a>
          <span aria-hidden="true" className="text-gray-600">·</span>
          <a
            href="https://www.reddit.com/r/streamyfin/"
            className="hover:text-white transition-colors"
          >
            Reddit
          </a>
          <span aria-hidden="true" className="text-gray-600">·</span>
          <a
            href="mailto:developer@streamyfin.app"
            className="hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </nav>

        <p className="mt-6">
          Only play media you own, piracy is strictly prohibited.
        </p>

        <p className="mt-4">
          VPS hosting sponsored by{" "}
          <a
            href="https://hexabyte.se/en/vps/?currency=eur"
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Hexabyte
          </a>{" "}
          and{" "}
          <a
            href="https://swehosting.se/en/"
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            SweHosting
          </a>
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <a
            href="https://github.com/streamyfin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            © {new Date().getFullYear()} Streamyfin
          </a>
          <span aria-hidden="true" className="text-gray-600">·</span>
          <a
            href="https://github.com/streamyfin/streamyfin.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            Built with ❤️ by
            <WheelchairIcon className="h-5 w-5" />
            <span className="sr-only">Jan</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
