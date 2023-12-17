import Image from 'next/image'

const Hero = () => {
  return (
    <div class="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/convictlake.jpg"
        fill
        objectFit="cover"
        objectPosition="left center"
        alt=""
      />
      {/* Overlay */}
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
        <h2>Heading</h2>
        <p>Message</p>
        <button>Book</button>
      </div>
    </div>
  );
};

export default Hero;