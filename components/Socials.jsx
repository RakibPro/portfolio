'use client';

import Link from 'next/link';
import {
    RiFacebookFill,
    RiLinkedinFill,
    RiGithubFill,
    RiInstagramFill,
} from 'react-icons/ri';

const icons = [
    {
        path: 'https://www.facebook.com/rakib.hossan.1998/',
        name: <RiFacebookFill />,
    },
    {
        path: '/',
        name: <RiLinkedinFill />,
    },
    {
        path: '/',
        name: <RiGithubFill />,
    },
    {
        path: '/',
        name: <RiInstagramFill />,
    },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index} target='_blank'>
                        <div className={`${iconStyles}`}>{icon.name}</div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
