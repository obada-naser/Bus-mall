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

let productName=[];

let noOfChoosenImages=[];
let showTimesImages=[];



//bus constructor

function bus(product,imgSource){
    this.product=product;
    this.imgSource=imgSource;
    this.choosenImage=0;
    this.showTimes=0;
    

    
    productName.push(this.product);

   
    bus.products.push(this);
    

}

bus.products=[];

//images with sources
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

//Random numbers generator
function randomNumbers(){
    return Math.floor(Math.random() * bus.products.length); 
}


//Render Images 

let newImage=[];

function renderImages(){


     randomImage1=randomNumbers();
     
     
     randomImage2=randomNumbers();
     randomImage3=randomNumbers();


     
   
    
   
    while(  randomImage1 ===  randomImage2 || randomImage2===randomImage3 || randomImage1===randomImage3 || newImage.includes(randomImage1) || newImage.includes(randomImage2) || newImage.includes(randomImage3) ){
        randomImage1=randomNumbers();
        randomImage2=randomNumbers();
        randomImage3=randomNumbers();

        
        

    }
    newImage=[randomImage1,randomImage2,randomImage3];

     console.log(randomImage1,randomImage2,randomImage3);
    // console.log(imageNo1);
    // let newImage1=[randomImage1,randomImage2, randomImage3]

    // for(let i=0;i<newImage1.length;i++){
    // let newImage=[];
    // if (newImage.indexOf(newImage1[0]) || newImage.indexOf(newImage1[1] || newImage.indexOf(newImage1[2]){
    //     label Random,
    // }
    // else if

    // }

   




    imageNo1.src=bus.products[randomImage1].imgSource;
    
    imageNo2.src=bus.products[randomImage2].imgSource;
    imageNo3.src=bus.products[randomImage3].imgSource;


    let show1=bus.products[randomImage1].showTimes++;
    console.log(show1);
    let show2=bus.products[randomImage2].showTimes++;
    console.log(show2);
    let show3=bus.products[randomImage3].showTimes++;
    console.log( show3);
    
    // bus.showTimes=bus.showTimes+bus.products[randomImage1];
    // bus
    
    
}


//calling render images 
renderImages();

//product choosing function
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

         for(let i=0;i<bus.products.length;i++){
             noOfChoosenImages.push(bus.products[i].choosenImage);
             showTimesImages.push(bus.products[i].showTimes)

         }
        
        
        
         barChart();

        
        }



        
       
   
    }
    // imageNo1.removeEventListener('click',productChooser);
    // imageNo2.removeEventListener('click',productChooser);
    // imageNo3.removeEventListener('click',productChooser);
   

    
        
   
   
       
    
   //button of submitting 
    function submitResults(){
        let newparent=document.getElementById('choosen-Images');
        let ulElement=document.createElement('ul');
        newparent.appendChild(ulElement);
        for(let i=0;i< bus.products.length;i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
        liElement.textContent=`the image ${bus.products[i].product} has been choosen  ${bus.products[i].choosenImage} times and appeared ${bus.products[i].showTimes} times    `
         }
        //  button.removeEventListener('click',submitResults);
        // button.hidden=true;
        document.getElementById("results").style.display = "none";
        
        }


   //Bar chart function     
function barChart(){



    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productName,
            datasets: [{
                label: '# of ChoosenImages',
                data: noOfChoosenImages,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }, {
                label: '# of shown TimesImages',
                data: showTimesImages,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ]
      

  
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });



    

}
