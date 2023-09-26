import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

function loading() {
  return (
    <div className='py-6'>
      <div className='grid grid-cols-3 gap-x-10 gap-y-5'>
        <Card className='col-span-3 lg:col-span-2 px-8 py-8'>
            <Skeleton className="w-full rounded-full mb-6 h-[28px]" />
            <div className="grid grid-cols-7 gap-x-8 gap-y-5">
                {
                Array.from({ length: 30 }, (_r, index) => (
                    <Skeleton className="aspect-square rounded-full" />
                    ))
                }
            </div>
        </Card>

      </div>
    </div>
  )
}

export default loading