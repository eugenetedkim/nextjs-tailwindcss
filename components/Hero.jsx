import Image from 'next/image';
import heroBackgroundImage from '../public/images/convictlake.jpg';

export default function Hero({ heading, message }) {
  return (
    <>
      {/* Hero Container */}
      <div className='relative flex justify-center h-screen items-center mb-12'>

        {/* Hero Background Image */}
        <Image
          src={heroBackgroundImage}
          fill='true'
          className='object-cover object-left'
          alt='Eugene fishing'
        />

        {/* Hero Background Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50' />

        {/* Hero Content */}
        <div className='z-0 text-white px-5 text-center'>
          <h2 className='text-6xl uppercase'>{ heading }</h2>
          <p className='text-2xl'>{ message }</p>
          <button className='px-6 py-1 border mt-2'>Learn More</button>
        </div>
      </div>
    </>
  );
};