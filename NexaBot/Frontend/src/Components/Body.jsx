import { useEffect } from "react";

 function Body({qaPairs,setQAPairs}){
  useEffect(()=>{
    console.log(qaPairs);
  },[qaPairs]);
  return(
    <div className="h-[70%] w-full bg-white mb-[3%] rounded-lg overflow-auto scroll-hide">      
      <div>
        {
          qaPairs.map((item,index)=>(
            <div key={index}>
            <div className="flex justify-end text-white font-[1.24rem]"><p className="px-5 py-3 w-fit rounded-md bg-blue-400 my-8 mx-4">{item.question} ?</p></div>
            <div> <pre className="wrap-normal  bg-gray-200 py-8 px-4 rounded-lg">{item.answer} </pre> </div>
            </div>
          ))
        }
      </div>
    </div>
  )
 }

 export default Body;