'use strict';





 let imageContainer=document.getElementById('image-container');

let imageNo1=document.getElementById("imageNo1");
let imageNo2=document.getElementById("imageNo2");
let imageNo3=document.getElementById("imageNo3")

let maxAttempts=25;
let noOfAttempts=0;

let randomImage1=0;

let randomImage2=0;
let randomImage3=0;

function bus(product,imgSource){
    this.product=product;
    this.imgSource=imgSource;
    this.choosenImage=0;
    this.showtimes=0;
    

    bus.products.push(this);

}

bus.products=[];


new bus('bag','img/bag.jpg');
new bus('banana','img/banana.jpg');
new bus('bathroom','img/bathroom.jpg');
new bus('boots','img/boots.jpg');
new bus('bubblegum','img/bubblegum.jpg');
new bus('chair','img/chair.jpg');
new bus('cthulhu','img/cthulhu.jpg');
new bus('dragon','img/dragon.jpg');
new bus('pen','img/pen.jpg');
new bus('dog-duck','img/dog-duck.jpg');
new bus('pet-sweep','img/pet-sweep.jpg');
new bus('scissors','img/scissors.jpg');
new bus('shark','img/shark.jpg');
new bus('sweep','img/sweep.png');
new bus('tauntaun','img/tauntaun.jpg');
new bus('unicorn','img/unicorn.jpg');
new bus('usb','img/usb.gif');
new bus('water-can','img/water-can.jpg');
new bus('wine-glass','img/wine-glass.jpg');
new bus('breakfast','img/breakfast.jpg');


function randomNumbers(){
    return Math.floor(Math.random() * bus.products.length); 
}

function renderImages(){

     randomImage1=randomNumbers();
     
     
     randomImage2=randomNumbers();
     randomImage3=randomNumbers();

    while(  randomImage1 ===  randomImage2 || randomImage2===randomImage3 || randomImage1===randomImage3){
        randomImage1=randomNumbers();
        randomImage2=randomNumbers();
        randomImage3=randomNumbers();
        

    }
    // console.log(randomImage1,randomImage2,randomImage3);
    // console.log(imageNo1);
    imageNo1.src=bus.products[randomImage1].imgSource;
    
    imageNo2.src=bus.products[randomImage2].imgSource;
    imageNo3.src=bus.products[randomImage3].imgSource;


    let show1=bus.products[randomImage1].showtimes++;
    console.log(show1);
    let show2=bus.products[randomImage2].showtimes++;
    console.log(show2);
    let show3=bus.products[randomImage3].showtimes++;
    console.log( show3);
    
    // bus.showtimes=bus.showtimes+bus.products[randomImage1];
    // bus
    
    
}



renderImages();


imageContainer.addEventListener('click',productChooser);







function productChooser(event){
    

    noOfAttempts++;

    if(noOfAttempts<=maxAttempts){
        if(event.target.id==='imageNo1'){
            bus.products[randomImage1].choosenImage++;

        }
        else if(event.target.id==='imageNo2'){
            bus.products[randomImage2].choosenImage++;
            // console.log(randomImage2);
        }
        else{
            bus.products[randomImage3].choosenImage++;
        }
        renderImages();


    }
    else{
       
        let button=document.getElementById('results');
        button.hidden=false;
        button.addEventListener('click',submitResults);
        
        
        
         imageContainer.removeEventListener('click',productChooser);
        
        
        
            
        
        }
        
       
   
    }
    // imageNo1.removeEventListener('click',productChooser);
    // imageNo2.removeEventListener('click',productChooser);
    // imageNo3.removeEventListener('click',productChooser);
   

    
        
   
   
       
    
    
    function submitResults(){
        let newparent=document.getElementById('choosen-Images');
        let ulElement=document.createElement('ul');
        newparent.appendChild(ulElement);
        for(let i=0;i< bus.products.length;i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
        liElement.textContent=`the image ${bus.products[i].product} has been choosen  ${bus.products[i].choosenImage} times and appeared ${bus.products[i].showtimes}    `
         }
        //  button.removeEventListener('click',submitResults);
        // button.hidden=true;
        document.getElementById("results").style.display = "none";

   
   
        
        }

