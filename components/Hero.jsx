import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
    RiBriefcase4Fill,
    RiUserStarFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
    return (
        <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none'>
            <div className='container mx-auto'>
                <div className='flex justify-between gap-x-8 '>
                    {/* text */}
                    <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                        <div className='text-xl uppercase font-semibold mb-4 text-primary tracking-[4px]'>
                            Web Developer
                        </div>
                        <h1 className='h1 mb-4 '>
                            Hello, I'm <br />
                            Rakib Hossan
                        </h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quidem numquam beatae dolore omnis, iure iste
                            non dolorum quasi voluptas voluptatem.
                        </p>
                        {/* buttons */}
                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href='/contact'>
                                <Button className='gap-x-2'>
                                    Contact Me <Send size={18} />
                                </Button>
                            </Link>
                            <Button variant='secondary' className='gap-x-2'>
                                Download CV <Download size={18} />
                            </Button>
                        </div>
                        {/* socials */}
                        <Socials
                            containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                            iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
                        />
                    </div>
                    {/* image container */}
                    <div className='hidden xl:flex relative'>
                        {/* badge 1 */}
                        <Badge
                            containerStyles='absolute top-[24%] -left-[5rem] '
                            icon={<RiUserStarFill />}
                            endCountNum={22}
                            badgeText='Skills'
                        />
                        {/* badge 2 */}
                        <Badge
                            containerStyles='absolute top-[80%] -left-[1rem] '
                            icon={<RiTodoFill />}
                            endCountNum={2}
                            badgeText='Finished Project'
                        />
                        {/* badge 3 */}
                        <Badge
                            containerStyles='absolute top-[55%] -right-8 '
                            icon={<RiBriefcase4Fill />}
                            endCountNum={2}
                            badgeText='Internship Completed'
                        />
                        <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 '></div>

                        <DevImg
                            containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
                            imgSrc='/hero/rakib.png'
                        />
                    </div>
                </div>
                {/* icon */}
                <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-primary' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
