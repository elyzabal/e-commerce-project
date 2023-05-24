import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

const [stuff, setStuff]=useState([])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(res=>{ 
      setStuff(res.data)
     // console.log(res.data)
    }).catch(error=>console.log(error))
  },[])
  return (
    <>
      { stuff.map(per=>(
        <div className='card'>
          <figure className='image-card'>
          <img src={per.image}></img>
          </figure>
          <div className='card-body'>
            <h3>{per.title}</h3>
            <p>{per.price}€</p>
          </div>
        </div>
        
      ))
      
      }
    </>

  );
}

export default App;
