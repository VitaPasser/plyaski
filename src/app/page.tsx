import Button from '@/components/Button/Button';
import CardEvent, { EventMiniature } from '@/components/Card/CardEvent';
import Frame from '@/components/Frame/Frame';
import Header from '@/components/Header/Header';
import NavBarMobile from '@/components/Navbar/NavBarMobile';
import Welcome from '@/components/Welcome/Welcome';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { FiMail } from "react-icons/fi";


export default function Home() {
  const list: EventMiniature = {
    header: 'Потанцювати з пацанами',
    address: 'вул. Сані, пл. Тайбея',
    tags:
      [
        'Заклад'
      ]
    ,
    description: 'Ми збираємося навалити жесткого хардбасу на дитячому майданчику, ай да до нас.',
    image:
    {
      src: '/1.jpg'
    },
    map: {
      x: 46.459466,
      y: 30.751784
    }
  }
  const listMultiply: EventMiniature[] = Array(30).fill(list);
  return (
    <div className='relative group ' id='root'>
      <NavBarMobile />
      <Welcome className='text-white'>
        <Header />
        <Frame className='flex-col py-20 sm:py-44 md:py-72'>
          <h1 className='text-7xl font-bold'>Розділяй цінність танців з іншими</h1>
          <p className='pt-8 text-4xl'>Plyaska - це сервіс агрегатор танцювальних суспільств, це можливість розділяти цінність танців з іншими у найближчому до вас місці, за пару кликів і 5 хвилин.</p>
        </Frame>
      </Welcome>
      <Frame className='pt-2 flex-col gap-16'>
        <main>
          <section className='flex flex-row flex-wrap gap-2'>
            {
              listMultiply.map((card, key) => <CardEvent
                key={key}
                header={card.header}
                address={card.address}
                tags={card.tags}
                description={card.description}
                image={card.image}
                map={card.map}
              />)
            }
          </section>
          <section className='flex flex-row flex-wrap gap-2'>
            {
              listMultiply.map((card, key) => <CardEvent
                key={key}
                header={card.header}
                address={card.address}
                tags={card.tags}
                description={card.description}
                image={card.image}
                map={card.map}
              />)
            }
          </section>
        </main>
        <footer className='pb-16 flex flex-col gap-y-4 sm:flex-row justify-between w-full'>
          <div className='flex flex-col gap-4'>
            <p>
              &copy; 2025 VitaPasser A$$-221 ONPU.
            </p>
            <Link href="/" className='hover:underline'>Політика конфіденційності</Link>
            <div>
              <label>
                <p className='flex flex-row content-center items-center gap-2'><FiMail /> Підписатись на нові оголошення та новини</p>
                <div className='flex flex-row content-center items-center gap-2 max-sm:flex-col'>
                  <input className='border-[1px] border-black px-4 py-1 ' type="text" />
                  <Button className='max-sm:rounded-full'>Підписатись <FaArrowRight /></Button>
                </div>
              </label>
            </div>
          </div>
          <div className='flex flex-col content-center justify-center gap-4'>
            <div className='flex flex-col content-center justify-center gap-1'>
              <Link href="https://www.linkedin.com/in/vitalii-vorobiov-42613725b/" className='hover:underline'>Linkedin</Link>
              <Link href="https://t.me/VitaPasser" className='hover:underline'>Telegram</Link>
            </div>
            <div className='flex flex-col content-center justify-center'>
              <p>Для рекламодавців:</p>
              <Link href="tel:+38098XXXXXXX" className='hover:underline'>+380 98 XXXXXXX</Link>
            </div>
          </div>
        </footer>
      </Frame>
    </div>
  );
}
