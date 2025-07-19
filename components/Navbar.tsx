'use client'

import Link from 'next/link'
import { HiOutlineMail } from 'react-icons/hi' // email icon
import Image from 'next/image'
import Logo from '@/public/stack.svg' // Replace with your actual logo path

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-[#132238]">
      <div className="max-w-7xl mx-auto px-20 py-4 flex items-center justify-between">
        {/* Left side: Logo + Name */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-lg bg-[#9249F2] shadow-[0px_8px_24px_rgba(138,67,255,0.24)] flex justify-center items-center pt-1">
            <Image
              src="/stack.svg"
              alt="Logo"
              width={40}
              height={100}
              className="w-[100px] h-auto"
            />
          </div>
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
            className="flex font-sora items-center gap-3 px-5 py-3 border-[2px] font-semibold text-sm border-[#9249F2] text-purple-400 rounded-sm hover:bg-purple-500/10 transition"
          >
            <HiOutlineMail className="text-xl" />
            <span>Send Message</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
