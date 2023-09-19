import LoadingCard from "@/components/loading/LoadingCard"

function Loading() {
    return (
      <div className='py-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4'>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
    </div>
    )
  }
  
  export default Loading