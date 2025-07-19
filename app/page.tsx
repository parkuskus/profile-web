import React from 'react' ;
import Image from 'next/image'; 
import FotoAufar from '@/public/foto-profil.png'
import Navbar from '@/components/Navbar';
import ButtonGroup from '@/components/CV-Github-Button';
import TechStack from '@/components/TechStack';
import ProjectCarousel from '@/components/Carousel';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

export default function Page() {
  return (
    <div className='bg-[#132238] relative overflow-hidden flex flex-col'>
      <div>
        <Navbar/>
      </div>

      {/* Ellipse biru*/}
      <div
      className="absolute top-[450px] left-[-550px] w-[859px] h-[859px] rounded-[859px] mx-auto my-10"
      style={{
        background: 'linear-gradient(180deg, #05182E 0%, #0E4789 85.03%)',
      }}
      ></div>

      {/* Ellipse kuning*/}
      <div
      className="absolute top-[-300px] left-[-400px] w-[528px] h-[528px] rounded-[528px] 
             bg-[rgba(255,148,77,0.12)] blur-[74px] z-[1000]"
      ></div>

      {/* Foto, Profil, dan Button*/}
      <div className='grid grid-cols-2 gap-10 pt-30 px-51' id='home'>
        <div className='pb-20'>
          <div className="text-white font-sora text-[50px] font-semibold leading-[72px]">
          👋 Hey There, I’m
          </div>
          <div className="text-[var(--UI-UX-Designer-500,#9249F2)] font-[Sora] text-[50px] font-semibold leading-[45px] underline underline-offset-auto decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]">
            Aufar Kusuma
          </div>
          <div className='text-[#A5ACB5] font-sora text-[17px] font-light leading-[24px] pt-10'>
            Aufar is a reliable and insightful person with a background as a student at the Bandung Institute of Technology (ITB) majoring in Informatics Engineering. Aufar always try to improve his skills through giving tutoring both to my students and my fellow associate. In addition, Aufar actively participate in organizations, both academic and non-academic organizations and always try to make an active contribution to the development of the organization. Currently, he’s expanding his knowledge in the vast world of computer science especially in Data Science and Machine Learning.
          </div>
          <ButtonGroup/>
        </div>
        <div className='relative w-full max-w-[1500px] mx-auto flex justify-center items-center'>
          <div
            className="absolute top-60 left-1/4 
             w-[400px] h-[250px] bg-[#0096CC] rounded-full 
             opacity-60 blur-[100px] -z-0.9">
          </div>
          <Image 
            src={FotoAufar} 
            alt='Foto-Aufar.png'
            width={400}
            className='relative z-10 left-15' 
            priority
          />
        </div>
      </div>
      {/* Tech Stack */}
      <div
      className="border-2 border-black 
        bg-[linear-gradient(90deg,_rgba(0,0,0,0.32)_0%,_rgba(0,0,0,0.90)_100%)] 
        backdrop-blur-[36px] p-4 text-white"
      >
        <TechStack/>
      </div>
      <div className="relative bg-[linear-gradient(180deg,_#132238_0%,_#2B384C_100%)] backdrop-blur-[36px] p-8 pb-35" id='recent-projects'>
        <div className="absolute right-[275px] rounded-[600px] opacity-[0.2] bg-[color:var(--Doctor-700,#998210)] blur-[62px] w-[300px] h-[300px]" />
        <div className='font-[sora] text-[35px] font-semibold text-white mb-4 text-center pt-12'>
          Recent Project
        </div>
        <ProjectCarousel/>
      </div>

      <div
       className="w-full h-[400px] bg-no-repeat bg-cover bg-center"
       style={{
         backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%), url('/bg-photo.jpeg')`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
       }}
       id='contact'
      >
        <div className="flex flex-col justify-start h-full text-left px-40 pt-20 gap-5">
          <div className="text-[#132238] font-sora text-[33px] font-bold leading-[40px] tracking-normal">
          Have a project idea in mind?<br />
          Get in touch and let's chat!
          </div>

          <div className="text-[#132238] font-sora text-[18px] font-normal leading-[24px]">
          I am taking on new projects. Waiting to hear about new <br/>
          projects, so if you'd like to chat please get in touch.
          </div>
          
          <div className='pt-3'>
            <Link
            href="https://www.linkedin.com/in/aufarkusuma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-5 rounded-[12px]
            bg-[#FFD91A] text-black font-sora font-semibold text-sm
             shadow-[0px_12px_48px_rgba(255,217,26,0.24)]
             transition max-w-[240px] hover:brightness-110"
            >
              Contact Me at Linkedin!
              <ArrowRight size={16} className="text-white" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

