let grid = document.querySelector(".grid")
let n = 16
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
console.log(squareHeight)
console.log(squareWidth)
