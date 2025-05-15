'use client';

import Link from 'next/link';
import Image from 'next/image';

const Navbar2 = () => {
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
    </header>
  );
};

export default Navbar2;
