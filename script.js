// Generate random color:
let randomColor = function(){
    let hex = "0123456789ABCDEF";
    let color = "#"
    for (i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]        
    }
    return color; 
}; 
// console.log(randomColor());
let updateColor;
const startbtn = document.querySelector('#start')
startbtn.addEventListener('click', ()=>{
   updateColor =  setInterval(() => {
        document.body.style.backgroundColor = randomColor(); 
    }, 1000);
});

const stopbtn = document.querySelector('#stop')
stopbtn.addEventListener('click',()=>{
    clearInterval(updateColor)
    // updateColor = null

})
        
    