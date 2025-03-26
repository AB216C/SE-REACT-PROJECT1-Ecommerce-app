import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import FilteredPrice from './components/filteredprice'

function App() {

  const [productsList] = useState([

    {id:100,
     name: "Kia Sportage",
     price:"23,000",
     description: "A popular compact SUV known for its fuel efficiency and stylish design."
    },
    {id:101,
      name: "Kia Optima",
      price:"20,000",
      description: "A mid-size sedan known for its features and technology."
     },
     {id:102,
      src:"assets/kianiro.jpg",
      name: "Kia Niro",
      price:"25,000",
      description: " A hybrid and electric crossover known for its fuel efficiency and eco-friendly credentials."
     },
     {id:103,
      name: "Kia Cadenza",
      price:"30,000",
      description: "A full-size sedan offering a comfortable and luxurious ride."
     },
     {id:104,
      name: "Kia EV6",
      price:"26,000",
      description: "A fully electric SUV offering a blend of performance and range."
     }
  ])

  return (
    <div className="appstyle" >
      <h1>GENZ'S Cars Shop</h1>

      <ProductList ourproducts={productsList} />
      <FilteredPrice/>

    </div>
  )
}

export default App
