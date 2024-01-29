import React from 'react'
import "./cloth.css"

const Cloth = () => {
  return (
    <section className='clothingDesc flexContainer'>
        <div className='leftContainer '>
            <div className='upperText flexContainer'>
             
             <div className='textContainer'>
                <h1>Test</h1>
               
                <p>Loremypsilponsadaskdjaskdjaskdjaskdjaskdjaska ksdkajsdkasjkdasjkdasjk ajskd jaskdjask djask djaskd</p>
            </div>
            
                <img className ="TextImg" src='/shirt.png' alt="clothing"/>
          
               <div className='textContainer'>
                <h1>test</h1>
                <p>Loremypsilponsadaskdjaskdjaskdjaskdjaskdjaska ksdkajsdkasjkdasjkdasjk ajskd jaskdjask djask djaskd</p>
            </div> 

            </div>
            <div className='lowerText flexContainer'>
           
            <img className ="jacketImg" src='/Jacket.png' alt="clothing"/>
       
            <div className='textContainer'>
                <h1>test</h1>
                <p>Loremypsilponsadaskdjaskdjaskdjaskdjaskdjaska ksdkajsdkasjkdasjkdasjk ajskd jaskdjask djask djaskd</p>
            </div> 
            </div>
        </div>
        <div className='rightContainer'>
        <img className ="Img" src='/manequin.png' alt="clothing"/>
        </div>
    </section>
  )
}

export default Cloth