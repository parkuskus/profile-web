'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Projectsdata } from '@/types'

const projects: Projectsdata[] = [
  {
    title: 'Pokemon Simulation',
    description:
      'Prolog-base game that simulates the Pokemon game. In this program, you will be taken on an excursion to the world of Pokemon, where you can have, catch, and even fight with existing Pokemon.',
    image: '/project-1.png',
    category: 'Game Development',
    github: 'https://github.com/parkuskus/Tubes-Logkom-Pokemon',
  },
  {
    title: 'Nimons Hospital!',
    description:
      'C-based application that simulate an administration and management system of hospital. It support management for various type of user including the Patient, Doctor, and also Manager.',
    image: '/project-2.png',
    category: 'Game Development',
    github: 'https://github.com/parkuskus/Tubes-Alprog1-Nimons-Hospital',
  },
  {
    title: 'AES + RSA DBMS',
    description:
      'This project is a GUI-based database management system (DBMS) application built with Python. In this application, administrator can register accounts, log in, and have their data stored securely using RSA and AES encryption.',
    image: '/project-3.png',
    category: 'Database Management',
    github: 'https://github.com/parkuskus/Makalah-Matdis-RSA_AES_Encryption',
  },
  {
    title: 'ATM Simulation',
    description: 'This project is a simulation of an ATM system built using Python that was build in the framework of the final project for college course. It allows users to perform basic banking operations such as checking balance, withdrawing money, and depositing money. ',
    image: '/project-4.png',
    category: 'Simulation',
    github: 'https://github.com/parkuskus/Tubes-Berkom-1',
  },
]

export default function ProjectCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3 ,
      spacing: 24,
    },
    loop: true,
  })

  return (
    <div className="w-full px-10 py-10">
      <div className="relative">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-[#132238] p-4 rounded-xl flex flex-col justify-between min-h-[500px] shadow-md"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={280}
                className="rounded-md object-cover mb-4"
              />
              <p className="text-sm text-gray-400 mb-1">{project.category}</p>
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-1 mb-3">{project.description}</p>
              <a
                href={project.github}
                className="text-[#9249F2] text-sm font-medium flex items-center gap-1 hover:underline"
                target="_blank"
              >
                GitHub Link <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-[#1e293b] text-white rounded-full p-2 hover:brightness-110"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-[#9249F2] text-white rounded-full p-2 hover:brightness-110"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
