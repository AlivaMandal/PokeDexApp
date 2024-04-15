import React from 'react'

function Card({pokemon, loading, infoPokemon}) {

  return (
    <>
    {
      loading ? <h1>Loading...</h1> : 
        pokemon.map((item) => {
          return(
          <>
          <div className='w-72 bg-red-200 rounded-2xl shadow-lg py-1 px-2 flex content-center
                                             justify-between box-border border-y-2'
                                             key={item.id} onClick={() => infoPokemon(item)}>
                    <h2>{item.id}</h2>
                    <img src={item.sprites.front_default} />
                    <h2 className='font-bold font-sans uppercase'> {item.name}</h2>
                 </div>
          </>
        )
      })
    
}
      
    </>
  )
}

export default Card
