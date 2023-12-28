import Image from 'next/image'

function Hero({heading, message}) {
  return (
    <div className='relative flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-[0]">
        <Image
          src="/images/convictlake.jpg"
          fill
          className='object-cover object-left'
          alt=""
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/50 z-[1]" />

      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;