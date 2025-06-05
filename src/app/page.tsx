'use client'
import CardEvent, { EventMiniature } from '@/components/Card/CardEvent';
import Footer from '@/components/Footer/Footer';
import Frame from '@/components/Frame/Frame';
import Header from '@/components/Header/Header';
import Welcome from '@/components/Welcome/Welcome';
import { Suspense, useEffect, useState } from 'react';

export interface fetchUser {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: string;
  createAt: Date;
}

export interface fetchPromotionEvent {
  promotionId: string;
  eventActionId: string;
  promotion: {
    id: string;
    name: string;
    description: string;
    power: number;
    price: number;
    currency: {
      id: number;
      quotation: string;
    };
  }
}
export interface fetchList {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  description: string;
  coords: { type: string, coordinates: number[] };
  createAt: Date;
  author: fetchUser;
  images: { id: string, src: string }[];
  tags: { id: string, name: string }[];
  category: { id: string, name: string };
  promotionEvents: fetchPromotionEvent[];
}

export default function Home() {
  const [coord, setCoord] = useState<GeolocationCoordinates>()
  const [list, setList] = useState<EventMiniature[]>()

  useEffect(() => {

    async function fetchEventActions() {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => setCoord(pos.coords), (err) => {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }, {
          enableHighAccuracy: true,
          timeout: 1000,
          maximumAge: 0,
        })
        console.log(navigator.geolocation)
        console.log(coord)
      }

      const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
      const url = server_url + `events/near?latitude=${coord?.latitude}&longitude=${coord?.longitude}&page=1&pageSize=21&limit=21`
      console.log(server_url)
      console.log(url)
      // while (coord === undefined) {}
      if (coord === undefined) {
        return;
      }
      const data: fetchList[] = await (await fetch(url)).json()
      console.log(data)
      if (!Array.isArray(data)) { return; }
      const list_data: EventMiniature[] = data.map((list_element: fetchList) => {
        const list_end: EventMiniature = {
          id: list_element.id,
          header: list_element.name,
          description: list_element.description,
          address: list_element.address,
          phone: list_element.phoneNumber,
          map: { y: list_element.coords.coordinates[1], x: list_element.coords.coordinates[0] },
          tags: [list_element.category.name].concat(list_element.tags.map((tag) => tag.name)),
          image: {
            src: `${server_url}${list_element.images[0].src}`
          }
        };
        return list_end
      })
      console.log(list_data)
      setList(list_data)

    }
    if (!list) fetchEventActions()
  })
  // const list: EventMiniature = {
  //   id: 1,
  //   header: 'Потанцювати з пацанами',
  //   address: 'пр. Шевченко, 1Ф, Одеса, Одеська обл.',
  //   tags:
  //     [
  //       'Заклад'
  //     ]
  //   ,
  //   phone: "+380984321232",
  //   description: 'Ми збираємося навалити жесткого хардбасу на дитячому майданчику під пляшкою ситра, ай да до нас. У нас є шавуха гавайская (класично тож є, не переживай), ситро, львівскє різдвяне. Нас компашка з 7 чоловіків, дам вітаємо. Запалимо костер і будемо плясать коло нього та кликати дух складу виш мату(вже не актуально). Стиль танцю: вільний.',
  //   image:
  //   {
  //     src: '/1.jpg'
  //   },
  //   map: {
  //     x: 46.459466,
  //     y: 30.751784
  //   }
  // }
  // const listMultiply: EventMiniature[] = Array(30).fill(list);
  return (
    <>
      <Welcome className='text-white'>
        <Header classNameNavElements='hover:bg-white/30' />
        <Frame className='flex-col py-20 sm:py-44 md:py-72'>
          <h1 className='text-7xl font-bold'>Розділяй цінність танців з іншими</h1>
          <p className='pt-8 text-4xl'>Plyaska - це сервіс агрегатор танцювальних суспільств, це можливість розділяти цінність танців з іншими у найближчому до вас місці, за пару кликів і одну хвилину.</p>
        </Frame>
      </Welcome>
      <Frame className='pt-2 flex-col gap-12'>
        <main>
          <section className='flex flex-row flex-wrap gap-2'>
            <Suspense fallback={<div>Loading...</div>}>
              {
                list?.map((card, key) => <CardEvent
                  key={key}
                  id={card.id}
                  header={card.header}
                  address={card.address}
                  tags={card.tags}
                  description={card.description}
                  image={card.image}
                  map={card.map}
                  phone={card.phone}
                />)
              }
            </Suspense>
          </section>
        </main>
        <Footer />
      </Frame>
    </>
  );
}
