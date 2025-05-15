'use client';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b flex items-center justify-between px-6 z-50">
      {/* Left side: Logo and Brand */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg">
          <Image
            src="/ninja.png"
            alt="Capital Ninja Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </div>
        <span className="font-semibold text-lg text-black">CapitalNinja</span>
      </div>

      {/* Right side: Back to Home */}
      <Link
        href="/"
        className="inline-flex font-semibold text-black items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left mr-2 h-4 w-4"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Back to Home
      </Link>
    </header>
  );
};

export default Navbar;
