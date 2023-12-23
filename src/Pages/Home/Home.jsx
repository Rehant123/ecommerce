import React from 'react'
import Layout from '../../Components/Layout/Layout'

import MyContext from '../../Contexts/myContext'
import HeroSection from '../../Components/HeroSection/HeroSection'
import {useContext} from 'react'
import Filter from '../../Components/Filter/Filter'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Testimonial from '../../Components/Testimonials/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart,deleteFromCart} from "../../Redux/cartSlice"
export default function Home() {
  const context = useContext(MyContext);


  //cart

  const cartItem  = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  console.log(cartItem);
  const addCart = ()=>{
    dispatch(addToCart("shirts"));
  }
  const deleteCart = ()=>{
    dispatch(deleteFromCart(0));
  }
  const{mode,toggleMode} = context;
    if(mode == "dark"){
      document.body.style.backgroundColor = 'black ';
    }
    else{
      document.body.style.backgroundColor = "white"
    }
  
  return (
    <Layout>
      <div className="">
        <button className = "text-white m-2" onClick = {()=>addCart()}>Add To cart</button>
        <button className = "text-white" onClick = {()=>deleteCart()}>Delete From cart</button>
      </div>
    <HeroSection></HeroSection>
    <Filter></Filter>
    <ProductCard></ProductCard>
    <Testimonial></Testimonial>
    </Layout>
  )
}
