function Footer() {
  return (
    <>
      <footer>
        {/* Upper Footer */}
        <div className='flex flex-col items-center justify-around md:flex-row md:pb-20  bg-[#2c3e50]'>
          {/* Location */}
          <div className='flex flex-col items-center justify-center space-y-3 text-white pt-20 md:pb-4'>
            <h4 className='uppercase text-2xl font-bold'>location</h4>
            <p className='font-light'>2215 John Daniel Drive</p>
            <p className='font-light'>Clark, MO 65243</p>
          </div>
          {/* Social */}
          <div className='flex flex-col items-center justify-center space-y-3 text-white pt-20 md:pb-8'>
            <h4 className='uppercase text-2xl font-bold'>around the web</h4>
            <ul className='flex space-x-2 '>
              <a
                href='#'
                className='flex items-center justify-center p-2 rounded-full border border-white'
              >
                <i className='fa-brands fa-facebook '></i>
              </a>
              <a
                href='#'
                className='flex items-center justify-center  p-2 rounded-full border border-white'
              >
                <i className='fa-brands fa-twitter '></i>
              </a>
              <a
                href='#'
                className='flex items-center justify-center  p-2 rounded-full border border-white'
              >
                <i className='fa-brands fa-linkedin-in '></i>
              </a>
              <a
                href='#'
                className='flex items-center justify-center p-2 rounded-full border border-white'
              >
                <i className='fa-solid fa-globe '></i>
              </a>
            </ul>
          </div>
          {/* About */}
          <div className='flex flex-col items-center justify-center space-y-3 text-white py-20 md:py-0 md:pt-20 '>
            <h4 className='uppercase text-2xl font-bold '>about freelancer</h4>
            <p className='font-light md:max-w-56'>
              Freelance is a free to use, licensed Tailwind theme created by
              Route
            </p>
          </div>
        </div>

        {/* Down Footer */}
        <div className='flex flex-col items-center justify-center  text-white py-8  bg-[#1a252f]'>
          <p>Copyright © Your Website 2024</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
