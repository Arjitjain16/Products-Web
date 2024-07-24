import axios  from "axios"
import { useEffect, useState } from "react"
const Product = () => {
    const [products, setproducts] = useState([])
    const getproduct = () =>{
        const api = "https://fakestoreapi.com/products"
        axios.get(api)
        .then((res)=> {
            console.log(res.data)
            setproducts(res.data)
        })
        .catch((err)=> console.log(err))
    }
    useEffect(()=>{
        getproduct()
    },[])
  return (
    <div>
        <ul className="py-5">
            {products.length >0 ? (
                products.map((product)=> (
                    <li key={product.id} className="">
                        <div className="flex items-center gap-4">
                            <img className="h-20 w-20" src={product.image} alt="" />
                            <div>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <span className="text-sm text-gray-400">Price: ${product.price}</span>
                            </div>
                        </div>
                    </li>
                ))
            ) : <h1>Loading.....</h1>}
        </ul>
    </div>
  )
}

export default Product