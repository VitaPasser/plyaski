"use client"
import Avatar from '@/components/Avatar/Avatar';
import Button from '@/components/Button/Button';
import React, { useState } from 'react'
import Comment from './Comment';
import InputEmoji from "react-input-emoji";
import { v4 as uuidv4 } from 'uuid';

export interface Avatar {
  src: string
}

export interface User {
  name: string
  avatar: Avatar
}

export interface CommentType {
  id: string
  author: User
  content: string
  date_public: Date
  comment_reply: CommentType[]
}

const CommentSection = () => {
  const [replyId, setReplyId] = useState<string | null>(null)
  const [input, setInput] = useState<string>("")
  const [comments, setComments] = useState<CommentType[]>([
    {
      id: "253",
      author: {
        name: "VitaPasser",
        avatar: {
          src: "2.jpg"
        }
      },
      content: "Я міркую, що в цьому є сенс 🤔",
      date_public: new Date("2025-02-17 12:53:02"),
      comment_reply: []
    }
  ]);
  const currentUser: User = {
    name: "VitaPasser",
    avatar: {
      src: "2.jpg"
    }
  }
  return (
    <div className='flex flex-col gap-4'>
      <h3
        className='text-xl font-bold border-b-[1px] border-black pb-1'>
        {comments.length} Comment
      </h3>
      <section className='flex flex-row gap-1 pt-2'>
        <Avatar avatar={currentUser.avatar.src} />
        <InputEmoji
          borderColor="black"
          borderRadius={0}
          value={input}
          placeholder='Напишіть коментарій'
          onChange={setInput}
          shouldReturn
          shouldConvertEmojiToImage={false}
        />
        <Button onClick={() => {
          if (replyId) {
            setComments((comments) => {
              return searchCommentAndAddByPosition(comments, replyId, input)
            });
          } else {
            setComments((comments) => [...comments, {
              id: "sadas",
              author: {
                name: "VitaPasser",
                avatar: {
                  src: "2.jpg"
                }
              },
              content: input,
              date_public: new Date(),
              comment_reply: []
            }]);
          }
          // if (replyId) {
          //   setComments((comments) => comments.map(comment => {
          //     if (comment.id === replyId) {
          //       return {
          //         ...comment,
          //         comment_reply: [
          //           ...comment.comment_reply,
          //           {
          //             id: uuidv4(),
          //             author: {
          //               name: "VitaPasser",
          //               avatar: {
          //                 src: "2.jpg"
          //               }
          //             },
          //             content: input,
          //             date_public: new Date(),
          //             comment_reply: []
          //           }
          //         ]
          //       }
          //     } else {
          //       return comment
          //     }
          //   }))
          // } else {
          //   setComments((comments) => [...comments, {
          //     id: "sadas",
          //     author: {
          //       name: "VitaPasser",
          //       avatar: {
          //         src: "2.jpg"
          //       }
          //     },
          //     content: input,
          //     date_public: new Date(),
          //     comment_reply: []
          //   }]);
          // }
          setInput("");
        }}>
          Запостити
        </Button>
      </section>
      <section className='flex flex-col gap-6'>
        {comments.map((comment, key) =>
          <Comment
            setIsReply={setReplyId}
            comment={comment}
            key={key} />)}
      </section>
    </div>
  )
}

const searchCommentAndAddByPosition = (
  comments: CommentType[],
  replyId: string,
  input: string,
) => {
  return comments.map<CommentType>((comment): CommentType => {
    if (comment.id === replyId) {
      return {
        ...comment,
        comment_reply: [
          ...comment.comment_reply,
          {
            id: uuidv4(),
            author: {
              name: "VitaPasser",
              avatar: {
                src: "2.jpg"
              }
            },
            content: input,
            date_public: new Date(),
            comment_reply: []
          }
        ]
      }
    }

    if (comment.comment_reply.length === 0) {
      return comment;
    }

    return {
      ...comment,
      comment_reply: searchCommentAndAddByPosition(
        comment.comment_reply,
        replyId,
        input,
      )
    }

  })
}

export default CommentSection