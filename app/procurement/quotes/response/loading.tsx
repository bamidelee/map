


export default function Loading (){

    return(
        <div className="flex  h-[60vh] justify-center items-center">
        <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
            <div className="absolute inset-0 rounded-full border-4 border-[#175CFF] border-t-transparent animate-spin"></div>
        </div>
    </div>
      )
}