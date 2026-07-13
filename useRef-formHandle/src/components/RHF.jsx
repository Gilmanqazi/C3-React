import { useState } from "react"
import {useForm} from "react-hook-form"

const RHF = () => {

  const [hi, setHi] = useState()

  let {register,handleSubmit,reset,formState:{errors}} = useForm()

const submitHandler = (data)=>{
    setHi(data)
        reset()
}
  

  return (
    <div className="h-screen w-full bg-gray-600 flex justify-center items-center">
      <form onSubmit={handleSubmit(submitHandler)}
        className="flex p-6 rounded-2xl bg-gray-300 flex-col gap-4 border-3"
      >
        <input {...register("productName")} className="border-2" type="text" placeholder="ProductName" />
        <input {...register("price")} className="border-2" type="text" placeholder="Price" />
        <span>Select Categorys</span>
        <select {...register("category")} >
          <option value="MENS">Mens</option>
          <option value="WOMEN">Womens</option>
          <option value="KIDS">Lids</option>
        </select>
        <input {...register("image")} type="text" placeholder="Image" />
        <button>Create</button>
      </form>

      <h1>{hi.productName}</h1>
    </div>
  )
}

export default RHF
