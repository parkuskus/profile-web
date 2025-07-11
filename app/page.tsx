import React from 'react'
import Image from 'next/image'; 
import Link from 'next/link'; 
import FotoAufar from '@/public/foto-profil.png'

export const page = () => {
  return (
    <div className='bg-[#132238]'>
      <div className=''>
        My Name is Muhammad Aufar Rizqi Kusuma 
      </div>
      <div>
        <Image src={FotoAufar} alt='Foto-Profil.jpg' className='w-100'></Image>
        Undergraduate Student at Institut Teknologi Bandung
      </div>
      <div>
        <Link href="linkedin.com">Ini adalah linkedin</Link>
      </div>
    </div>
  )
}

export default page;