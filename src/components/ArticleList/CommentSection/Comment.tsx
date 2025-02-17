import React from 'react'
import { CommentType } from './CommentSection'
import Avatar from '@/components/Avatar/Avatar'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
import 'dayjs/locale/uk'
import Button from '@/components/Button/Button'

interface Props {
    comment: CommentType
    setIsReply: React.Dispatch<React.SetStateAction<string | null>>
    className?: string
}

const Comment = ({ comment, setIsReply, className }: Props) => {
    dayjs.extend(relativeTime)
    dayjs.locale("uk")
    return (
        <>
            <article id={comment.id} className={`flex flex-row gap-4 ${className ?? ""}`}>
                <Avatar
                    avatar={comment.author.avatar.src}
                    id={comment.author.name}
                />
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-row gap-4'>
                        <p className='font-semibold'>{comment.author.name}</p>
                        <p>{dayjs(comment.date_public).toNow()}</p>
                    </div>
                    <p>{comment.content}</p>
                    <Button
                        className='mt-2 rounded-full max-w-max'
                        onClick={() => setIsReply(comment.id)}
                    >
                        Відповісти
                    </Button>
                </div>
            </article>
            <section className='ml-4 flex flex-col gap-6'>
                {comment.comment_reply.map((comment2, key) =>
                    <Comment
                        setIsReply={setIsReply}
                        comment={comment2}
                        key={key} />)}
            </section>
        </>
    )
}

export default Comment