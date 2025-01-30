import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Map from './Map/Map';

export interface EventMiniature {
    header: string
    address: string
    tags: [string]
    description: string
    phone?: string
    image: {
        src: string
    },
    map: {
        x: number
        y: number
    }

}

const CardEvent = ({ header, address, tags, description, phone, image, map }: EventMiniature) => {
    const phoneComponent = phone && <p className='text-slate-600'>{phone}</p>;
    return (
        <div
            className='basis-[calc(100%)] 
            md:basis-[calc((100%-0.5rem)/2)] 
            xl:basis-[calc(1/3*100%-0.5rem/1.5)] 
            group/card
            transition ease-in-out delay-150 border-[#00000000] hover:border-[#000000] border-2 rounded-3xl border-b-0 rounded-t-[1.64rem]'>
            <div className='flex flex-col transition ease-in-out delay-150 rounded-3xl border-[#00000050] group-hover/card:border-[#000000] pb-2 border-b-2 overflow-hidden '>
                <div className='flex flex-row rounded-bl-md overflow-hidden '>
                    <Link href={"/"} className='object-cover w-1/2 aspect-[1/1.51]'>
                        <Image className='object-cover aspect-[1/1.51] min-w-full' src={image.src} width='300' height='300' alt='HADRBUSS' />
                    </Link>
                    <Map
                        x={map.x}
                        y={map.y}
                    />
                </div>
                <Link href={"/"} className='flex flex-col gap-2 pt-2' >
                    <h1 className='text-2xl px-2 text-black'>{header}</h1>
                    <section className='flex flex-col gap-2 px-2'>
                        <p className='text-slate-600'>{address}</p>
                        {phoneComponent}
                    </section>
                    <p className='px-2 text-slate-600'>{tags.map((val, key) => <span key={key} className='border-slate-300 rounded-full border-[1px] px-2 py-1'>{val}</span>)}</p>
                    <p className='px-2 text-slate-600 line-clamp-3'>{description}</p>
                </Link>
            </div>
        </div>
    )
}

export default CardEvent