import { useInfiniteQuery } from "@tanstack/react-query"
import  { getAllProductApi } from "../api/ProductApi"
import ProductCard from "../components/ProductCard"

const Infinite = () => {

  const limit = 30

  const {data,isPending,fetchNextPage,hasNextPage,isFetchingNextPage} = useInfiniteQuery({
    queryKey:["products"],
    queryFn:({pageParam})=>getAllProductApi(limit,pageParam),
    initialPageParam:0,
    getNextPageParam:(lastPage,allPages)=>{

      let loadedData = allPages.length * limit
      if(loadedData < lastPage.total) return loadedData
      return undefined
    }   
  })

  if(isPending) return "Loading...."

  const allProdcuts = data?.pages?.flatMap((val)=>val.products) ?? []

  return (
    <div className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        allProdcuts?.map((val)=>(
          <ProductCard key={val.id} product={val} />
        ))
      }

      <div>
        {
          hasNextPage &&(
            <button onClick={()=>fetchNextPage()}>{isFetchingNextPage ? "loading": "Load More"}</button>
          )
        }
      </div>
    </div>
  )
}

export default Infinite