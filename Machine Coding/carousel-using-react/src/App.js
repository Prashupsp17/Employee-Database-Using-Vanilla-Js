import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const data =[
  "https://4.bp.blogspot.com/-Zj3kg-BF28s/Wypdtu-nPcI/AAAAAAAAAwc/Z2syueZ_lbsWb3eIc8Y_rxrgMlPGeRK0QCLcBGAs/s1600/random_wallpaper_changer_gnome_2.png",
  "https://static.vecteezy.com/system/resources/previews/009/015/941/original/decoration-skull-and-light-abstract-seamless-pattern-random-light-yellow-object-wallpaper-with-design-dark-purple-vector.jpg",
  "https://images.alphacoders.com/117/1178363.jpg",
  'https://wallpaperset.com/w/full/0/b/4/498853.jpg',
  "https://getwallpapers.com/wallpaper/full/3/7/3/584628.jpg"

 ];
function App() {
  const [activeImageIndex,setActiveImageIndex] = useState(0);

  const handlePrevClick = () => {
  
  setActiveImageIndex(!activeImageIndex  ? data.length-1 : activeImageIndex-1 );
  }

  const handleNextClick = () => {
   setActiveImageIndex((activeImageIndex +1) % data.length);
  }


  
  return (
    <>
    <div className="carousel-container">
    <h1>Carousel Using React Js</h1>
    <div className="carousel">
      <button onClick={handlePrevClick}>prev</button>
      {data.map((url,i) => 
       <img 
       src={url} 
       alt="carousel" 
       className="carousel-images"
       style={{ display: activeImageIndex === i ? 'block' : 'none' }}
    />
      )}
         
          <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
   
    </>
      
    
  

    
  );
}

export default App;
