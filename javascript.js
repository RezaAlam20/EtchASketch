



let grid = document.querySelector(".grid")

let n = 16

let gridLength = n ** 2 

let squareWidth = grid.offsetWidth / n ; 
let squareHeight = grid.offsetHeight / n ; 


function squareSize (){ 
    squareWidth = grid.offsetWidth / n ; 
    squareHeight = grid.offsetHeight / n ; 
    return
    



}
squareSize()







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


let Drawing = false; 






function DrawingMode (){
    squares.forEach((square)=>{
        square.addEventListener("mousedown",()=>{Drawing = true} 
         )
  
        document.addEventListener("mouseup", ()=>Drawing = false)


    })
        
}


DrawingMode()














let color = "#000000";
let chooseColor = document.querySelector("#colorSelection").addEventListener("input", function setColor(e) {
    rainbowMode = false 
    return color = e.target.value
    

})


let squareChanged = false ;
function mouseStateOnSquare (){
    for(let square of squares) { 
    square.addEventListener("mouseout" , ()=> { 
        if (rainbowMode) { 
            rainbows()
        }
    })
}





}
mouseStateOnSquare()




function rainbows(){
    let rainbowColors = ["red" , "orange" , "violet" , "green" , "blue" , "indigo" , "violet"]
    randomNum =Math.floor(Math.random() * 7)
    color = rainbowColors[randomNum]
    return 

}



let rainbowMode = false 
document.querySelector(".rainbow").addEventListener("click" , ()=> {
    rainbowMode = !rainbowMode; 
    eraser = false 

}) 


let eraser = false 
document.querySelector(".eraser").addEventListener("click" , () => { 
    eraser = !eraser ;
})




function MouseOverEventListener(){ 
    squares.forEach ((square)=> { 

        square.style.opacity = 0.1  
        square.addEventListener("mouseover",(e)=>{


            if (eraser && Drawing ) { 
                square.style.backgroundColor = "#ffffff" 

            }
            else if (Drawing && eraser == false && square.style.opacity < 1 ){


                let opacity = parseFloat(square.style.opacity)
                opacity += 0.1
                square.style.opacity = opacity;

                square.style.backgroundColor = color 




                
            }
            



    })
 
})
}
MouseOverEventListener()















let clear = document.querySelector(".clear").addEventListener("click",() => { 
    squares.forEach((square)=> { 
        square.style.backgroundColor = "#ffffff" 
    })
    eraser = false
} )






document.querySelector(".gridRange").addEventListener("change" , (e) => { 
    removeExraSq()
    n = e.target.value
    gridLength = n ** 2
    squareSize()

    makeSquares()
    squares = document.querySelectorAll(".square")
    


    mouseStateOnSquare()
    DrawingMode()
    MouseOverEventListener()
    
    

} )


function removeExraSq () {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
}





