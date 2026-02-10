import React from 'react'

const MemeCard = ({data}) => {
    const {url,author, title} = data
  return (
    
    <div className="w-60 border rounded-lg border-gray-600 shadow-lg p-3 my-4 hover:border-orange-600">
        <h1 className="font-bold my-1">{title}</h1>
        <img className="h-52 w-52" src={url} alt={title}/>
        <p className="font-sans text-sm my-2 font-light text-indigo-950 italic">{author}</p>
    </div>
  )
}

export default MemeCard