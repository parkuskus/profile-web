'use client';

import Image from 'next/image';

const techIcons = [
  { src: '/tech-stack-1.png', alt: 'Python' },
  { src: '/tech-stack-2.png', alt: 'C' },
  { src: '/tech-stack-3.png', alt: 'Red Owl' }, // ganti sesuai kebutuhan
  { src: '/tech-stack-4.png', alt: 'TypeScript' },
  { src: '/tech-stack-5.png', alt: 'React' },
  { src: '/tech-stack-6.png', alt: 'Figma' },
];

export default function TechStack() {
  return (
    <section className="px-10 py-6 rounded-lg w-fit mx-auto">
      <h2 className="text-white font-sora text-[24px] font-semibold leading-[32px] mb-4">
        Tech Stack
      </h2>

      <div className="flex flex-wrap gap-4">
        {techIcons.map((icon) => (
          <div
            key={icon.alt}
            className="bg-[#132238] p-4 rounded-[12px] flex items-center justify-center w-40 h-20"
          >
            <Image src={icon.src} alt={icon.alt} width={50} height={30} />
          </div>
        ))}
      </div>
    </section>
  );
}
