import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

function LoadingTwoCols() {
  return (
    <div className='py-6'>
      <div className='grid grid-cols-3 min-h-[600px] gap-x-10 gap-y-5'>
          <Card className="px-6 py-4 flex flex-col col-span-3 lg:col-span-1">
              <Skeleton className="w-[70%] h-[40px] rounded-full my-6" />

              <Skeleton className="w-full h-[40px] rounded-full my-3" />
              <Skeleton className="w-full h-[20px] rounded-full mt-3 mb-8" />

              <Skeleton className="w-full h-[40px] rounded-full my-3" />
              <Skeleton className="w-full h-[20px] rounded-full mt-3 mb-8" />

              <Skeleton className="w-full h-[40px] rounded-full my-3" />
              <Skeleton className="w-full h-[20px] rounded-full mt-3 mb-8" />

              <Skeleton className="w-[40%] h-[40px] rounded-full my-6" />
          </Card>

          <Card className='col-span-3 lg:col-span-2 py-4 px-8'>
            <Skeleton className="w-[90%] h-[40px] rounded-full my-6" />
            <Skeleton className="w-[90%] h-[40px] rounded-full my-6" />
            <Skeleton className="w-[90%] h-[40px] rounded-full my-6" />
            <Skeleton className="w-[90%] h-[40px] rounded-full my-6" />
            <Skeleton className="w-[90%] h-[40px] rounded-full my-6" />
            <Skeleton className="w-[90%] h-[40px] rounded-full my-6" />
            <Skeleton className="w-[90%] h-[40px] rounded-full my-6" />
          </Card>
      </div>
  </div>
  )
}

export default LoadingTwoCols