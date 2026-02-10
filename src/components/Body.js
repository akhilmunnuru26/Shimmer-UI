import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

const Body = () => {

    const [memes, setMemes] = useState([]); // We will keep initial state as [] instead of null reason is we can't able to append to null anything it will throw error, soo we keep initial state []

    const [showShimmer, setShowShimmer] = useState(false);
    
    useEffect(() => {
        fetchMemes();

        // Adding Scroll Event Listener; Important:- Always Cleanup the Added EventListener
        window.addEventListener("scroll", handleScroll);

        // Cleaning up the Event Listener
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScroll = () => {

        // scrollY: How much i have Scrolled
        // innerHeight: visible Section
        // document.body.scrollHeight: Total height of the webpage/body
        // window.scrollY + window.innerHeight >= document.body.scrollHeight if its true that means we have reached bottom of the page.

        if (window.scrollY + window.innerHeight >= document.body.scrollHeight){
            console.log("Call API Fetch More data");
            fetchMemes()
        }

    }

    // Reusing Same function
    const fetchMemes = async () => {

        try{
            setShowShimmer(true);
            const data = await fetch("https://meme-api.com/gimme/10");
            const res = await data.json();
            setShowShimmer(false);
            console.log("Data", res);
            setMemes(memes => [...memes, ...res.memes]);
            
    
        }catch(e){
            console.log(`${e.message}`)
        }

        
    }

  return (
    <div className='flex flex-row flex-wrap justify-between align-middle px-4'>
        {/* {!memes ? <Shimmer/> : memes.map((meme,i) => <MemeCard key={i} data={meme}/>)} */}
         { memes.map((meme,i) => <MemeCard key={i} data={meme}/>)}
         {showShimmer && <Shimmer/>}
    </div>
  )
}

export default Body