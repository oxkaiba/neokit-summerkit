import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import StaticSpline from '@/public/staticSpline.png'

export default function PcLogoSummer() {
  return (
    <main className='overflow-hidden'>
      <div className="hidden md:block">
        <Spline scene="https://prod.spline.design/YYy-nVxYJs0HqA43/scene.splinecode" />
      </div>
      <div className="block md:hidden h-[35vh]">
        <Image src={StaticSpline} alt="Neo Summer" />
      </div>
    </main>
  );
}
