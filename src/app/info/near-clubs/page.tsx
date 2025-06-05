'use client'
import { fetchList } from '@/app/page';
import CardEvent, { EventMiniature } from '@/components/Card/CardEvent';
import { useState, useEffect, Suspense } from 'react';

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
        // console.log(navigator.geolocation)
        // console.log(coord)
      }

      const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
      const url = server_url + `events/near/клуб?latitude=${coord?.latitude}&longitude=${coord?.longitude}&page=1&pageSize=21&limit=21`
      // console.log(server_url)
      // console.log(url)
      // while (coord === undefined) {}
      if (coord === undefined) {
        return;
      }
      const data: fetchList[] = await (await fetch(url)).json()
      // console.log(data)
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
      // console.log(list_data)
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
  //       'Клуб'
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
    <div className='w-full'>
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
    </div>
  );
}
