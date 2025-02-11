import CardEvent, { EventMiniature } from '@/components/Card/CardEvent';
import Footer from '@/components/Footer/Footer';
import Frame from '@/components/Frame/Frame';
import Header from '@/components/Header/Header';
import NavBarMobile from '@/components/Navbar/NavBarMobile';
import Welcome from '@/components/Welcome/Welcome';
import { POST } from '@/lib/http';
import { Suspense } from 'react';

const TAKE_EVENTS_MINIATURES = `
      query {
        events(take:30){
          id
          header
          address
          tags {
            tag {
              name
            }
          }
          description
          phone
          image {
            src
          }
          map {
            x
            y
          }
        }
      }
    `

export default async function Home() {
  // const list: EventMiniature = {
  //   id: "1",
  //   header: 'Потанцювати з пацанами',
  //   address: 'пр. Шевченко, 1Ф, Одеса, Одеська обл.',
  //   tags:
  //     [
  //       'Заклад'
  //     ]
  //   ,
  //   phone: "+380984321232",
  //   description: 'Ми збираємося навалити жесткого хардбасу на дитячому майданчику під пляшкою ситра, ай да до нас. У нас є шавуха гавайская (класично тож є, не переживай), ситро, львівскє різдвяне. Нас компашка з 7 чоловіків, дам вітаємо. Запалимо костер і будемо плясать коло нього та кликати дух складу виш мату(вже не актуально). Стиль танцю: вільний.',
  //   image:[
  //   {
  //     src: '/1.jpg'
  //   }],
  //   map: {
  //     x: 46.459466,
  //     y: 30.751784
  //   }
  // }
  // const listMultiply: EventMiniature[] = Array(30).fill(list);
  const listMultiply: EventMiniature[] = (await POST(TAKE_EVENTS_MINIATURES)).events;
  return (
    <div className='relative font-sans group ' id='root'>
      <NavBarMobile />
      <Welcome className='text-white'>
        <Header classNameNavElements='hover:bg-white/30' />
        <Frame className='flex-col py-20 sm:py-44 md:py-72'>
          <h1 className='text-7xl font-bold'>Розділяй цінність танців з іншими</h1>
          <p className='pt-8 text-4xl'>Plyaska - це сервіс агрегатор танцювальних суспільств, це можливість розділяти цінність танців з іншими у найближчому до вас місці, за пару кликів і 5 хвилин.</p>
        </Frame>
      </Welcome>
      <Frame className='pt-2 flex-col gap-12'>
        <main>
          <Suspense>
            <section className='flex flex-row flex-wrap gap-2'>
              {
                listMultiply.map((card, key) => <CardEvent
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
            </section>
          </Suspense>
        </main>
        <Footer />
      </Frame>
    </div>
  );
}
