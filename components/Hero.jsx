import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <Image
        src="/images/convictlake.jpg"
        fill
        objectFit="cover"
        objectPosition="left center"
        alt=""
      />
      
    </div>
  );
};

export default Hero;