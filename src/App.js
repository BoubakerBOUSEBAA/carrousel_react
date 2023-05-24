import { useState } from "react";
import "./styles.css";
import paysage1 from "./images/paysage_1.png";
import paysage2 from "./images/paysage_2.png";
import paysage3 from "./images/paysage_3.png";
import paysage4 from "./images/paysage_4.png";
import paysage5 from "./images/paysage_5.png";

const images = [

  //En utilisant les images provenant de l'API Pexels
 // "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //"https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //"https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //"https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"

  //En utilisant les images provenant du dossier images

  paysage1,
  paysage2,
  paysage3,
  paysage4,
  paysage5

];




export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div class="slider-thumb">
    <div>
      <h2>React 1: Carrousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
    
    
            )
        )}
      </div>
    </div>
    </div>
  );
}
