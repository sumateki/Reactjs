import React from 'react'

const commentData = [
    {
        name: "Suma Teki",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Suma Teki",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                name: "Suma Teki",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                name: "Suma Teki",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Suma Teki",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name: "Suma Teki",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Suma Teki",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Suma Teki",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                name: "Suma Teki",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
        ],
    },
    {
        name: "Suma Teki",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Suma Teki",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
]

const Comment = ({data}) => {
    const {name, text, replies} = data
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img alt = "user"
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s'
                className='h-8'
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentList = ({ comments }) =>{
    return comments.map((comment, index) =>
        <div key={index}>
            <Comment data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                <CommentList comments={comment.replies}/>
            </div>
        </div>
    )

}
const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
       <h1 className='text-2xl font-bold'>Comments:</h1>
       <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentContainer