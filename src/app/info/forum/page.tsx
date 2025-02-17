import React from 'react'
import Link from '@/components/Link/Link';
import ArticleList from '@/components/ArticleList/ArticleList';
import Avatar from '@/components/Avatar/Avatar';

export interface Topic {
    author_id: string
    id: string
    avatar: string
    date: string
    name: string
    content: string
    category: string
    tag: string[]
}

export interface Comment {
    id_article: string
    id_comment: string
    avatar: string
    content: string
    date: string
}

export interface Article {
    id: string
    date: string
    content: string
}

export interface Blog {
    author_id: string
    id: string
    avatar: string
    name: string
    content: string
}

export interface Event {
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
        id_article: "1",
        id_comment: "253",
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
                            <Link href={`/info/forum/article/${article.id}`}>
                                <p>{article.content}</p>
                            </Link>
                        </article>)
                    }
                    <Link href='/info/forum/all-articles/dance/'>Всі статті о танцях</Link>
                </section>
                <section className='flex flex-col gap-2 border-r-[1px] w-[calc(100%/3)] px-8'>
                    <h1 className='text-xl font-bold'>Блоги</h1>
                    {
                        dance_blogs.map((article, key) => <article className='flex flex-row gap-1' key={key}>
                            <Avatar
                                className='aspect-square rounded-full object-cover w-[40px] h-[40px]'
                                id={article.author_id}
                                avatar={article.avatar}
                            />
                            <div className='flex flex-col gap-1'>
                                <Link href={`/info/forum/all-articles/user/${article.author_id}`}>
                                    <p className='text-sm'>{article.name}</p>
                                </Link>
                                <Link href={`/info/forum/article/${article.id}`}>
                                    <p>{article.content}</p>
                                </Link>
                            </div>
                        </article>)
                    }
                    <div className='pl-[44px] flex flex-row justify-between'>
                        <Link href='/info/forum/all-articles/blogs/'>Всі блоги</Link>
                        <Link href='/info/forum/article/1'>Редполітика</Link>
                    </div>
                </section>
                <section className='flex flex-col gap-2 w-[calc(100%/3)] pl-8'>
                    <h1 className='text-xl font-bold'>Нові обговорення</h1>
                    {
                        new_discussions.map((article, key) => <article key={key}>
                            <p className='text-sm'>{article.date}</p>
                            <Link href={`/info/forum/article/${article.id}`}>
                                <p>{article.content}</p>
                            </Link>
                        </article>)
                    }
                    <Link href='/info/forum/all-articles/'>Всі нові обговорення</Link>
                </section>
            </section>
            <section className='py-4 flex flex-row overflow-scroll md:overflow-hidden gap-1 items-center'>
                <p>Спільноти:</p>
                <div className='flex flex-row gap-4'>
                    {community.map((val, key) =>
                        <p className='min-w-max px-2 py-1 rounded-full border-[1px]' key={key}>
                            <Link href={`/info/forum/all-articles/${val}`}>
                                {val}
                            </Link>
                        </p>)
                    }
                </div>
            </section>
            <ArticleList
                dance_topics={dance_topics}
                categories={categories}
                comments={comments}
                events={events}
            />
        </>
    )
}

export default Forum