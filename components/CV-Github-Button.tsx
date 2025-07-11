'use client';

import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

export default function ButtonGroup() {
  return (
    <div className="flex gap-4 pt-8">
      {/* GitHub Profile Button */}
      <Link href="https://github.com/parkuskus" passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 font-sora
                     rounded-[8px] bg-[#9249F2] text-white font-semibold 
                     text-sm shadow-[0px_12px_48px_rgba(138,67,255,0.24)] 
                     transition hover:brightness-110"
        >
          GitHub Profile
          <ArrowRight size={16} />
        </a>
      </Link>

      {/* Download CV Button */}
      <Link href="@/public/cv.pdf" passHref legacyBehavior>
        <a
          download
          className="flex items-center gap-2 px-8 py-4 
                     rounded-[8px] bg-[#05182E] text-[#9249F2] font-sora font-semibold
                     text-sm border border-[#1f2c47] transition hover:brightness-110"
        >
          <Download size={16} />
          Download CV
        </a>
      </Link>
    </div>
  );
}
