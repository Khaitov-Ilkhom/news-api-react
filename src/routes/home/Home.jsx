import { useState } from 'react'
import Nav from '../../components/navbar/Nav'
import AllProduct from '../../components/all-products/AllProduct.jsx'

const Home = () => {

  const [search, setSearch] = useState("")

  
 
  return (
    <div>
        <Nav search={search} setSearch={setSearch}/>
        <AllProduct/>
    </div>
  )
}

export default Home
