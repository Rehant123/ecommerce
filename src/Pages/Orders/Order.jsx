import React from 'react'
import Layout from '../../Components/Layout/Layout'
import { useContext } from 'react'
import MyContext from '../../Contexts/myContext'

export default function Order() {

  const context = useContext(MyContext);

  return (
    <Layout>{context.age}</Layout>
  )
}
