const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");
const btn = document.querySelector("button");


const currentGradient = () => {
     let currentStyle = window.getComputedStyle(body);
         btn.style.background = currentStyle.backgroundImage;
     return css.textContent = currentStyle.backgroundImage + ";";
 
}



const setGradient = () =>{
   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
   btn.style.background = body.style.background;
   css.textContent = body.style.background + ";" ; 
}

const randomColor = () =>{
    let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
      console.log(color);
	}
	return color;
    
}

const randomGradient = () =>{
    color1.value = randomColor();
    color2.value = randomColor();

    setGradient();
}



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click" ,randomGradient);  
window.addEventListener("load" , currentGradient);