import avatar from '../assets/avataaars.svg';

function Home() {
  return (
    <section className='pt-20 pb-14  bg-[#1abc9c]'>
      <div className='container flex flex-col items-center justify-center mx-auto p-20 space-y-6 '>
        <div className='w-72'>
          <img src={avatar} alt='avatar' className='w-full' />
        </div>
        <h1 className='text-white text-4xl font-bold '>START FRAMEWORK</h1>

        <div className='flex justify-center items-center space-x-5'>
          <div className='bg-white h-1 w-20'></div>
          <i className='fa fa-solid fa-star text-white'></i>
          <div className='bg-white h-1 w-20'></div>
        </div>

        <p className='text-white mb-0'>
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </section>
  );
}

export default Home;
