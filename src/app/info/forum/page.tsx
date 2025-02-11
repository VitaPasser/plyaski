import React from 'react'
import Image from 'next/image';
import Link from '@/components/Link/Link';

interface Topic {
    author_id: string
    id: string
    avatar: string
    date: string
    name: string
    content: string
    category: string
    tag: string[]
}

interface Comment {
    id: string
    avatar: string
    content: string
    date: string
}

interface Article {
    id: string
    date: string
    content: string
}

interface Blog {
    author_id: string
    id: string
    avatar: string
    name: string
    content: string
}

interface Event {
    id: string
    image: string
    date: string
    name: string
}

const Forum = () => {
    const dance_article: Article = {
        id: "1",
        date: "6 лютого",
        content: "Hardbass digest #42: Нові тенденції у електронній музиці та хореографії"
    }
    const dance_articles: Article[] = new Array(5).fill(dance_article)
    const dance_blog: Blog = {
        author_id: "1",
        id: "1",
        avatar: "2.jpg",
        name: "Sirgay Simonov",
        content: "Hardbass digest #42: Нові тенденції у електронній музиці та хореографії"
    }
    const dance_blogs: Blog[] = new Array(4).fill(dance_blog)
    const new_discussion: Article = {
        id: "1",
        date: "2 години тому",
        content: "Танець, якому все одне на час"
    }
    const new_discussions: Article[] = new Array(5).fill(new_discussion)
    const community: string[] = new Array(12).fill("Hard bass")
    const dance_topic: Topic = {
        author_id: "1",
        id: "1",
        avatar: "4.jpg",
        name: "Vlad Saveliev",
        date: "10 лютого 2025",
        content: "Моя історія успіху в грецькій хореографії",
        category: "Greek dance",
        tag: ["Зорба", "Лерікос", "brake dance"]
    }
    const dance_topics: Topic[] = new Array(32).fill(dance_topic)
    const categories: string[] = ["Hard bass", "Greek dance", "Foxtrot"] 
    const comment: Comment = {
        id: "1",
        avatar: '3.jpg',
        date: '7 хвилин тому',
        content: 'Я тобі говорю, ні якого Щетинського немає, ти його видумав. Це брехня. Псіоп'
    }
    const comments: Comment[] = new Array(15).fill(comment)
    const event: Event = {
        id: "1",
        image: "5.jpg",
        date: "11 лютого",
        name: "Навалити жесткого хардбасу на дерибасівській"
    }
    const events: Event[] = new Array(10).fill(event)
    return (
        <>
            <section className='hidden md:flex flex-row border-[1px] border-x-0 py-4'>
                <section className='flex flex-col gap-2 border-r-[1px] w-[calc(100%/3)] pr-8'>
                    <h1 className='text-xl font-bold'>Статті о танцях</h1>
                    {
                        dance_articles.map((article, key) => <article key={key}>
                            <p className='text-sm'>{article.date}</p>
                            <Link href={`/info/${article.id}`}>
                                <p>{article.content}</p>
                            </Link>
                        </article>)
                    }
                    <Link href='/'>Всі статті о танцях</Link>
                </section>
                <section className='flex flex-col gap-2 border-r-[1px] w-[calc(100%/3)] px-8'>
                    <h1 className='text-xl font-bold'>Блоги</h1>
                    {
                        dance_blogs.map((article, key) => <article className='flex flex-row gap-1' key={key}>
                            <Image className='aspect-square rounded-full object-cover w-[40px] h-[40px]' src={`/${article.avatar}`} width='160' height='160' alt='avatar' />
                            <div className='flex flex-col gap-1'>
                                <Link href={`/info/user/${article.author_id}`}>
                                    <p className='text-sm'>{article.name}</p>
                                </Link>
                                <Link href={`/info/${article.id}`}>
                                    <p>{article.content}</p>
                                </Link>
                            </div>
                        </article>)
                    }
                    <div className='pl-[44px] flex flex-row justify-between'>
                        <Link href='/'>Всі блоги</Link>
                        <Link href='/'>Редполітика</Link>
                    </div>
                </section>
                <section className='flex flex-col gap-2 w-[calc(100%/3)] pl-8'>
                    <h1 className='text-xl font-bold'>Нові обговорення</h1>
                    {
                        new_discussions.map((article, key) => <article key={key}>
                            <p className='text-sm'>{article.date}</p>
                            <p>{article.content}</p>
                        </article>)
                    }
                    <Link href='/'>Всі нові обговорення</Link>
                </section>
            </section>
            <section className='py-4 flex flex-row overflow-scroll md:overflow-hidden gap-1 items-center'>
                <p>Спільноти:</p>
                <div className='flex flex-row gap-4'>
                    {community.map((val, key) =>
                        <p className='min-w-max px-2 py-1 rounded-full border-[1px]' key={key}>
                            {val}
                        </p>)
                    }
                </div>
            </section>
            <div className='flex flex-row gap-8'>
                <section className='flex flex-col gap-4 md:w-1/2 items-center md:items-start  w-full'>
                    <div>
                        <input className="pl-4 py-1 border-[1px] border-black" list="category"
                        placeholder="Всі розділи форуму" />

                        <datalist id="category">
                            {categories.map((category, key)=> <option key={key} value={category}></option>)}
                        </datalist>
                    </div>
                    {
                        dance_topics.map((topic, key) =>
                            <article className='flex flex-row gap-2  overflow-hidden ' key={key}>
                                <Image className='aspect-square rounded-full  object-cover w-[40px] h-[40px]' src={`/${topic.avatar}`} width='160' height='160' alt='avatar' />
                                <div className='flex flex-col gap-1 '>
                                    <p className='flex gap-1 items-center'>
                                        <span>
                                            <Link className='text-sm' href={`/info/user/${topic.author_id}`}>
                                                {topic.name}
                                            </Link>
                                        </span>
                                        <span className='text-sm'>
                                            {topic.date}
                                        </span>
                                    </p>
                                    <Link href={`/info/${topic.id}`}>
                                        <p>{topic.content}</p>
                                    </Link>
                                    <p className='flex flex-row gap-1 text-sm'>
                                        <span className='min-w-max italic'>
                                            {topic.category}
                                        </span>
                                        <span>
                                        ·
                                        </span>
                                        {topic.tag.map((tag, key1) =>
                                            <>
                                                <span className='min-w-max' key={key1}>
                                                    {tag}
                                                </span>
                                                <span className='pr-1 ml-[-0.25rem] last:last-of-type:hidden'>,</span>
                                            </>)}
                                    </p>
                                </div>
                            </article>
                        )
                    }

                </section>
                <section className='hidden md:flex flex-col gap-4 w-72'>
                    <h1 className='text-xl font-bold'>Коментарі</h1>
                    {comments.map((comment, key) =>
                        <article key={key}>
                            <Image className='mr-2 rounded-full  float-left aspect-square object-cover w-[40px] h-[40px]' src={`/${comment.avatar}`} width='160' height='160' alt='avatar' />
                            <p>{comment.content}</p>
                            <Link href={`/info/${comment.id}`}>
                                <p className='text-sm'>{comment.date}</p>
                            </Link>
                        </article>)}
                </section>
                <section className='hidden md:flex flex-col gap-4 w-72'>
                    <h1 className='text-xl font-bold'>Не пропустіть</h1>
                    {events.map((event, key) =>
                        <article className='flex flex-row' key={key}>
                            <Link href={`/info/${event.id}`}>
                                <Image className='mr-2 rounded-full  aspect-square object-cover w-[40px] h-[40px]' src={`/${event.image}`} width='160' height='160' alt='avatar' />
                            </Link>
                            <div className='flex flex-col'>
                                <p className='text-sm'>{event.date}</p>
                                <Link href={`/info/${event.id}`}>
                                    <p>{event.name}</p>
                                </Link>
                            </div>
                        </article>)}
                </section>
            </div>
        </>
    )
}

export default Forum