import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import "./ST.css"
import Menu from './menu';

const Menus = () => {
    const seafood = [
        { id:1,
          name: "Grilled Salmon",
          price: 18.99,
          description: "Fresh salmon grilled to perfection, served with a side of seasonal vegetables.",
image:"https://healthyfitnessmeals.com/wp-content/uploads/2022/02/Cilantro-lime-grilled-salmon-6.jpg",
          alt: "Grilled salmon"
        },
        {
            id:2,
          name: "Lobster Bisque",
          price: 12.99,
          description: "Creamy lobster soup with a hint of sherry and garnished with fresh herbs.",
          image: "https://amandascookin.com/wp-content/uploads/2022/11/Lobster-Bisque-RCSQ.jpg",
          alt: "Lobster bisque"
        },
        {
            id:3,
          name: "Fish and Chips",
          price: 15.99,
          description: "Beer-battered cod served with crispy fries and tartar sauce.",
          image: "https://forkandtwist.com/wp-content/uploads/2021/04/IMG_0102-500x500.jpg",
          alt: "Fish and chips"
        },
        {
            id:4,
          name: "Crab Cakes",
          price: 22.99,
          description: "Two jumbo lump crab cakes served with a side of remoulade sauce.",
          image: "https://amandascookin.com/wp-content/uploads/2022/07/Crab-Cakes-RCSQ.jpg",
          alt: "Crab cakes"
        },
        {
            id:5,
          name: "Shrimp Scampi",
          price: 19.99,
          description: "Garlic and white wine sautéed shrimp served over linguine.",
          image: "https://www.tosimplyinspire.com/wp-content/uploads/2023/01/Shrimp-Scampi-6.jpg",
          alt: "Shrimp scampi"
        }
      ];
      
      const salads = [
        {
          id: 6,
          name: 'Caesar Salad',
          description: 'Romaine lettuce, croutons, parmesan cheese, Caesar dressing',
          price: 8.99,
          image: "https://australianavocados.com.au/wp-content/uploads/2022/02/Avocado-Caesar-Salad.png"
        },
        {
          id: 7,
          name: 'Greek Salad',
          description: 'Mixed greens, feta cheese, olives, cucumbers, tomatoes, Greek dressing',
          price: 9.99,
          image: 'https://www.italianbellavita.com/wp-content/uploads/2022/08/739C7136-CBA2-4DDC-8D56-ECA409F69AB9-3-735x735.jpeg'
        },
        {
          id: 8,
          name: 'Caprese Salad',
          description: 'Fresh mozzarella, tomatoes, basil, balsamic glaze',
          price: 10.99,
          image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2022/08/Caprese-Salad-Recipe.jpg'
        },
        {
          id: 9,
          name: 'Spinach Salad',
          description: 'Baby spinach, bacon, eggs, mushrooms, red onion, honey mustard dressing',
          price: 11.99,
          image: "https://www.eatingwell.com/thmb/igW4-I5Xbsy8914wHkXckFu4Mr0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avocado-tuna-spinach-salad-f8048f77ff6b45038adca1c06cb178d3.jpg"
        }
      ];
      const drinks = [
        {
          id: 10,
          name: 'Iced Tea',
          description: 'Freshly brewed black tea served over ice',
          price: 2.49,
          image: "https://www.goodlifeeats.com/wp-content/uploads/2022/05/Tangerine-Raspberry-Iced-Tea-720x720.jpg"
        },
        {
          id: 11,
          name: 'Lemonade',
          description: 'Freshly squeezed lemons, sugar, and water',
          price: 3.49,
          image: 'https://thebusybaker.ca/wp-content/uploads/2018/04/healthy-3-ingredient-lemonade-fbig1-1.jpg'
        },
        {
          id: 12,
          name: 'Soda',
          description: 'Coca-Cola, Diet Coke, Sprite, or Ginger Ale',
          price: 1.99,
          image: "https://everydayshortcuts.com/wp-content/uploads/2022/10/how-to-make-a-dirty-soda.jpg"
        },
        {
          id: 13,
          name: 'Smoothie',
          description: 'Frozen fruit, yogurt, and milk blended together',
          price: 4.99,
          image: "https://fitfoodiefinds.com/wp-content/uploads/2021/12/chia-smoothie-3sq.jpg"
        }
      ];
      
      //const [menu,setmenu]=useState(salad)
      
  return (
        <div className="row">
        <div className="col-lg-10 mx-auto col-12 text-center mb-3">
            <h1 className="mt-0"  style={{color:"#95BDFF",fontFamily:"SignPainter",fontSize:"60px"}}>Our Menu</h1>
            <p classNames="lead">Begin with a selection from our award winning beverage menu or choose a wine from our extensive wine list. Our wine list features over 100 different vintages and has received the chamber of commerce award of excellence.</p>
        </div>
<div className="col-12 mt-4">
<center>
<Link to="/summersea/Menus/Salads/" style={{textDecoration:"none"}}><button className='but mx-1'  >Salads</button> 
</Link>
<Link to="/summersea/Menus/Seafood/" style={{textDecoration:"none"}}><button className='but1  mx-1' >Seafood</button>
</Link>
<Link to="/summersea/Menus/Drinks/" style={{textDecoration:"none"}}>   <button className='but  mx-1' >Drinks</button>
</Link>

</center>

    <hr className="accent my-3 mx-5" />
  {/* <Menu menu={menu}></Menu> */}
  <Routes>
  <Route path='/' element={<Menu menu={salads}/> } />
  <Route path='/Salads/' element={<Menu menu={salads}/> } />
  <Route path='/Seafood/' element={<Menu menu={seafood}/> } />
  <Route path='/Drinks/' element={<Menu menu={drinks}/> } />
  </Routes>



</div>
  
    </div>
    
  )
}

export default Menus
