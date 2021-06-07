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

function buss(product,imgSource){
    this.product=product;
    this.imgSource=imgSource;
    this.choosenImage=0;
    this.showtimes=0;
    

    buss.products.push(this);

}

buss.products=[];


new buss('bag','img/bag.jpg');
new buss('banana','img/banana.jpg');
new buss('bathroom','img/bathroom.jpg');
new buss('boots','img/boots.jpg');
new buss('bubblegum','img/bubblegum.jpg');
new buss('chair','img/chair.jpg');
new buss('cthulhu','img/cthulhu.jpg');
new buss('dragon','img/dragon.jpg');
new buss('pen','img/pen.jpg');
new buss('dog-duck','img/dog-duck.jpg');
new buss('pet-sweep','img/pet-sweep.jpg');
new buss('scissors','img/scissors.jpg');
new buss('shark','img/shark.jpg');
new buss('sweep','img/sweep.png');
new buss('tauntaun','img/tauntaun.jpg');
new buss('unicorn','img/unicorn.jpg');
new buss('usb','img/usb.gif');
new buss('water-can','img/water-can.jpg');
new buss('wine-glass','img/wine-glass.jpg');
new buss('breakfast','img/breakfast.jpg');


function randomNumbers(){
    return Math.floor(Math.random() * buss.products.length); 
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
    imageNo1.src=buss.products[randomImage1].imgSource;
    
    imageNo2.src=buss.products[randomImage2].imgSource;
    imageNo3.src=buss.products[randomImage3].imgSource;


    let show1=buss.products[randomImage1].showtimes++;
    console.log(show1);
    let show2=buss.products[randomImage2].showtimes++;
    console.log(show2);
    let show3=buss.products[randomImage3].showtimes++;
    console.log( show3);
    
    // buss.showtimes=buss.showtimes+buss.products[randomImage1];
    // bus
    
    
}



renderImages();


imageContainer.addEventListener('click',productChooser);







function productChooser(event){
    

    noOfAttempts++;

    if(noOfAttempts<=maxAttempts){
        if(event.target.id==='imageNo1'){
            buss.products[randomImage1].choosenImage++;

        }
        else if(event.target.id==='imageNo2'){
            buss.products[randomImage2].choosenImage++;
            // console.log(randomImage2);
        }
        else{
            buss.products[randomImage3].choosenImage++;
        }
        renderImages();


    }
    else{
       
        
        
        
        imageContainer.removeEventListener('click',productChooser);
        
        
        let ulElement=document.createElement('ul');
        newparent.appendChild(ulElement);
        for(let i=0;i< buss.products.length;i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
        liElement.textContent=`the image ${buss.products[i].product} has been choosen  ${buss.products[i].choosenImage} times and appeared ${buss.products[i].showtimes}    `
         }
            
        
        }
        
       
   
    }
    // imageNo1.removeEventListener('click',productChooser);
    // imageNo2.removeEventListener('click',productChooser);
    // imageNo3.removeEventListener('click',productChooser);
   

    
        
   
    // let parent=document.getElementById('results');
       
    // parent.addEventListener('submit',submitResults)
    
    // function submitResults(event){
    //     let ulElement=document.createElement('ul');
    //     newparent.appendChild(ulElement);
    //     for(let i=0;i< buss.products.length;i++){
    //         let liElement=document.createElement('li');
    //         ulElement.appendChild(liElement);
    //     liElement.textContent=`the image ${buss.products[i].product} has been choosen  ${buss.products[i].choosenImage} times and appeared ${buss.products[i].showtimes}    `
    //      }

   
   
        
    //     }

