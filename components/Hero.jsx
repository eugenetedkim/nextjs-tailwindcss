import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10">
        <Image
          src="/images/convictlake.jpg"
          fill
          className='object-cover object-left'
          alt=""
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute top-0 right-0 bottom-0 left-0 z-20 bg-black/70" />

      <div className="absolute z-30 text-center">
        <h2>Heading</h2>
        <p>Message</p>
        <button>Book</button>
      </div>
    </div>
  );
};

export default Hero;