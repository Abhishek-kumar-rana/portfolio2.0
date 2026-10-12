import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiArrowUp } from 'react-icons/hi2';
import { navSections, siteConfig } from '@/lib/site';

export const Footer = () => {
  const footerLinks = [
    { title: 'GitHub', link: siteConfig.socials.github, icon: <FaGithub size={14} /> },
    { title: 'LinkedIn', link: siteConfig.socials.linkedin, icon: <FaLinkedinIn size={14} /> },
    { title: 'Email', link: `mailto:${siteConfig.email}`, icon: <MdEmail size={14} /> },
    { title: 'Instagram', link: 'https://www.instagram.com/abhishaans?igsh=NHpjbGg1ZmFwNzkz', icon: <FaInstagram size={14} /> },
    { title: 'WhatsApp', link: 'https://wa.me/916207021678?text=Hello%20Abhishek%2C%20I%20found%20your%20portfolio!', icon: <FaWhatsapp size={14} /> },
  ];

  return (
    <footer className=' relative z-0 overflow-hidden mt-8'>
      <div aria-hidden className=' absolute bg-emerald-400/30 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>

      <div className="container">
        <div className=' border-t border-white/15 pt-10 grid gap-10 md:grid-cols-3'>

          {/* brand */}
          <div className=' flex flex-col gap-3'>
            <p className=' font-serif text-2xl'>{siteConfig.shortName}</p>
            <p className=' text-sm text-white/50 max-w-xs leading-relaxed'>
              {siteConfig.role} at {siteConfig.company}, crafting fast and scalable web experiences from {siteConfig.location}.
            </p>
          </div>

          {/* quick links */}
          <nav aria-label='Footer'>
            <p className=' text-xs uppercase tracking-[0.25em] text-white/40 mb-4'>Explore</p>
            <ul className=' grid grid-cols-2 gap-x-6 gap-y-2 text-sm'>
              {navSections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className=' text-white/60 hover:text-emerald-300 transition-colors'>
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* socials */}
          <div>
            <p className=' text-xs uppercase tracking-[0.25em] text-white/40 mb-4'>Connect</p>
            <ul className="flex flex-wrap gap-2">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={link.title}
                    title={link.title}
                    className="grid place-items-center size-10 rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-200 hover:bg-emerald-300/10 hover:border-emerald-300/40 hover:text-emerald-300 hover:-translate-y-0.5"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className=' flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-10 py-4 border-t border-white/10 text-xs text-white/40'>
          <p>© {new Date().getFullYear()} {siteConfig.name}. Thank you for visiting!</p>
          <a href='#home' className=' group inline-flex shrink-0 items-center gap-2 whitespace-nowrap hover:text-white transition-colors'>
            Back to top
            <span className=' grid place-items-center size-7 rounded-full border border-white/15 group-hover:border-emerald-300/50 group-hover:-translate-y-0.5 transition-transform'>
              <HiArrowUp aria-hidden className=' size-3.5' />
            </span>
          </a>
        </div>
      </div>

      {/* signature wordmark */}
      <div aria-hidden className=' select-none pointer-events-none -mb-[4vw] [mask-image:linear-gradient(to_bottom,black_30%,transparent)]'>
        <p className=' font-serif leading-none text-center text-[19vw] tracking-tight bg-gradient-to-b from-emerald-300/[0.12] to-sky-400/0 text-transparent bg-clip-text'>
          ABHISHEK
        </p>
      </div>
    </footer>
  )
};
