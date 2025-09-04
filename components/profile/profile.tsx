import Image from 'next/image';
import sara from '../../app/asset/image/sara1.jpg';

export default function Profile() {
  return (
    <div className="flex flex-col gap-4 max-h-screen items-center justify-center p-24 text-neutral-400">
      <div>
        <Image src={sara} alt="" className="w-80 h-80 rounded-full"></Image>
      </div>
      <h1>Hi, I am SARA</h1>
      <p className="text-base font-bold">
        I blog about web development- especially frontend.
      </p>
      <p className="text-base font-bold">frameworks like React,Nextjs</p>
    </div>
  );
}
