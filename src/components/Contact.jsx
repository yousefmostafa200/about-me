function Contact() {
  return (
    <section className='pt-20 pb-14 '>
      <div className='container flex flex-col items-center justify-center mx-auto p-20 space-y-6 '>
        <h1 className=' text-[#2c3e50] text-4xl uppercase font-bold '>
          contact section
        </h1>

        <div className='flex justify-center items-center space-x-5'>
          <div className='bg-[#2c3e50] h-1 w-20'></div>
          <i className='fa fa-solid fa-star text-[#2c3e50]'></i>
          <div className='bg-[#2c3e50] h-1 w-20'></div>
        </div>

        <div className='md:w-1/2 w-3/4 space-y-7 p-5'>
          <div className='relative'>
            <input
              type='text'
              className='w-full py-3 border-b-2 border-gray focus:outline-none focus:border-blue-500 transition-colors peer'
              id='username'
              required
            />
            <label
              htmlFor='username'
              className='absolute left-0 bottom-2 transition-all transform -translate-y-1/2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-7 peer-valid:-translate-y-7 peer-focus:text-blue-500 peer-valid:text-blue-500'
            >
              User Name
            </label>
          </div>
          <div className='relative'>
            <input
              type='text'
              className='w-full py-3 border-b-2 border-gray focus:outline-none focus:border-blue-500 transition-colors peer'
              id='age'
              required
            />
            <label
              htmlFor='age'
              className='absolute left-0 bottom-2 transition-all transform -translate-y-1/2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-7 peer-valid:-translate-y-7 peer-focus:text-blue-500 peer-valid:text-blue-500'
            >
              Age
            </label>
          </div>
          <div className='relative'>
            <input
              type='email'
              className='w-full py-3 border-b-2 border-gray focus:outline-none focus:border-blue-500 transition-colors peer'
              id='email'
              required
            />
            <label
              htmlFor='email'
              className='absolute left-0 bottom-2 transition-all transform -translate-y-1/2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-7 peer-valid:-translate-y-7 peer-focus:text-blue-500 peer-valid:text-blue-500'
            >
              Email
            </label>
          </div>
          <div className='relative'>
            <input
              type='password'
              className='w-full py-3 border-b-2 border-gray focus:outline-none focus:border-blue-500 transition-colors peer'
              id='password'
              required
            />
            <label className='absolute left-0 bottom-2 transition-all transform -translate-y-1/2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-7 peer-valid:-translate-y-7 peer-focus:text-blue-500 peer-valid:text-blue-500'>
              Password
            </label>
          </div>
        </div>

        <button className='bg-[#1abc9c] px-4 py-3 rounded-lg '>
          Send Message
        </button>
      </div>
    </section>
  );
}

export default Contact;
