import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur border-tint-200/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={"/"}
          className="font-mono text-xl tracking-tight  text-pink-600 text-primary"
        >
          <b className="text-pink-600 text-2xl">MS</b>Lyns Kitchen
        </Link>
        <nav className="hidden gap-8 text-sm text-tint-600 md:flex">
          <Link href={"/gallery"} className="transition-colors hover:text-ink">
            Gallery{" "}
          </Link>

          <Link href={"/about"} className="transition-colors hover:text-ink">
            About
          </Link>
        </nav>
        <Link
          href={"/contact"}
          className="rounded-full bg-pink-600 px-4 py-2 text-sm text-white transition-colors hover:bg-primary-dark"
        >
          Make an order
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
