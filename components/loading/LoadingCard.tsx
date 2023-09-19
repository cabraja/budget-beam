import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "../ui/card"

function LoadingCard() {
  return (
    <Card className="px-6 py-4">
       <Skeleton className="w-full h-[20px] rounded-full my-3" />
       <Skeleton className="w-[40%] h-[40px] rounded-full my-3" />
       <Skeleton className="w-full h-[20px] rounded-full my-3" />
    </Card>
  )
}

export default LoadingCard