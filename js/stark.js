//Start Navbar
const navs = document.querySelectorAll('.nav-link');

navs.forEach(nav=>{
    // console.log(nav);
    nav.addEventListener('click',()=>{

        removeactive();
       nav.classList.add('active');

    });  
});

function removeactive(){

    navs.forEach(nav=>{
        nav.classList.remove('active');
    });
};

//for toggler change crossX
const toggler = document.querySelector('.navbar-toggler');
const lines = document.querySelectorAll('.lines');

toggler.addEventListener('click',()=>{
    lines.forEach(line=>{
        line.classList.toggle('cross');
    });
});

//End Navbar

//Start Banner

//for img-carousel button 
const circles = document.querySelectorAll('.cir-links');

const banners = document.querySelectorAll('.bann-imgs');

let bOne = document.querySelector('.b-1'),
bTwo = document.querySelector('.b-2'),
bThree = document.querySelector('.b-3'),
bFour = document.querySelector('.b-4');

function removecircle(){
    circles.forEach(circle=>{
        circle.classList.remove('active');
    });
}

circles.forEach(circle=>{
    circle.addEventListener('click',(e)=>{

        removecircle();
       e.target.classList.add('active');

       let datafilter = e.target.getAttribute('data-filter');
 
       if(datafilter == 'one'){

        removebanners();
        bOne.classList.add('active');       
       }else if(datafilter == 'two'){

        removebanners();
        bTwo.classList.add('active'); 

       }else if(datafilter == 'three'){

        removebanners();
        bThree.classList.add('active');  

       }else if(datafilter == 'four'){

        removebanners();
        bFour.classList.add('active'); 
         
       }

    }); 
    

});

function removebanners(){
    banners.forEach(banner=>{
        banner.classList.remove('active');
    });
}

//End Banner

//END HEADER

//START CARS AND ACESSORIES

const carbtns = document.querySelectorAll('.ca-btns');
const clickCars = document.querySelector('.click-cars');
const clickAccess = document.querySelector('.click-access');
const caractive = document.querySelector('.cars');
const accessactive = document.querySelector('.con-access');

carbtns.forEach(function(carbtn){
    carbtn.addEventListener('click',function(){
        removecaractive();
        carbtn.classList.add('active');

        if(clickAccess.classList.contains('active')){
            accessactive.classList.remove('d-none');
            caractive.classList.add('d-none');
    
        }else{
            caractive.classList.remove('d-none');
            accessactive.classList.add('d-none');
        }
    
    });
    


});


let removecaractive = ()=>{
    carbtns.forEach(carbtn=>{
        carbtn.classList.remove('active');
    });

}



// End Header

//Start Cars
const carslinks = document.querySelectorAll('.cars-links');


carslinks.forEach(carlink=>{

    
    carlink.addEventListener('mouseenter',(e)=>{

        carlink.children[2].classList.add('d-none');
        carlink.children[3].classList.remove('d-none');

    });

    carlink.addEventListener('mouseleave',()=>{

        carlink.children[2].classList.remove('d-none');
        carlink.children[3].classList.add('d-none');
    });

});

//for car modal

const carModalDatas = [
    {mdTitle:'A6 Saloon TFSI e',carItImg1:'img/interior/audi-a6-e-chairs.jpg',
    carItImg2:'img/interior/audi-a6-e.jpg',carItImg3:'img/interior/audi-a6-e-driver.jpg',},

    {mdTitle:'e-Tron GT',carItImg1:'img/interior/e-tron-gt-chairs.jpg',
    carItImg2:'img/interior/e-tron-gt.jpg',carItImg3:'img/interior/e-tron-gt-driver.jpg',},

    {mdTitle:'RS 3 Sedan',carItImg1:'img/interior/audi-rs3-chairs.jpg',
    carItImg2:'img/interior/audi-rs3.jpg',carItImg3:'img/interior/audi-rs3-driver.jpg',},

    {mdTitle:'RS 6 Avant',carItImg1:'img/interior/audi-rs6-avant-chairs.jpg',
    carItImg2:'img/interior/audi-rs6-avant.jpg',carItImg3:'img/interior/audi-rs6-avant-driver.jpg',},

    {mdTitle:'Bentayga',carItImg1:'img/interior/bentley-bentayga-chairs.jpg',
    carItImg2:'img/interior/bentley-bentayga.jpg',carItImg3:'img/interior/bentley-bentayga-driver.jpg',},

    {mdTitle:'Continental GT',carItImg1:'img/interior/bentley-continental-gt-v8-chairs.jpg',
    carItImg2:'img/interior/bentley-continental-gt-v8.jpg',carItImg3:'img/interior/bentley-continental-gt-v8-driver.jpg',},

    {mdTitle:'Flying Spur',carItImg1:'img/interior/bentley-flying-spur-chairs.jpg',
    carItImg2:'img/interior/bentley-flying-spur.jpg',carItImg3:'img/interior/bentley-flying-spur-driver.jpg',},

    {mdTitle:'Corvette',carItImg1:'img/interior/chevrolet-corvette-chairs.jpg',
    carItImg2:'img/interior/chevrolet-corvette.jpg',carItImg3:'img/interior/chevrolet-corvette-driver.jpg',},
];

const carmdTitle = document.getElementById('car-md-title');
const caritimg1 = document.getElementById('car-it-img1');
const caritimg2 = document.getElementById('car-it-img2');
const caritimg3 = document.getElementById('car-it-img3');

// console.log(carmdTitle);

const carspecs = document.querySelectorAll('.car-specs');

carspecs.forEach(function(carspec,cidx){

    carspec.addEventListener('click',()=>{

            carmdTitle.textContent = carModalDatas[cidx].mdTitle;
            caritimg1.setAttribute('src',carModalDatas[cidx].carItImg1);
            caritimg2.setAttribute('src',carModalDatas[cidx].carItImg2);
            caritimg3.setAttribute('src',carModalDatas[cidx].carItImg3);

    });   
  
});

//End Cars

//for accessories modal

const outPrices = document.querySelectorAll('.out-prices'),
    modalPrices = document.querySelector('.prices');

const increase = document.querySelector('.increases'),
      decrease = document.querySelector('.decreases');

let counts = document.querySelector('.counts');

const orders = document.querySelectorAll('.orders');
let items = 1;
counts.innerText = items;

var chPrices;

const accessImgs = document.querySelectorAll('.acess-links > img');
const accessMdImg = document.querySelector('.access-md-imgs')


    orders.forEach(function(order,oidx){
       
        orders[oidx].addEventListener('click',()=>{
            items = 1;
            decrease.classList.add('disabled');
            increase.classList.remove('disabled');
            counts.innerText = items;

        modalPrices.innerHTML = chPrices * items;
           outPrices.forEach(function(ourPrice,otpidx){
       
               if(oidx == otpidx){
                     chPrices = parseInt(outPrices[otpidx].innerText)
                   modalPrices.innerHTML = chPrices;
               }
           });

           accessImgs.forEach(function(accessImg,accessImgidx){
             if(oidx == accessImgidx){
                let normalImg =accessImgs[accessImgidx].getAttribute('src');
                accessMdImg.setAttribute('src',normalImg);
             }
        });
       
        });

       });

    increase.addEventListener('click',function(){
    
        items++;
    
         if(items == 9){
            increase.classList.add('disabled');
        }else if(items > 1 ){
            decrease.classList.remove('disabled');
        }

          counts.innerText = items;

        modalPrices.innerHTML = chPrices * items;

    });

    decrease.addEventListener('click',function(){

        items--;
        if(items == 1){
            decrease.classList.add('disabled');
        }else if(items < 9){
            increase.classList.remove('disabled');
        }
         counts.innerText = items;

         modalPrices.innerHTML = chPrices * items;
     
    });

//END CARS AND ACCESSORIES


    //START EXPERIENCE 
       
    let addNumberOne = setInterval(addingOne,30);
    let addNumberTwo = setInterval(addingTwo,30);
    let addNumberThree = setInterval(addingThree,30);
    let addNumberFour = setInterval(addingFour,30);
    let increaseNumbers = document.querySelectorAll('.increase-number');

    let x = 0;
    
    
    function addingOne(){
            x++
            if(x >= 1276){
                clearInterval(addNumberOne);
            }
            increaseNumbers[0].textContent = x;
    }
    
    function addingTwo(){
        x++
        if(x >= 967){
            clearInterval(addNumberTwo);
        }
        increaseNumbers[1].textContent = x;
    }
    
    function addingThree(){
        x++
        if(x >= 177){
            clearInterval(addNumberThree);
        }
        increaseNumbers[2].textContent = x;
    }
    
    function addingFour(){
        x++
        if(x >= 396){
            clearInterval(addNumberFour);
        }
        increaseNumbers[3].textContent = x;
    }

    //END EXPERIENCE
    
    

//START SCROLL NAVBAR
const progress = document.querySelector('.progress');
const progresBar = document.querySelector('.progress-bar');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',function(){
   const getscrolly = this.scrollY;
   
   if(getscrolly >= 543){
    navbar.classList.add('navbar-bold');
   }else{
    navbar.classList.remove('navbar-bold');
   }

   if(getscrolly >= 200){
    progress.classList.remove('d-none');
   }else{
    progress.classList.add('d-none');
   }

       //START PROGRESS
       let getscrollheight = document.documentElement.scrollHeight;
       let getclientheight = document.documentElement.clientHeight;
       
           let calcheight = getscrollheight - getclientheight;
        let getfinalheight = Math.round(getscrolly * 100 / calcheight);
       
        progresBar.innerText =`${getfinalheight}%`;
       progress.style.background =`conic-gradient(red ${getfinalheight}%,#eee ${getfinalheight}%)`;
       
       progress.addEventListener('mouseenter',()=>{
           progresBar.innerHTML = '<i class="fas fa-chevron-up"></i>'
       });
       
       progress.addEventListener('mouseleave',()=>{
           progresBar.innerText = `${getfinalheight}%`;
       });
       //END PROGERESS

});


//END NAVBAR SCROLL



