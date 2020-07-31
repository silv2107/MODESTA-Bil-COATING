const navBar = document.getElementById("menuBar");
const navigation = document.getElementById("nav1");


// the navigation bar unfolds
navBar.addEventListener("click", function(){
    navigation.classList.toggle("visible");
})

navigation.addEventListener("click", function(){
    this.classList.remove("visible");
})


const img = document.querySelectorAll('.picture');//grabs all the images
const lightbox = document.querySelector('.lightBox-wrapper');//grabs the lightbox
lightbox.addEventListener('click', hideBigImage);//adds an event that removes the toSee class 


for (i=0; i < img.length; i++){
  img[i].addEventListener('click', function(){
    document.querySelector('#lightBox-wrapper').classList.add('toSee');
    document.querySelector('#lightBoxImg').src =this.src;//img[i].src -chooses the right img
  });
}

//makes the big image disappear again 
function hideBigImage(){
  document.querySelector('#lightBox-wrapper').classList.remove('toSee');
}


// navBar1.addEventListener("click", function(){
//     navigation1.classList.toggle("visible");
// })

// // changing pages

// for(let i = 0; w1.length > i; i++){
//     w1[i].addEventListener('click', function(){
//         wrapper1.style.display = 'block';
//         wrapper2.style.display = 'none';
//         wrapper3.style.display = 'none';
//         wrapper4.style.display = 'none';
//         navigation1.classList.remove('visible');   

//     })
// }

// for(let i = 0; w2.length > i; i++){
//     w2[i].addEventListener('click', function(){
//         wrapper2.style.display = 'block';
//         wrapper1.style.display = 'none';
//         wrapper3.style.display = 'none';
//         wrapper4.style.display = 'none';
//         navigation.classList.remove('visible');   
//     })
// }

// for(let i = 0; w3.length > i; i++){
//     w3[i].addEventListener('click', function(){
//         wrapper3.style.display = 'block';
//         wrapper2.style.display = 'none';
//         wrapper1.style.display = 'none';
//         wrapper4.style.display = 'none';
    
//     })
// }

// for(let i = 0; w4.length > i; i++){
//     w4[i].addEventListener('click', function(){
//         wrapper4.style.display = 'block';
//         wrapper1.style.display = 'none';
//         wrapper2.style.display = 'none';
//         wrapper3.style.display = 'none';
    
//     })
// }