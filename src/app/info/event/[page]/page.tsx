import { EventMiniature } from '@/components/Card/CardEvent';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react'
import Image from 'next/image';
import Map from '@/components/Card/Map/Map';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

interface Props {
    params: Promise<{
        page: string | undefined
    }>
}

export async function generateMetadata(
    { params }: Props,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    parent: ResolvingMetadata
): Promise<Metadata> {
    const pageNumber = Number(((await params).page || '1'));
    return {
        title: `Plyaska event by id ${pageNumber}`,
        description: "Plyaska - це сервіс агрегатор танцювальних суспільств, це можливість розділяти цінність танців з іншими у найближчому до вас місці, за пару кликів і 5 хвилин.",
    };
}

type Params = Promise<{
    page: string
}>

const Event = async ({
    params
}: { params: Params }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const pageNumber = Number(((await params).page || '1'));

    const card: EventMiniature = {
        id: 1,
        header: 'Потанцювати з пацанами',
        address: 'пр. Шевченко, 1Ф, Одеса, Одеська обл.',
        tags:
            [
                'Заклад'
            ]
        ,
        description: 'Ми збираємося навалити жесткого хардбасу на дитячому майданчику під пляшкою ситра, ай да до нас. У нас є шавуха гавайская (класично тож є, не переживай), ситро, львівскє різдвяне. Нас компашка з 7 чоловіків, дам вітаємо. Запалимо костер і будемо плясать коло нього та кликати дух складу виш мату(вже не актуально). Стиль танцю: вільний.',
        phone: "+380984322343",
        image:
        {
            src: '/1.jpg'
        },
        map: {
            x: 46.459466,
            y: 30.751784
        }
    }

    const phoneComponent = card.phone && <Link href={`tel:${card.phone}`} className='text-slate-600'>{card.phone}</Link>;
    return (
        <div className='w-full'>
            <div className='flex flex-col xl:rounded-3xl pb-6 overflow-hidden w-full gap-6 xl:gap-0'>
                <h1 className='sm:hidden text-2xl text-black'>{card.header}</h1>
                <section className='sm:hidden flex max-sm:flex-wrap flex-row gap-4 '>
                    <p className='text-slate-600'>{card.address}</p>
                    {phoneComponent}
                    <p className='px-2 text-slate-600'>{card.tags.map((val, key) => <span key={key} className='border-slate-300 rounded-full border-[1px] px-2 py-1'>{val}</span>)}</p>
                </section>
                <div className='flex flex-col xl:flex-row gap-6 xl:gap-8 w-full aspect-[9/16] md:aspect-[1/1] lg:aspect-[9/9] xl:aspect-[16/9]'>
                    <div className='object-cover w-full h-full rounded-3xl overflow-hidden order-2 xl:order-first'>
                        <Carousel className='h-full w-full'>
                            <CarouselContent className='h-full'>
                                <CarouselItem className='h-full'>
                                    <Image className='object-cover h-full w-full' src={card.image.src} width='600' height='600' alt='HADRBUSS' />
                                </CarouselItem>
                                <CarouselItem>
                                    <Image className='object-cover h-full w-full' src={card.image.src} width='600' height='600' alt='HADRBUSS' />
                                </CarouselItem>
                                <CarouselItem>
                                    <Image className='object-cover h-full w-full' src={card.image.src} width='600' height='600' alt='HADRBUSS' />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className='left-5' />
                            <CarouselNext className='right-5' />
                        </Carousel>

                    </div>
                    <Map
                        className='rounded-3xl w-full h-full rounded-br-3xl xl:rounded-br-md'
                        x={card.map.x}
                        y={card.map.y}
                    />
                </div>
                <div className='flex flex-col sm:gap-2 pt-2 gap-4' >
                    <h1 className='max-sm:hidden text-2xl text-black'>{card.header}</h1>
                    <section className='hidden sm:flex flex-wrap sm:flex-nowrap flex-row gap-4'>
                        <p className='text-slate-600'>{card.address}</p>
                        {phoneComponent}
                        <p className='px-2 text-slate-600'>{card.tags.map((val, key) => <span key={key} className='border-slate-300 rounded-full border-[1px] px-2 py-1'>{val}</span>)}</p>
                    </section>
                    <p className='hyphens-auto text-slate-600'>{card.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Event