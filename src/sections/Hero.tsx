import frontImage from '@/assets/images/frontImage3.png'
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg'
import AnimatedButtons from '@/components/HeroBbutton';

export const HeroSection = () => {
  return (
    <div>
      <div className='min-h-screen relative z-0 overflow-x-clip flex items-center justify-center'>

      {/* BACKGROUND GRAIN */}
      <div className='absolute inset-0 opacity-5 -z-30' style={{ backgroundImage: `url(${grainImage.src})` }}></div>

      {/* MASK LAYER */}
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10'>

        {/* ✅ RINGS - content ke center pe, position absolute inset-0 */}
        <div className="absolute inset-0 flex items-center justify-center -z-20">
          <div className="relative flex items-center justify-center">
            <div className='size-[620px] hero-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='size-[820px] hero-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='size-[1020px] hero-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='size-[1220px] hero-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
          </div>

          {/* HeroOrbit components same rahenge */}
          <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='32s'>
            <StarIcon className=' size-8 text-emerald-300/30' />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='32s'>
            <SparkleIcon className=' size-8 text-emerald-300/20' />
          </HeroOrbit>
          <HeroOrbit size={512} rotation={-41} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='30s'>
            <div className='  size-2 rounded-full bg-emerald-300/10'></div>
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='25s' >
            <SparkleIcon className=' size-12 text-emerald-300/10' />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='25s'>
            <StarIcon className=' size-12 text-emerald-300' />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='34s' shouldSpin spinDuration='25s' >
            <StarIcon className=' size-12 text-emerald-300' />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='20s'>
            <div className='  size-2 rounded-full bg-emerald-300/10'></div>
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='20s'>
            <SparkleIcon className=' size-16 text-emerald-300/10' />
          </HeroOrbit>
          <HeroOrbit size={710} rotation={90} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='14s'>
            <div className='  size-3 rounded-full bg-emerald-300/10'></div>
          </HeroOrbit>
          <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='10s'>
            <StarIcon className=' size-28 text-emerald-300' />
          </HeroOrbit>
        </div>

      </div>

      {/* ✅ MAIN CONTENT - screen ke center mein */}
      <div className="container flex flex-col items-center justify-center">

        {/* IMAGE + OVERLAY TEXT */}
        <div className='relative w-[400px] h-[550px]'>

          {/* ✅ IMAGE - neeche se bg mein fade hoti hai */}
          <Image
            src={frontImage}
            alt='Profile'
            className='w-[400px] h-[500px] object-cover object-top rounded-3xl'
            style={{
              maskImage: 'linear-gradient(to bottom, black 40%, transparent 85%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 85%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}
          />

          {/* ✅ TEXT - image ke upar, fade zone mein */}
          <div className='absolute bottom-4 left-0 right-0 flex justify-center'>
            <h2 className='font-manbow text-2xl md:text-3xl text-center text-white tracking-wide px-4'>
              Building Exceptional User Experience
            </h2>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className='max-w-lg mx-auto'>
          <p className='text-center text-white/60 md:text-lg'>
            I specialize in transforming design into functional, high performing
            web applications. Let&apos;s discuss your next project.
          </p>
        </div>

      </div>

    </div>
      <div className=' top-0 w-full flex items-center justify-center gap-5 z-10'>
        <AnimatedButtons />

      </div>
    </div>
  );
};