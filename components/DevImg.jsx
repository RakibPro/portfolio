import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
    return (
        <div className={`${containerStyles}`}>
            <Image
                src={imgSrc}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                alt=''
                className='mt-[1px]'
            />
        </div>
    );
};

export default DevImg;
