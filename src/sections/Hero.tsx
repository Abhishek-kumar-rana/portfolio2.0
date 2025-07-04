import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg'
import AnimatedButtons from '@/components/HeroBbutton';

export const HeroSection = () => {
  return (
    <div className=' py-32 md:py-40 lg:py-40  relative z-0 overflow-x-clip'>
      <div className=' absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}>
        </div>
        {/* Centered ring container */}
        <div className="absolute inset-0 flex items-center justify-center -z-20">
          <div className="relative">
            <div className='size-[620px] hero-ring'></div>
            <div className='size-[820px] hero-ring'></div>
            <div className='size-[1020px] hero-ring'></div>
            <div className='size-[1220px] hero-ring'></div>
          </div>
          {/* orbitDuration?: string;
      shouldOrbit?:boolean
      shouldSpin?:boolean;
      spinDuration?:string; */}
          <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='32s'>
            <StarIcon className=' size-8 text-emerald-300/30' />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79}  shouldOrbit orbitDuration='32s' shouldSpin spinDuration='32s'>
            <SparkleIcon className=' size-8 text-emerald-300/20' />
          </HeroOrbit>
          <HeroOrbit size={512} rotation={-41} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='30s'>
            <div className='  size-2 rounded-full bg-emerald-300/10'></div>
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='32s'shouldSpin spinDuration='25s' >
            <SparkleIcon className=' size-12 text-emerald-300/10' />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='25s'>
            <StarIcon className=' size-12 text-emerald-300' />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='34s'shouldSpin spinDuration='25s' >
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

      <div className="container">
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} alt='Person peeking from behind laptop' className=' size-[100px]' />
          <div className=' bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className=' bg-green-500 rounded-full size-3 relative'>
              <div className=' bg-green-500 rounded-full absolute size-3 animate-ping-large'></div>
            </div>
            <div className=' text-sm font-semibold '>Availabe for new projects</div>
          </div>
        </div>
        <div className=' max-w-lg mx-auto'>
          {/* <h3 className=' font-serif text-2xl md:text-2xl text-center mt-8 tracking-wide'>Abhishek Kumar Rana</h3> */}
          <h2 className=' font-serif text-3xl md:text-4xl text-center mt-8 tracking-wide'>Building Exceptional User Experience</h2>
          <p className=' mt-4 text-center text-white/60 md:text-lg'>
            I specialize in transforming design into functional, high performing  web application. let&apos;s discuss your next project.
          </p>
        </div>
        {/* <div className=' flex flex-col items-center mt-8 gap-4'>
          <button className=' inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl '>
            <span className=' font-semibold'>Explore My Work</span>
            <ArrowDown className=" size-4" />
          </button>
          <button className=' inline-flex items-center border rounded-xl gap-2 bg-white text-gray-900 px-6 h-12 '>
            <span>😊</span>
            <span className=' font-semibold'>Resume/CV</span>
          </button>
        </div> */}
        <AnimatedButtons/>


      </div>

    </div>
  )
};
