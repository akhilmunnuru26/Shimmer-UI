import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

const Body = () => {

    const [memes, setMemes] = useState(null);
    
    useEffect(() => {
        fetchMemes();
    }, [])

    const fetchMemes = async () => {

        try{
            const data = await fetch("https://meme-api.com/gimme/25");
            const res = await data.json();
            console.log("Data", res);
            setMemes(res.memes);
    
        }catch(e){
            console.log(`${e.message}`)
        }

        
    }

  return (
    <div className='flex flex-row flex-wrap justify-between align-middle px-4'>
        {!memes ? <Shimmer/> : memes.map((meme,i) => <MemeCard key={i} data={meme}/>)}
    </div>
  )
}

export default Body