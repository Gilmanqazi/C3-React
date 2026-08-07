import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getAllProductApi } from "../api/ProductApi"
import { useState } from "react"
import ProductCard from "../components/ProductCard"

const TenstackQuery = () => {

  const limit = 10

  const [page, setPage] = useState(0)

  const {data,isPending,isError,isPlaceholderData} = useQuery({
    queryKey:["products",page],
    queryFn:()=> getAllProductApi(limit,page),
    placeholderData: keepPreviousData
  })
 


  if(isPending) return <h1>Loading...</h1>
  if(isError) return <p> "Something went wrong";</p>

  
  const totalPage = Math.ceil(data?.total/limit)

  return (
    <div className="flex flex-col gap-6 items-center">
      <div
      style={{opacity: isPlaceholderData? 0.4:1 }}
      className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       {
        data?.products?.map((val)=>(
          <ProductCard key={val.id} product={val}/>
        ))
       }
      </div>
      <div className="flex gap-5 items-center">
        <button
     disabled={page === 0}
     onClick={()=>setPage(page - 1)}
          className="p-3 bg-red-700 text-white rounded-xl disabled:bg-red-500"
        >
          Prev
        </button>
        <p>
          {`page ${page + 1} of ${totalPage} `}
        </p>
        <button
  disabled={page >= totalPage - 1}
  onClick={()=>setPage(page + 1)}
          className="p-3 bg-red-700 text-white rounded-xl disabled:bg-red-500"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TenstackQuery