import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Map from '@/components/Card/Map/Map';

export interface Tag {
    tag: {
        name: string
    }
}
export interface EventMiniature {
    id: string
    header: string
    address: string
    tags: Tag[]
    description: string
    content?: string
    phone?: string
    image: {
        src: string
    }[],
    map: {
        x: number
        y: number
    }

}

const CardEvent = ({ id, header, address, tags, description, phone, image, map }: EventMiniature) => {
    const phoneComponent = phone && <p className='text-slate-600 min-w-max'>{phone}</p>;
    return (
        <div
            className='basis-[calc(100%)] 
            md:basis-[calc((100%-0.5rem)/2)] 
            xl:basis-[calc(1/3*100%-0.5rem/1.5)] 
            group/card
            transition ease-in-out delay-150 border-[#00000000] hover:border-[#000000] border-2 rounded-3xl  rounded-t-[1.64rem]'>
            <div className='flex flex-col transition ease-in-out delay-150 rounded-3xl pb-2 overflow-hidden '>
                <div className='flex flex-row rounded-bl-md overflow-hidden aspect-[48/29]'>
                    <Link href={`/info/event/${id}`} className='object-cover w-1/2'>
                        <Image className='object-cover min-w-full min-h-full' src={image[0].src} width='600' height='600' alt='HADRBUSS' />
                    </Link>
                    <Map
                        x={map.x}
                        y={map.y}
                    />
                </div>
                <Link href={`/info/event/${id}`} className='flex flex-col gap-2 pt-2'>
                    <h1 className='text-2xl px-2 text-black'>{header}</h1>
                    <section className='flex flex-col gap-2 px-2'>
                        <section className='flex flex-row gap-1 items-center overflow-hidden'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-slate-600 '>{address}</p>
                                {phoneComponent}
                            </div>
                            <p className='flex flex-row flex-wrap gap-1 px-2 text-slate-600'>{tags.map((val, key) => <span key={key} className='border-slate-300 rounded-full border-[1px] px-2 py-1'>{val.tag.name}</span>)}</p>
                        </section>
                    </section>
                    <p className='px-2 text-slate-600 line-clamp-3'>{description}</p>
                </Link>
            </div>
        </div>
    )
}

export default CardEvent