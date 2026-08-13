import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-tint-200/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-tint-600 sm:flex-row">
        <span className="font-mono">Miss Lyn’s Kitchen</span>

        <span>
          © {new Date().getFullYear()} Miss Lyn’s Kitchen. All rights reserved.
          | Website by{" "}
          <Link href="https://ammoliteai.vercel.app/" className="underline">
            AmmoliteAI
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
