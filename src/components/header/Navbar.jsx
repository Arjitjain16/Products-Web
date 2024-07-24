import {Link, Routes, Route} from "react-router-dom"
import Home from "../Home"
import About from "../About"
import Product from "../Product"
import Company from "../Company"
import Contact from "../Contact"
const Navbar = () => {
  return (
    <div>
        <nav className="h-10 flex items-center justify-between px-14 py-10"> 
            <div className="font-serif">
                <h1 className="font-bold text-2xl">Attentive</h1>
            </div>
            <div className="flex items-center gap-4 font-semibold">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/company">Company</Link>
                    <Link to="/contact">Contact</Link>
                    <div className="flex items-center gap-3 text-xl ">
                        <button className="px-3 py-2 border rounded-md hover:bg-black hover:text-zinc-200">Sign In</button>
                        <button className="px-3 py-2  rounded bg-black text-zinc-100 hover:bg-zinc-300 hover:text-black" >
                            Get Demo
                        </button>
                    </div>
               
            </div>
        </nav>

        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/company" element={<Company/>} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default Navbar