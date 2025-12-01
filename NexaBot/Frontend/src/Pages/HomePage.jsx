import { useState } from "react";
import Body from "../Components/Body";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function HomePage(){
  const [qaPairs,setQAPairs] = useState([]);
  return(
    <div className="h-full w-full flex justify-center">
      <div className="h-full w-[60%]">
        <Header />
        <Body qaPairs={qaPairs} setQAPairs={setQAPairs} />
        <Footer setQAPairs={setQAPairs}  />
      </div>
    </div>
  )
}

export default HomePage;