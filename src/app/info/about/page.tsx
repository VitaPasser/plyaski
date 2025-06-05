import React from 'react'

const About = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full flex flex-col gap-16'>
        <article className='flex flex-col gap-8'>
          <h1 className='font-bold text-4xl'>Plyaska - це спосіб знайти танцювальне суспільство</h1>
          <p className='max-w-[768px] self-center'>Це сервіс агрегації танцювальних суспільств, щоб вам було зручно.</p>
        </article>
        <article className='flex flex-col gap-8 items-center'>
          <h2 className='font-bold text-3xl'>Команда</h2>
          <p className='max-w-[768px] indent-8'>Наша команда займається розробкою цього сервісу та просування. Ми можемо хвалитись тим що вона зіткана з різних професіоналів свого діла.</p>
        </article>
        <article className='flex flex-col gap-8 items-center'>
          <h2 className='font-bold text-3xl'>Мета</h2>
          <p className='max-w-[768px]'>Поширити об&apos;єднання людей завдяки цінності танців</p>
        </article>
      </div>
    </div>
  )
}

export default About