import CardEvent, { EventMiniature } from '@/components/Card/CardEvent';

export default function Home() {
  const list: EventMiniature = {
    id: 1,
    header: 'Потанцювати з пацанами',
    address: 'пр. Шевченко, 1Ф, Одеса, Одеська обл.',
    tags:
      [
        'Заклад'
      ]
    ,
    phone: "+380984321232",
    description: 'Ми збираємося навалити жесткого хардбасу на дитячому майданчику під пляшкою ситра, ай да до нас. У нас є шавуха гавайская (класично тож є, не переживай), ситро, львівскє різдвяне. Нас компашка з 7 чоловіків, дам вітаємо. Запалимо костер і будемо плясать коло нього та кликати дух складу виш мату(вже не актуально). Стиль танцю: вільний.',
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
    <div className='w-full'>
          <section className='flex flex-row flex-wrap gap-2'>
            {
              listMultiply.map((card, key) => <CardEvent
                key={key}
                id={key}
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
    </div>
  );
}
