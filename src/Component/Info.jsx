import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import axios from 'axios'

function Info() {
    const [pokedata,setpokedata] = useState([])
    const [loading,setloading] = useState(true)
    const [url,seturl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nexturl,setnext] = useState()
    const [prevurl,setprev] = useState()
    const [pokedex,setPokedex] = useState()

    const pokefun = async() =>{
        setloading(true)
        const res = await axios.get(url);
        console.log(res);
        setnext(res.data.next)
        setprev(res.data.previous)
        getpokemon(res.data.results)
        setloading(false)
        console.log(pokedata)
    }

    const getpokemon = async(res) =>{
        res.map(async(item) =>{
            const result = await axios.get(item.url)
            setpokedata(state =>{
                state = [...state,result.data]
                state.sort((a,b) =>a.id > b.id ? 1 : -1 )
                return state;
            })
        })
    }
    
    useEffect(() =>{
        pokefun();
    },[url])

    let a=1,b=10;
    if(a==b)
       console.log("hi");
    else
       console.log("bye")  

  return (
    <>
    <div className=' inline-flex'>
    <div className='inline-flex pt-10 px-20 mx-40 mb-10 gap-3'>
             {prevurl &&  <button className='bg-green-400 hover:bg-green-700 text-gray-800 font-bold py-2 px-4 rounded-l' onClick={() => {
                setpokedata([])
                seturl(prevurl)
              }}>Prev</button>}
              {nexturl && <button className='bg-blue-400 hover:bg-blue-700 text-gray-800 font-bold py-2 px-4 rounded-r'  onClick={() =>{
                setpokedata([])
                seturl(nexturl)
              }}>next</button>}
            </div>
     <h1 className=' text-5xl text-slate-100 text-center font-bold'>POKEDEX</h1>
     </div>
      <div className='m-4 w-4/5 pt-2 flex gap-20'>
        <div className='basis-2/4 w-2/4 grid grid-cols-[repeat(auto-fit,minmax(200px,0.5fr))] gap-14'>
            <Card pokemon={pokedata} loading={loading} infoPokemon={poke => setPokedex(poke)}/>
        </div>
        <div className='basis-2/4 w-2/4 pl-56 text-center font-bold fixed right-10 top-20' >
            <Pokeinfo data={pokedex} />
        </div>
      </div>
      
    </>
  )
}

export default Info
