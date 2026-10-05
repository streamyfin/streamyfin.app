import { WheelchairIcon } from "@/components/WheelchairIcon";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-white/2 py-12 text-sm text-gray-400">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-4">
          <a
            href="https://github.com/streamyfin/streamyfin"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-gray-600">·</span>
          <a
            href="https://discord.gg/aJvAYeycyY"
            className="hover:text-white transition-colors"
          >
            Discord
          </a>
          <span className="text-gray-600">·</span>
          <a
            href="mailto:developer@streamyfin.app"
            className="hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </div>
        <p className="mt-6">
          Only play media you own. Piracy is strictly prohibited.
        </p>
        <div className="mt-4">
          <a
            href="https://hexabyte.se/en/vps/?currency=eur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Sponsored VPS Hosting by Hexabyte Cloud
          </a>
        </div>
        <div className="mt-4">
          <a
            href="https://github.com/streamyfin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            © {new Date().getFullYear()} Streamyfin
          </a>
        </div>
        {/* Easter egg: hover (or press) to make the wheels spin */}
        <div className="mt-4">
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
