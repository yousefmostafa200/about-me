function About() {
  return (
    <section className='  bg-[#1abc9c] pt-40 pb-20'>
      <div className='container flex flex-col items-center justify-center mx-auto p-20 space-y-6 '>
        <h1 className='text-white text-3xl font-bold uppercase text-center'>
          about component
        </h1>

        <div className='flex justify-center items-center space-x-5'>
          <div className='bg-white h-1 w-20'></div>
          <i className='fa fa-solid fa-star text-white'></i>
          <div className='bg-white h-1 w-20'></div>
        </div>

        <div className='flex flex-col space-y-7 md:flex-row md:space-x-6 md:space-y-0'>
          <p className='text-white '>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.{' '}
          </p>
          <p className='text-white '>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
