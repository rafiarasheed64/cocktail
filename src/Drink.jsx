import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Drink = () => {
    const [item,setItem] = useState(null)
    const {id} = useParams()

    console.log(id, "iddd");

    useEffect (()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data, 'dataaa');
            setItem(data.drinks? data.drinks[0] : null)
        
            console.log(item);
        })
    },[id])
    function Ing(){
        let Ingredients=[]
        for(let i=0;i<=15;i++){
            
            let ing=item[`strIngredient${i}`]
            
            Ingredients.push(
                <p>{ing}</p>
                )
        }
        return(
            <p>{Ingredients}</p>
        )
    }
  return (
    <>
        {item?(
            
            <div class='flex flex-col items-center'>
                <div>
                    <img class='w-[400px] h-100' src={item.strDrinkThumb} alt="" />
                </div>
                <div>
                    <p class= 'text-center text-lg font-bold text-red-900'>{item.strDrink}</p>
                    <p class= 'text-center text-lg font-bold text-red-500'>{item.strAlcoholic}</p>
                    <p class= 'text-center text-lg font-semibold text-red-900'>{item.strGlass}</p>
                    <p class= 'text-center text-lg font-bold text-red-900'>{item.strCategory}</p>
                    <p class= 'text-center text-lg font-semibold'>{item.strInstructionsDE}</p>
                    <p>{item.strIngredient}</p>
                    <p class= 'text-center text-lg font-semibold'>Ingredients:
                        {Ing()}
                    </p>
                </div>
            </div>

        ):null}
        
        </>
  )
}

export default Drink