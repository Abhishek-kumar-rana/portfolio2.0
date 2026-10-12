import frontImage from '@/assets/images/frontImage3.png'
import Image from 'next/image';
import StarIcon from '@/assets/icons/star.svg'
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg'
import AnimatedButtons from '@/components/HeroBbutton';
import { HeroScene, Float3D } from '@/components/Hero3D';
import { ParallaxHeadline } from '@/components/ParallaxHeadline';

// Every ring and orbiting star gets its own 3D motion (tilt / drift / lag),
// so no two pieces of the hero move alike.
const rings = [
  { size: 620, tilt: 18, drift: -10, lag: 1.4 },
  { size: 820, tilt: 13, drift: -18, lag: 1.9 },
  { size: 1020, tilt: 9, drift: -26, lag: 2.4 },
  { size: 1220, tilt: 6, drift: -34, lag: 2.9 },
];

const orbits = [
  { size: 430, rotation: -14, orbitDuration: '32s', spinDuration: '32s', drift: -55, tilt: 20, lag: 1.1, node: <StarIcon className=' size-8 text-emerald-300/30' /> },
  { size: 440, rotation: 79, orbitDuration: '32s', spinDuration: '32s', drift: 35, tilt: 14, lag: 1.8, node: <SparkleIcon className=' size-8 text-emerald-300/20' /> },
  { size: 512, rotation: -41, orbitDuration: '32s', spinDuration: '30s', drift: -25, tilt: 10, lag: 2.6, node: <div className='  size-2 rounded-full bg-emerald-300/10'></div> },
  { size: 530, rotation: 178, orbitDuration: '32s', spinDuration: '25s', drift: 45, tilt: 16, lag: 1.4, node: <SparkleIcon className=' size-12 text-emerald-300/10' /> },
  { size: 550, rotation: 20, orbitDuration: '32s', spinDuration: '25s', drift: -70, tilt: 24, lag: 1.0, node: <StarIcon className=' size-12 text-emerald-300' /> },
  { size: 590, rotation: 98, orbitDuration: '34s', spinDuration: '25s', drift: 60, tilt: 22, lag: 1.6, node: <StarIcon className=' size-12 text-emerald-300' /> },
  { size: 650, rotation: -5, orbitDuration: '36s', spinDuration: '20s', drift: -30, tilt: 8, lag: 2.2, node: <div className='  size-2 rounded-full bg-emerald-300/10'></div> },
  { size: 710, rotation: 144, orbitDuration: '38s', spinDuration: '20s', drift: 28, tilt: 12, lag: 2.8, node: <SparkleIcon className=' size-16 text-emerald-300/10' /> },
  { size: 710, rotation: 90, orbitDuration: '40s', spinDuration: '14s', drift: -40, tilt: 10, lag: 2.0, node: <div className='  size-3 rounded-full bg-emerald-300/10'></div> },
  { size: 800, rotation: -72, orbitDuration: '42s', spinDuration: '10s', drift: -85, tilt: 28, lag: 1.3, node: <StarIcon className=' size-28 text-emerald-300' /> },
];

export const HeroSection = () => {
  return (
    <section id='home' aria-label='Introduction' className='relative'>
      <HeroScene className='min-h-[100svh] relative z-10 overflow-x-clip flex items-center justify-center pt-[max(4.5rem,9svh)] pb-[max(3.5rem,8svh)]'>


      {/* MASK LAYER */}
      <div aria-hidden className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10'>

        <div className="absolute inset-0 -z-20">
          {/* ✅ RINGS - each one tilts on its own */}
          {rings.map((ring) => (
            <Float3D key={ring.size} tilt={ring.tilt} drift={ring.drift} lag={ring.lag} perspective={1400} className="absolute inset-0">
              <div className='hero-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' style={{ width: ring.size, height: ring.size }}></div>
            </Float3D>
          ))}

          {/* ✅ ORBITS - each star drifts on its own */}
          {orbits.map((orbit, i) => (
            <Float3D key={i} tilt={orbit.tilt} drift={orbit.drift} lag={orbit.lag} perspective={1200} className="absolute inset-0">
              <HeroOrbit size={orbit.size} rotation={orbit.rotation} shouldOrbit orbitDuration={orbit.orbitDuration} shouldSpin spinDuration={orbit.spinDuration}>
                {orbit.node}
              </HeroOrbit>
            </Float3D>
          ))}
        </div>

      </div>

      {/* ✅ MAIN CONTENT - screen ke center mein */}
      <div className="w-full px-4 md:px-6 flex flex-col items-center justify-center">

        {/* IMAGE + OVERLAY TEXT */}
        <div className='relative w-full max-w-[400px] h-[min(460px,54svh)] md:h-[min(550px,58svh)] flex items-center justify-center '>

          {/* glow behind the portrait */}
          <Float3D tilt={0} drift={26} lag={2.4} className='absolute inset-0 grid place-items-center pointer-events-none'>
            <div aria-hidden className='size-64 sm:size-80 rounded-full bg-emerald-400/15 blur-3xl' />
          </Float3D>

          {/* ✅ IMAGE - neeche se bg mein fade hoti hai */}
          <Float3D tilt={11} drift={8} lag={1}>
            <div
              className='relative w-[min(260px,30svh)] h-[min(350px,40svh)] md:w-[min(300px,33svh)] md:h-[min(400px,44svh)] rounded-3xl overflow-hidden'
              style={{
                maskImage: 'linear-gradient(to bottom, black 40%, transparent 85%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 85%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'destination-in',
              }}
            >
              <Image
                src={frontImage}
                alt='Portrait of Abhishek Kumar Rana, Frontend Engineer'
                priority
                sizes='(min-width: 375px) 300px, 260px'
                className='w-full h-full object-cover object-top'
              />
            </div>
          </Float3D>

          {/* ✅ TEXT - original size; rises with the page (a bit faster), grows upward, and fades out before the hero ends */}
          <div className='absolute bottom-4 left-0 right-0 pointer-events-none'>
            <ParallaxHeadline speed={-0.35} grow={2.2} growRange={[0, 260]} minOpacity={0.3} fade={[270, 380]} className='origin-bottom'>
              <Float3D tilt={7} drift={20} lag={1.5} className='flex justify-center'>
                <h1 className=' text-xl sm:text-2xl md:text-3xl leading-snug text-center text-white tracking-wide px-4 '>
                  <span className='sr-only'>Abhishek Kumar Rana, Frontend Engineer - </span>
                  <span>BUILDING </span>
                  <span className='bg-white text-black'>EX</span>
                  <span className='text-emerald-500'>CEPTIONAL</span>
                  <span > USER </span>
                  <span className='bg-white text-black'> EX</span>
                  <span>PERIENCE </span>
                </h1>
              </Float3D>
            </ParallaxHeadline>
          </div>
        </div>

        {/* DESCRIPTION */}
        <ParallaxHeadline speed={0} fade={[20, 160]} className='max-w-lg mx-auto relative z-10'>
        <Float3D tilt={5} drift={13} lag={1.8}>
          <p className='text-center text-white/60 mt-[2.5svh] text-sm font-light md:text-base leading-relaxed px-4'>
            I specialize in transforming design into functional, high performing
            web applications. Let&apos;s discuss your next project.
          </p>
        </Float3D>
        </ParallaxHeadline>
      {/* Buttons: in flow on mobile; on desktop pinned to the bottom-left / bottom-right corners */}
      <div className='w-full mt-6 md:mt-0 md:absolute md:inset-x-0 md:px-6 md:bottom-[max(1.5rem,4svh)] flex items-center justify-center z-10'>
        <AnimatedButtons />

      </div>
        </div>

        {/* SCROLL CUE */}
        <Float3D tilt={0} drift={-10} lag={2} className='hidden md:flex absolute bottom-6 inset-x-0 justify-center'>
        <ParallaxHeadline speed={0} fade={[10, 120]}>
        <a
          href='#experience'
          aria-label='Scroll to experience'
          className='flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white/70 transition-colors'
        >
          <span className='relative h-9 w-5 rounded-full border border-white/25'>
            <span className='absolute left-1/2 top-1.5 -translate-x-1/2 h-2 w-0.5 rounded-full bg-emerald-300 animate-bounce' />
          </span>
          Scroll
        </a>
        </ParallaxHeadline>
        </Float3D>

      </HeroScene>

    </section>
  );
};