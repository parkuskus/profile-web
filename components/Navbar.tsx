'use client'

import Link from 'next/link'
import { HiOutlineMail } from 'react-icons/hi' // email icon
import Image from 'next/image'
import Logo from '@/public/stack.svg' // Replace with your actual logo path

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-[#132238]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side: Logo + Name */}
        <div className="flex items-center space-x-4">
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <div>
            <h1 className="text-white font-sora text-sm md:text-base">
              Muhammad Aufar Rizqi Kusuma
            </h1>
            <p className="text-[#A5ACB5] text-xs font-sora md:text-sm">
              DATA ENTHUSIAST
            </p>
          </div>
        </div>

        {/* Right side: Nav Links + Button */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#home" className="text-white font-sora">
            Home
          </Link>
          <Link href="#recent-projects" className="text-[#A5ACB5] font-sora hover:text-white transition">
            Recent Project
          </Link>
          <Link href="#contact" className="text-[#A5ACB5] font-sora hover:text-white transition">
            Contact
          </Link>

          <Link
            href="#contact"
            className="flex font-sora items-center gap-2 px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition"
          >
            <HiOutlineMail className="text-xl" />
            <span>Send Message</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
