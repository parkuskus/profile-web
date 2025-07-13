import React from 'react'
import Image from 'next/image'; 
import Link from 'next/link'; 
import FotoAufar from '@/public/foto-profil.png'
import Navbar from '@/components/Navbar';
import ButtonGroup from '@/components/CV-Github-Button';
import TechStack from '@/components/TechStack';
import ProjectCarousel from '@/components/Carousel';

export const page = () => {
  return (
    <div className='bg-[#132238] relative overflow-hidden'>
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
      <div className='grid grid-cols-2 gap-10 pt-30 px-40' id='features'>
        <div>
          <div className="text-white font-sora text-[50px] font-semibold leading-[72px]">
          👋 Hey There, I’m
          </div>
          <div className="text-[var(--UI-UX-Designer-500,#9249F2)] font-[Sora] text-[50px] font-semibold leading-[45px] underline underline-offset-auto decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]">
            Aufar Kusuma
          </div>
          <div className='text-[#A5ACB5] font-sora text-[16px] font-light leading-[25px] pt-10'>
            Aufar is a reliable and insightful person with a background as a student at the Bandung Institute of Technology (ITB) majoring in Informatics Engineering. Aufar always try to improve his skills through giving tutoring both to my students and my fellow associate. In addition, Aufar actively participate in organizations, both academic and non-academic organizations and always try to make an active contribution to the development of the organization. Currently, he’s expanding his knowledge in the vast world of computer science especially in Data Science and Machine Learning.
          </div>
          <ButtonGroup/>
        </div>
        <div className='relative w-fit mx-auto'>
          <div
            className="absolute top-1/2 left-1/4 
             w-[400px] h-[200px] bg-[#0096CC] rounded-full 
             opacity-60 blur-[100px] -z-0.9">
          </div>
          <Image 
            src={FotoAufar} 
            alt='Foto-Aufar.png'
            width={700}
            className='relative z-10'
            priority
          />
        </div>
      </div>
      {/* Tech Stack */}
      <div
      className="border-2 border-black 
        bg-[linear-gradient(90deg,_rgba(0,0,0,0.32)_0%,_rgba(0,0,0,0.90)_100%)] 
        backdrop-blur-[36px] rounded-[12px] p-4 text-white"
      >
        <TechStack/>
      </div>
      <div className="relative bg-[linear-gradient(180deg,_#132238_0%,_#2B384C_100%)] backdrop-blur-[36px] p-8 rounded-xl">
        <div className='font-[sora] text-[35px] font-semibold text-white mb-4 text-center pt-12'>
          Recent Project
        </div>
        <ProjectCarousel/>
      </div>
    </div>
  )
}

export default page;