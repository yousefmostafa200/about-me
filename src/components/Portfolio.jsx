import img1 from '../assets/poert1.png';
import img2 from '../assets/port2.png';
import img3 from '../assets/port3.png';

function Portfolio() {
  return (
    <section className='pt-20 pb-14 '>
      <div className='container flex flex-col items-center justify-center mx-auto p-20 space-y-6 '>
        <h1 className=' text-[#2c3e50] text-4xl uppercase font-bold '>
          portfolio component
        </h1>

        <div className='flex justify-center items-center space-x-5'>
          <div className='bg-[#2c3e50] h-1 w-20'></div>
          <i className='fa fa-solid fa-star text-[#2c3e50]'></i>
          <div className='bg-[#2c3e50] h-1 w-20'></div>
        </div>

        <div className='flex flex-col justify-center items-center space-y-4 md:flex-row md:space-y-0 md:gap-6 md:flex-wrap '>
          <div className='relative group cursor-pointer  md:w-[350px] '>
            <img src={img1} alt='image 1' className='rounded-md ' />
            <div className='opacity-0 bg-[#1abc9c] flex items-center justify-center absolute top-0 bottom-0 w-full rounded-md group-hover:opacity-80 duration-300'>
              <i className='fa-solid fa-plus fa-6x text-white '></i>
            </div>
          </div>

          <div className='relative group cursor-pointer  md:w-[350px]  '>
            <img src={img2} alt='image 1' className='rounded-md' />
            <div className='opacity-0 bg-[#1abc9c] flex items-center justify-center absolute top-0 bottom-0 w-full rounded-md group-hover:opacity-80 duration-300'>
              <i className='fa-solid fa-plus fa-6x text-white '></i>
            </div>
          </div>

          <div className='relative group cursor-pointer  md:w-[350px] '>
            <img src={img3} alt='image 1' className='rounded-md' />
            <div className='opacity-0 bg-[#1abc9c] flex items-center justify-center absolute top-0 bottom-0 w-full rounded-md group-hover:opacity-80 duration-300'>
              <i className='fa-solid fa-plus fa-6x text-white '></i>
            </div>
          </div>

          <div className='relative group cursor-pointer  md:w-[350px] '>
            <img src={img1} alt='image 1' className='rounded-md' />
            <div className='opacity-0 bg-[#1abc9c] flex items-center justify-center absolute top-0 bottom-0 w-full rounded-md group-hover:opacity-80 duration-300'>
              <i className='fa-solid fa-plus fa-6x text-white '></i>
            </div>
          </div>

          <div className='relative group cursor-pointer  md:w-[350px] '>
            <img src={img2} alt='image 1' className='rounded-md' />
            <div className='opacity-0 bg-[#1abc9c] flex items-center justify-center absolute top-0 bottom-0 w-full rounded-md group-hover:opacity-80 duration-300'>
              <i className='fa-solid fa-plus fa-6x text-white '></i>
            </div>
          </div>

          <div className='relative group cursor-pointer  md:w-[350px] '>
            <img src={img3} alt='image 1' className='rounded-md ' />
            <div className='opacity-0 bg-[#1abc9c] flex items-center justify-center absolute top-0 bottom-0 w-full rounded-md group-hover:opacity-80 duration-300'>
              <i className='fa-solid fa-plus fa-6x text-white '></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
