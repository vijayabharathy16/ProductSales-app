import { useState } from "react";
import Card from "./Cart"
import { Cards } from "./Cards";
import { Nav } from "./Nav"; 
 
 function Home(){
    const [cart,setCart]=useState([])
    const [data,setdata]=useState(
      [
        {
                id:1,
                image: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                name: "Makeup Product",
                rating: "⭐⭐⭐⭐",
                price: "$400.00 - $800.00",
                isDisabled:false,
               },
              { id:2,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB2bjiNo-7N2TDl7bmB46OP849MfImvow0UA&usqp=CAU",
                name: "Home appliances",
                rating: "⭐⭐⭐⭐",
                price: "$2440.00-$3000.00",
                isDisabled: false,
              },
              {
                id:3,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6CpymtxeGUnYQI8uBqjmLtLfsLUklCcAlg&usqp=CAU",
                name: "All Books",
                rating: "⭐⭐⭐⭐⭐",
                price: "$500.00 $900.00",
                isDisabled: false,
              },
              {
                id:4,
                image: "https://media.istockphoto.com/photos/kitchen-utensils-isolated-on-white-background-picture-id881670884?k=20&m=881670884&s=612x612&w=0&h=AJ0gBB8AMj02nvWMsbNytJeqK0vzmNHB2qkWsaQqOMs=",
                name: "Kitchen Things",
                rating: "⭐⭐⭐⭐",
                price: "$1500.00-$2500.00",
                isDisabled: false,
              },
              {
                id:5,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVmWulT-O2H_NIJeh6GhGfuaJ5MasIcD5tg&usqp=CAU",
                name: "All Dress",
                rating: "⭐⭐⭐⭐",
                price: "$600.00 - $1000.00",
                isDisabled: false,
              },
              {
                id:6,
                image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                name: "Electronics Items",
                rating: "⭐⭐⭐⭐",
                price: "$5000.00 $7000.00",
                isDisabled: false,
              },
              { id:7,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXB-TznHvTvlXkWvP6jqSZr-SxxLwa2f9sA&usqp=CAU",
                name: "Sports Item",
                rating: "⭐⭐⭐⭐⭐",
                price: "$300.00 - $1000.00",
                isDisabled: false,
              },
              {
                id:8,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZxJwVXbO7tto8kkI8KLgYKEbSk_kuA32Mg&usqp=CAU",
                name: "Stationery Items",
                rating: "⭐⭐⭐⭐⭐",
                price: "$40.00 - $50.00",
                isDisabled: false,
              },
      ]
      )
  
  
    const addToCart=(item,id)=>{
      let temp=data
      temp[id].isDisabled=true
    setCart([...cart,item])
    setdata(temp)
    }
  
    const removeCart = (item)=>{
    setCart(cart.filter((x)=> x!==item));
        let index= item.id-1
        let temp=data
        temp[index].isDisabled=false
        setdata(temp)
      }

    return(
        <>
        <div className="App">
          <div className="container">
              <div className="row nav-row">
                    <Nav cart={cart}/>
                    <Card  removeCart={removeCart} cart={cart} setCart={setCart} data={data} setdata={setdata} />
                </div>
                    <Cards data={data} addToCart={addToCart}/>
          

          </div>
    </div>
        </>
    )
 }

 export default Home;