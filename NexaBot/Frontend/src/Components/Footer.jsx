import { useState } from "react";
import axios from "axios";
function Footer({setQAPairs}){
  const [prompt,setPrompt] = useState('');
  console.log('prompt',prompt);
  function changeHandler(e){
    setPrompt(e.target.value)
  }
  async function clickHandler(){
    try{
      const res = await axios.post("http://localhost:3000/api/generate", { prompt });
       const text = res.data.data?.candidates?.[0]?.content?.parts[0]?.text || "No result";
       console.log(text);

       setQAPairs((prev)=>{
        return[
          ...prev,
          {
            question : prompt,
            answer : text,
          }
        ]
       })

       setPrompt('');
    }
    catch(err){
      console.log(err);
    }
  }
  return(
    <div className="h-[110px] bg-white w-full rounded-lg  flex gap-4 justify-between items-center">
      <div className=" h-[97px]  w-[80%] flex justify-center items-center rounded-md">
        <input type="text" name="prompt" value={prompt} onChange={changeHandler} className="w-[97%]  h-[90px] border-2 border-gray-300 focus:border-blue-500 focus:outline-none  rounded-md pl-2 text-[1.2rem] text-gray-600" placeholder="Ask Anything..."   />
      </div>

      <div className="w-[15%] h-[80px] rounded-lg  bg-blue-color flex justify-center items-center text-[1.3rem] hover:scale-95 hover:cursor-pointer" onClick={clickHandler}>
      <button className="text-2rem  rounded-md text-white w-full hover:cursor-pointer">Send</button>
      </div>

    </div>
  )
}
export default Footer;