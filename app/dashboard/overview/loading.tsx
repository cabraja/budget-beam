import LoadingCard from "@/components/loading/LoadingCard"
import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"
import Separator from '@/components/ui/custom/Separator';

function Loading() {
    return (
      <div className='py-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4'>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>

        <Separator num={4}/>

        <div className='grid grid-cols-3 gap-x-8 gap-y-4'>
        <div className='lg:col-span-2 col-span-3 flex flex-col lg:h-full'>
          <div className='flex-grow'>
          <Card className="p-5 h-[30vh]">
              <Skeleton className="w-[60%] h-[20px] rounded-full mt-3 mb-10" />
              <div className="flex flex-row items-end justify-evenly w-full">
                <Skeleton className="w-[18%] h-[10vh] rounded-lg" />
                <Skeleton className="w-[18%] h-[12vh] rounded-lg" />
                <Skeleton className="w-[18%] h-[6vh] rounded-lg" />
                <Skeleton className="w-[18%] h-[19vh] rounded-lg" />
                <Skeleton className="w-[18%] h-[3vh] rounded-lg" />
              </div>
            </Card>
          </div>
        </div>

        <div className='lg:col-span-1 col-span-3 flex flex-col h-full'>
         <div className='flex-grow'>
            <Card className="p-5 h-[30vh]">
              <Skeleton className="w-[70%] h-[20px] rounded-full mt-3 mb-10" />
              <Skeleton className="w-[17vh] h-[17vh] mx-auto rounded-full my-3" />
            </Card>
         </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default Loading