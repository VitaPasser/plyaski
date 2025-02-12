"use client";
import React from 'react'
import { CommentSection as CommentSection2 } from 'react-comments-section';
import './index.css'

const CommentSection = ({ articleId }: {
    articleId: string
}) => {
    const data = [
        {
            userId: '02b',
            comId: '017',
            fullName: 'VitaPasser',
            userProfile: 'https://www.linkedin.com/in/vitalii-vorobiov-42613725b/',
            text: 'Я міркую, що це має сенс 🤔',
            timestamp: "2024-09-28T10:34:56Z",
            avatarUrl: '/2.jpg',
            replies: []
        }
    ]
    return (
        <div id={articleId} className='w-full'>
            <CommentSection2

                overlayStyle={{
                    "width": "100%",
                    "maxWidth": "768px"
                }}
                currentUser={{
                    currentUserId: '01a',
                    currentUserImg:
                        '/2.jpg',
                    currentUserProfile:
                        'https://www.linkedin.com/in/vitalii-vorobiov-42613725b/',
                    currentUserFullName: 'VitaPasser'
                }}
                logIn={{
                    onLogin: () => alert("Call login function"),
                    signUpLink: 'http://localhost:3001/'
                }}
                commentData={data}
                placeHolder={"Write a comment..."}
                onSubmitAction={(data: {
                    userId: string
                    comId: string
                    avatarUrl: string
                    userProfile?: string
                    fullName: string
                    text: string
                    replies: unknown
                    commentId: string
                }) => console.log('check submit, ', data)}
                currentData={(data: unknown) => {
                    console.log('current data', data)
                }}
            />
        </div>
    )
}

export default CommentSection