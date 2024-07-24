import Footer from "./footer/Footer"


const Home = () => {
  return (
    <>
    <div className="text-center mt-10 flex flex-col gap-5 py-4">
        <h1 className="text-5xl font-semibold">The AI Marketing plateform for </h1>
        <h1 className="text-5xl font-semibold">leading brands</h1>
        <p className="text-2xl">Maximise performance with hyper-personalized  SMS and email</p>
        <div className="mt-7">
          <input className=" bg-slate-200 py-3 px-9" type="text" />
          <button className="py-3 px-3 bg-yellow-200 font-bold ">Get Demo</button>
        </div>
    </div>
    <div className=" flex  w-full justify-center items-center ">
       <div className=" h-[80vh] w-[92%] mt-10 ">
       <img className="h-full w-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1616427592814-195c30c24ea3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>
    </div>




    </>
  )
}

export default Home