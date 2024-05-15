import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/spacex_icon.svg";
export default function Navbar() {
  return (
    <nav className='flex mx-32 justify-between items-center mb-10'>
      <Link href='/'>
        <Image src={Logo} width={100} height={100} alt='logo spacex' />
      </Link>
      <div className=' flex gap-20 font-medium'>
        <Link href='/'>Home</Link>
        <Link href='/launch'>Launch</Link>
        <Link href='/capsule'>Capsule</Link>
      </div>
    </nav>
  );
}
