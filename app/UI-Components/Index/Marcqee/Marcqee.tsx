import starImg from "@/public/star-text.png";
import Marque from "react-fast-marquee";
import Image from "next/image";

function Marcqee() {
  return (
    <Marque speed={60} gradient={false} className='py-6 border-t border-b border-gray-500'>
      <div className='flex items-center gap-3 mr-5'>
        <Image src={starImg} alt='StarImg' className='invert' />
        <h1 className='Unbounded text-3xl'>Quality Care Service</h1>
      </div>
      <div className='flex items-center gap-3 mr-5'>
        <Image src={starImg} alt='StarImg' className='invert' />
        <h1 className='Unbounded text-3xl'>Your Wellness Priority</h1>
      </div>
      <div className='flex items-center gap-3 mr-5'>
        <Image src={starImg} alt='StarImg' className='invert' />
        <h1 className='Unbounded text-3xl'>Caring for You Always</h1>
      </div>
      <div className='flex items-center gap-3 mr-5'>
        <Image src={starImg} alt='StarImg' className='invert' />
        <h1 className='Unbounded text-3xl'>Quality Care Service</h1>
      </div>
      <div className='flex items-center gap-3 mr-5'>
        <Image src={starImg} alt='StarImg' className='invert' />
        <h1 className='Unbounded text-3xl'>Your Wellness Priority</h1>
      </div>
      <div className='flex items-center gap-3 mr-5'>
        <Image src={starImg} alt='StarImg' className='invert' />
        <h1 className='Unbounded text-3xl'>Caring for You Always</h1>
      </div>
    </Marque>
  );
}

export default Marcqee;
