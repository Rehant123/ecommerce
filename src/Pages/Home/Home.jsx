import React from 'react'
import Layout from '../../Components/Layout/Layout'

import MyContext from '../../Contexts/myContext'
import HeroSection from '../../Components/HeroSection/HeroSection'
import {useContext} from 'react'
import Filter from '../../Components/Filter/Filter'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Testimonial from '../../Components/Testimonials/Testimonial'

export default function Home() {
  const context = useContext(MyContext);
  const{mode,toggleMode} = context;
    if(mode == "dark"){
      document.body.style.backgroundColor = 'black ';
    }
    else{
      document.body.style.backgroundColor = "white"
    }
  
  return (
    <Layout>
    <HeroSection></HeroSection>
    <Filter></Filter>
    <ProductCard></ProductCard>
    <Testimonial></Testimonial>
    </Layout>
  )
}
