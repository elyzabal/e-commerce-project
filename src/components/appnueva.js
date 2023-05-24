import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function Appnueva() {

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
        <div className='card el-wrapper'>
            <div className='box-up'>
             <img className='img' src={per.image}></img>
             <div className='info-inner'>
                <span className='p-name'>{per.title}</span>
             </div>
            </div>
          <div className='card-body box-down'>
            <div className='h-bg'>
                <div className='h-bg-inner'></div>
                <a className='cart' href='#'>
                    <span className='price'>{per.price}€</span>
                    <span className='add-to-cart'>
                        <span className='txt'>Agregar al carrito</span>
                    </span>
                </a>
            </div>
          </div>
        </div>
        
      ))
      
      }
    </>

  );
}

export default Appnueva;
