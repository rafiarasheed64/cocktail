import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cocktaill = () => {
    const [drinkname,setDrinkname] = useState('')
    const [cart,setCart] = useState([])
    function finder (){
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then((response)=>response.json())
        .then((data)=>{
        setCart(data.drinks)
    })
    }
    useEffect (()=>{
        finder()
    }, [])
    let filteredDrinks=cart.filter((item)=>{
        return(
            item.strDrink.toLowerCase().includes(drinkname.toLowerCase())
        )
       })
  return (
    <div class='flex flex-col items-center'>
        <h1 class='font-bold text-4xl text-red-500'>COCKTAIL</h1>

        <input class='border-black border-2 mt-5' placeholder='enter cocktail name' type="text" onChange={(e)=>setDrinkname(e.target.value)} />
        <div class='w-[90%] mt-5 flex flex-wrap justify-around'>
            {filteredDrinks.map((item)=>{
                // console.log(item);
                return(
                    <div class='border-black border w-[35%] mt-4'>
                        <Link to={`/drink/${item.idDrink}`}>
                            <div>
                                <img class='w-[100%] h-[300px]' src={item.strDrinkThumb} alt="" />
                                <p class= 'text-center text-lg font-bold text-red-900'>{item.strDrink}</p>
                                <p class= 'text-center text-lg font-bold text-red-500'>{item.strAlcoholic}</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Cocktaill