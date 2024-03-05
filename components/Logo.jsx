import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href='/'>
            {/* <Image src='/logo.svg' width={54} height={54} priority alt='logo' /> */}
            <p className='bg-[#fe705a] h-[54px]  w-[54px] text-white pt-3 ps-4 my-1 rounded-xl text-xl'>
                RK
            </p>
        </Link>
    );
};

export default Logo;
