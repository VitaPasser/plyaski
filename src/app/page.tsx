import Frame from '@/components/Frame/Frame';
import Header from '@/components/Header/Header';
import NavBarMobile from '@/components/Navbar/NavBarMobile';
import Welcome from '@/components/Welcome/Welcome';
import Image from 'next/image';

export default function Home() {
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
      <Frame className='pt-2 flex-col'>
        <main>
          <section>
            <Image src='/1.jpg' width='300' height='300' alt='HADRBUSS' />
          </section>
        </main>
      </Frame>
    </div>
  );
}
