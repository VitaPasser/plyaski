import React from 'react'
import Image from 'next/image';
import Link from '@/components/Link/Link';
import { Topic, Comment, Event } from '@/app/info/forum/page';

const ArticleList = async ({
    tagType, dance_topics, comments, events, categories
}: {
    tagType?: string,
    dance_topics: Topic[],
    categories: string[],
    comments: Comment[],
    events: Event[]

}) => {
    const formattedTag = tagType ? decodeURI(`${tagType}`) : tagType;
    return (
        <>
            {tagType ? <h1 className='text-3xl font-bold pb-4'>Статті за темою {formattedTag}</h1> : ''}
            <div className='flex flex-row gap-8'>
                <section className='flex flex-col gap-4 md:w-1/2 items-center md:items-start  w-full'>
                    <div>
                        <input className="pl-4 py-1 border-[1px] border-black" list="category"
                            placeholder="Всі розділи форуму" />

                        <datalist id="category">
                            {categories.map((category, key) => <option key={key} value={category}></option>)}
                        </datalist>
                    </div>
                    {
                        dance_topics.map((topic, key) =>
                            <article className='flex flex-row gap-2  overflow-hidden ' key={key}>
                                <Link href={`/info/user/${topic.author_id}`}>
                                    <Image className='aspect-square rounded-full object-cover w-[40px] h-[40px]' src={`/${topic.avatar}`} width='160' height='160' alt='avatar' />
                                </Link>
                                <div className='flex flex-col gap-1 '>
                                    <p className='flex gap-1 items-center'>
                                        <span>
                                            <Link className='text-sm' href={`/info/forum/all-articles/user/${topic.author_id}`}>
                                                {topic.name}
                                            </Link>
                                        </span>
                                        <span className='text-sm'>
                                            {topic.date}
                                        </span>
                                    </p>
                                    <Link href={`/info/forum/article/${topic.id}`}>
                                        <p>{topic.content}</p>
                                    </Link>
                                    <p className='flex flex-row gap-1 text-sm'>
                                        <span className='min-w-max italic'>
                                            <Link href={`/info/forum/all-articles/${topic.category}`}>
                                                {topic.category}
                                            </Link>
                                        </span>
                                        <span>
                                            ·
                                        </span>
                                        {topic.tag.map((tag, key1) =>
                                            <span className='group/comma' key={key1}>
                                                <span className='min-w-max'>
                                                    <Link href={`/info/forum/all-articles/${tag}`}>
                                                        {tag}
                                                    </Link>
                                                </span>
                                                <span className='pr-1 group-last/comma:hidden'>,</span>
                                            </span>)}
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
                            <Link href={`/info/forum/article/${comment.id}#${comment.id}`}>
                                <p className='text-sm'>{comment.date}</p>
                            </Link>
                        </article>)}
                </section>
                <section className='hidden md:flex flex-col gap-4 w-72'>
                    <h1 className='text-xl font-bold'>Не пропустіть</h1>
                    {events.map((event, key) =>
                        <article className='flex flex-row' key={key}>
                            <Link className='mr-2 aspect-square w-[40px] h-[40px]' href={`/info/event/${event.id}`}>
                                <Image className='rounded-full aspect-square object-cover w-[40px] h-[40px]' src={`/${event.image}`} width='160' height='160' alt='avatar' />
                            </Link>
                            <div className='flex flex-col'>
                                <p className='text-sm'>{event.date}</p>
                                <Link href={`/info/event/${event.id}`}>
                                    <p>{event.name}</p>
                                </Link>
                            </div>
                        </article>)}
                </section>
            </div>
        </>
    )
}

export default ArticleList