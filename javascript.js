let grid = document.querySelector(".grid")
let n = 64
let gridLength = n ** 2 


let squareWidth = grid.offsetWidth / n ; 
let squareHeight = grid.offsetHeight / n ; 



function makeSquares(){


    for (let i= 0 ; i < gridLength ; i ++ ){
        let div = document.createElement("div")
        
        div.setAttribute("class","square")

        div.style.width = squareWidth + "px"
        div.style.height = squareHeight + "px"



        grid.append(div)
        


    


    }

}
























makeSquares()


let squares = document.querySelectorAll(".square")
let Drawing = false ; 

function DrawingMode (){
    squares.forEach((square)=>{
        square.addEventListener("mousedown",()=>Drawing = true)
        document.addEventListener("mouseup", ()=>Drawing = false)

    })
        
}
DrawingMode()

squares.forEach ((square)=> { 
    square.addEventListener("mouseover",()=>{
       if(Drawing){
        square.style.backgroundColor = color;
       }
       else return
       
    })
 
})



let color = "#000000";
let chooseColor = document.querySelector("#colorSelection").addEventListener("input", function setColor(e) {

    return color = e.target.value
    

})


let squareChanged = false ;
for(let square of squares) { 
    square.addEventListener("mouseout" , ()=> { 
        if (rainbowMode) { 
            rainbows()
        }
    })
}


function rainbows(){
    let rainbowColors = ["red" , "orange" , "violet" , "green" , "blue" , "indigo" , "violet"]
    randomNum =Math.floor(Math.random() * 7)
    color = rainbowColors[randomNum]
    return 

}



let rainbowMode = false 
rainbowMode = document.querySelector(".rainbow").addEventListener("click" , ()=> {
    rainbowMode = !rainbowMode; 

}) 


