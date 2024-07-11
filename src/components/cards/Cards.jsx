import React from 'react'

const Cards = ({item}) => {
    return (
        <div className="card">
            <h4>{item.author}</h4>
            <p>1) {item.source.name}</p>
            <p>2) {item.title}</p>
            <p>3) {item.description}</p>
            <p>4) {item.publishedAt}</p>
            <p>5) {item.content}</p>
            <a href={item.url}>6) {item.url}</a>
            <img style={{width: "100px"}} src={item.urlToImage}/>
        </div>
    )
}
export default Cards
