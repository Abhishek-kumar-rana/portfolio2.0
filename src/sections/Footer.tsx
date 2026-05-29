import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
export const Footer = () => {
  const footerLinks = [
    { title: 'LinkedIn', link: 'https://www.linkedin.com/in/abhishek-kumar-b32a75258/', icon: <FaLinkedinIn size={14} /> },
    { title: 'Gmail', link: 'mailto:lalanrana01000@gmail.com', icon: <MdEmail size={14} /> },
    { title: 'Instagram', link: 'https://www.instagram.com/abhishaans?igsh=NHpjbGg1ZmFwNzkz', icon: <FaInstagram size={14} /> },
    { title: 'WhatsApp', link: 'https://wa.me/916207021678?text=Hello%20Abhishek%2C%20I%20found%20your%20portfolio!', icon: <FaWhatsapp size={14} /> },
  ];

  return (
    <footer className=' relative  z-0 overflow-x-clip'>
          <div className=' absolute bg-emerald-400/30  h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 '></div>
      <div className="container">
        <div>

          
          <div className=' border-t border-white/15 relative'>
          <div className="flex flex-col md:flex-row justify-between items-center py-4  " >
            <div className="text-gray-500 text-sm mb-0 px-2 leading-relaxed">
              <span className=''>Thank you for visiting my portfolio!</span>
            </div>
            <div className="flex gap-4  lg:gap-6 justify-between  md:gap-2 mt-4 md:mt-0 lg:flex-row flex-row items-center md:flex-row md:items-center">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] text-white/60 text-sm font-medium transition-all duration-200 hover:bg-emerald-300/10 hover:border-emerald-300/40 hover:text-emerald-300 group"
                >
                  <span>{link.icon}</span>
                  {/* <span>{link.title}</span> */}
                  {/* <ArrowUpRightIcon className="size-3.5 opacity-50 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> */}
                </a>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
};
