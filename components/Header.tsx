import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="relative z-10 flex flex-row justify-between items-center p-4 lg:px-8 lg:py-6">
      <div className="flex flex-row items-center gap-2 lg:gap-4">
        <Image
          src={"/assets/images/icon_new_withoutBackground.png"}
          width={40}
          height={40}
          alt="Streamyfin Logo"
        />
        <h1 className="font-bold text-2xl">Streamyfin</h1>
      </div>
      <div className="flex flex-row gap-4 lg:gap-8 items-center">
        <div className="h-6 lg:h-8 aspect-square flex items-center justify-center">
          <Link href="https://discord.streamyfin.app">
            <Image
              src={"/assets/images/discord.png"}
              width={100}
              height={100}
              alt="Discord icon"
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>
        <div className="h-6 lg:h-8 aspect-square flex items-center justify-center">
          <Link href="https://github.com/streamyfin/streamyfin">
            <Image
              src={"/assets/images/github.png"}
              width={100}
              height={100}
              alt="Github icon"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
