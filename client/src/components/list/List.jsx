import React from 'react'
import Card from "../../components/card/Card.jsx"
import './list.scss'

export default function List({posts}) {
  return (
    <div className='list'>
        {posts.map((item,index)=>(
            <Card key={index} item={item} />
        ))}
    </div>
  )
}
