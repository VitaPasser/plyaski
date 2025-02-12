import React from 'react'
import { Comment, Topic, Event } from '../../page';
import ArticleList from '@/components/ArticleList/ArticleList';

type Params = Promise<{
    tag: string[]
}>

const AllArticles = async ({
    params
}: { params: Params }) => {
    const tagType = (await params).tag;
    let formattedTag: string | undefined = undefined;
    if (Array.isArray(tagType) && (tagType.length > 1) && (tagType[0].toLowerCase() === "user")) {
        formattedTag = `користувача ${tagType[1]}`.replaceAll("%20", " ");
    } else if (Array.isArray(tagType) && (tagType.length === 1)) {
        formattedTag = tagType[0] ? `${tagType[0]}`.replaceAll("%20", " ") : tagType[0];
    }

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
            <ArticleList
                tagType={formattedTag}
                dance_topics={dance_topics}
                categories={categories}
                comments={comments}
                events={events}
            />
        </>
    )
}

export default AllArticles