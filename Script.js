
// let r =  Math.floor(Math.random() * 100)  + 1

// console.log(r)

// let guessInput = document.getElementById("guess")

// let message = document.getElementById("message")

// function checkguess(){
 
//    let guess = Number.parseInt(guessInput.value)
   

//    if(guess === r){
//       message.innerHTML = "Congratulations !"
//       message.style.color = "green"

//    }
//    else if(guess > r){
//       message.innerHTML = "guess number is greater"
//       message.style.color = "red"
//    }
//    else{
//       message.innerHTML = "guess number is smaller"
//       message.style.color = "red"
//    }



// }


// let guessbtn = document.querySelector("#guess-btn")

// let resetbtn = document.querySelector("#reset-btn")

// guessbtn.addEventListener('click' , ()=>{

//     checkguess()

// })

// resetbtn.addEventListener('click' , ()=>{

   
   
//    message.innerHTML = " "

//      document.querySelector('input').value =" "
// })















let r =   Math.floor( Math.random() * 100)

console.log(r)


let guessinput = document.getElementById("guess")

let guessbtn = document.getElementById("guess-btn")

let message = document.getElementById("message")

let resetbtn = document.getElementById("reset-btn")




function checkguess(){
      
      let guess = Number.parseInt( guessinput.value )

      if(r == guess ){
         message.innerHTML = "congratulation you won !"
         message.style.color = "green"
      }
       else if(r > guess){
         message.innerHTML = "guess number is small"
         message.style.color = "red"
      }else{
         message.innerHTML = "guess number is large"
         message.style.color = "red"
      }

 
}


   guessbtn.addEventListener('click' , checkguess)

   resetbtn.addEventListener('click' , ()=>{
       message.innerHTML = " "
      //  document.querySelector('input').value  = " "
      document.getElementById('guess').value = " "
   })


























































