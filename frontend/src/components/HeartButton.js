import React from 'react'

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const HeartButton = () => {


    const { heartList, setHeartList } = useContext(CartContext)


    //calculate the price of all items
//   const itemsPrice = heartList.reduce((a, b) => a + b.price * b.quantity, 0)

  //REMOVE
  const removeProduct = (product) => {
    const exist = heartList.find((x) => x.id === product.id)
    if (exist.quantity === 1) {
      setHeartList(heartList.filter((x) => x.id !== product.id))
    } else {
        setHeartList(
        heartList.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x,
        ),
      )
    }
  }



  return (
    <div>
        
        <div className="favoriteCardsWrapper">
            
            <div className="headlineFavorites">Önskelista</div>
            {heartList.length === 0 && <p style={{margin:"1rem"}}>Du har inga sparade favoriter...</p>}
            {heartList.map((heartItem) => (
    
                        <div  key={heartItem.id}  className="favoriteCard">
                        <div className="wrapperImgInfo">
                           <div className="favoriteImg">
                           
                           <img
                            src={heartItem.img[0].img}
                            alt={heartItem.title}
                            />
                           
                           </div>

                           <div className="farvoriteImgInfo">
                           <div className="wrappers"><p><b>Produktnamn: </b></p><p style={{paddingLeft:"5px"}}>{heartItem.title}</p></div>    
                           <div className="wrappers"><p><b>Storlek: </b></p><p style={{paddingLeft:"5px"}}>{heartItem.size}</p></div>
                           <div className="wrappers"><p><b>Färg: </b></p><p style={{paddingLeft:"5px"}}>{heartItem.color}</p></div>
                           <div className="wrappers"><p><b>Pris: </b></p><p style={{paddingLeft:"5px"}}>{heartItem.price}</p></div>
                           </div>
                        </div>
       
                        <div className="wrapperRemove">
                           <div className="favoriteRemove">
                               <button onClick={() => removeProduct(heartItem)}>Ta bort</button>
                           </div>
                        </div>
                    </div>
              ))}
       
    
                 
             </div>
    </div>
  )
}

export default HeartButton