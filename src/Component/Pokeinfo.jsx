import React from 'react'

function Pokeinfo({data}) {
  console.log(data)
  return (
    <>
    {
      (!data) ? "" : (
        <>
        <div className='py-5 px-2 w-2/4 h-3/4 box-border grid-flow-row shadow-lg shadow-black border-blue-950 border-1'>
         <h1 className='uppercase font-bold text-2xl text-fuchsia-50 bg-red-600 rounded-xl'>{data.name}</h1>
      <img className='m-1 p-1 size-auto content-center' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt='img' />
      <div className=' inline-flex gap-2'>
        {
          data.abilities.map(poke => {
            return(
              <>
            <div className='flex w-auto justify-around items-center m-auto my-2 p-1
            bg-orange-400 text-white rounded-xl'>
            <h2>{poke.ability.name}</h2>
        </div>
              </>
            )
          })
        }

      </div>
      <div className=''>
       {
        data.stats.map(poke =>{
          return(
            <>
            <h3>{poke.stat.name}:{poke.base_stat} </h3>
            </>
          )
        })
       }

      </div>
      </div>
        </>
      )
    }
     
    </>
  )
}

export default Pokeinfo
