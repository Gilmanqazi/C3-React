import { useRef, useState } from "react";

const From = () => {

  const fromRef = useRef({})
  const [a, setA] = useState()


  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(fromRef.current.ProductName.value)
    console.log(fromRef.current.Price.value)
    console.log(fromRef.current.category.value)
    console.log(fromRef.current.Image.value)
  

    let obj = {
      pName:fromRef.current.ProductName.value,
      Price:fromRef.current.Price.value,
      catName:fromRef.current.category.value,
      imgName:fromRef.current.Image.value
    }

    setA(obj)

  }

  return (
    <div className="h-screen w-full bg-gray-600 flex justify-center items-center">
      <form
      onSubmit={handleSubmit}
        className="flex p-6 rounded-2xl bg-gray-300 flex-col gap-4 border-3"
      >
        <input ref={(e)=>{fromRef.current.ProductName = e}} className="border-2" type="text" placeholder="ProductName" />
        <input ref={(e)=>{fromRef.current.Price = e}} className="border-2" type="text" placeholder="Price" />
        <span>Select Categorys</span>{" "}
        <select ref={(e)=>{fromRef.current.category = e}}>
          <option value="MENS">Mens</option>
          <option value="WOMEN">Womens</option>
          <option value="KIDS">Lids</option>
        </select>
        <input ref={(e)=>{fromRef.current.Image = e}} type="text" placeholder="Image" />
        <button>Create</button>
      </form>
    </div>
  );
};

export default From;
