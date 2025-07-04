import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
export const Footer = () => {
  const footerLinks = [
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/abhishek-kumar-b32a75258/'
    },
    {
      title: 'Gmail',
      link: 'mailto:lalanrana01000@gmail.com'
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/abhishaans?igsh=NHpjbGg1ZmFwNzkz'
    },
    {
      title: 'WhatsApp',
      link: 'https://wa.me/916207021678?text=Hello%20Abhishek%2C%20I%20found%20your%20portfolio!'
    }
  ];

  return (
    <footer className=' relative  z-0 overflow-x-clip'>
          <div className=' absolute bg-emerald-400/30  h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 '></div>
      <div className="container">
        <div>

          
          <div className=' border-t border-white/15 relative'>
          <div className="flex flex-col md:flex-row justify-between items-center py-4  " >
            <div className="text-gray-500 text-sm mb-0 px-2 leading-relaxed">
              <span className=''>Abhishek, Thank you for visiting my portfolio!</span>
            </div>
            <div className="flex gap-4  lg:gap-6 justify-between  md:gap-2 mt-4 md:mt-0 lg:flex-row flex-col items-center md:flex-row md:items-center">
              {footerLinks.map((link, index) => (
                
                  <a 
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gray-700 font-semibold md:text-sm transition-colors"
                >
                  {link.title}
                <ArrowUpRightIcon className="size-6 inline-block ml-1" />
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
