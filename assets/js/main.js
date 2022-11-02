let boxContainer = document.getElementById('boxContainer');

let playButton = document.getElementById('playButton');

let restartButton = document.getElementById('restartButton');

let difficulty = document.getElementById('difficulty');



//Funzione che crea le box

function createBox(){

   let box = document.createElement('div');

   if(difficulty.value == 1){

      box.classList.add('boxEasy', 'box', 'fs-5');

   }  else if (difficulty.value == 2){

         box.classList.add('boxMedium', 'box', 'fs-5');

      }  else{

            box.classList.add('boxHard', 'box', 'fs-5');
      
         }

   return box;

}


//Funzione che crea le box al click del tasto play in base alla difficoltà

playButton.addEventListener('click', function(){

   boxContainer.innerHTML = '';

   if(difficulty.value == 1){

      for (let i = 1; i <= 100; i++) {

         let box = createBox();
   
         box.innerText = `${i}`;
   
         boxContainer.append(box);
         
         box.addEventListener('click', function(){
   
            console.log(this.innerText);
   
            this.classList.toggle('boxClick');
      
         });
   
      }

   }  else if (difficulty.value == 2){

         for (let i = 1; i <= 81; i++) {

            let box = createBox();
      
            box.innerText = `${i}`;
      
            boxContainer.append(box);
            
            box.addEventListener('click', function(){
      
               console.log(this.innerText);
      
               this.classList.toggle('boxClick');
         
            });
      
         }


      }  else{

            for (let i = 1; i <= 49; i++) {

               let box = createBox();
         
               box.innerText = `${i}`;
         
               boxContainer.append(box);
               
               box.addEventListener('click', function(){
         
                  console.log(this.innerText);
         
                  this.classList.toggle('boxClick');
            
               });
         
            }

         }


});