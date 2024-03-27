const planBtn = document.querySelectorAll('.plans-btn');
let pc_name = document.querySelector('#pc-name h2');
let pc_price = document.querySelector('#pc-price h2');
let pc_details =document.querySelector('#pc-details h3');
let pc_converted = document.querySelector('#pc-Converted img');
const subBtn = document.querySelector('#sub-btn');




planBtn.forEach( (plan) => {
  
  plan.addEventListener('click' , ()=>{
    
    subBtn.style.backgroundColor = '#373277';

    showDetails(plan.value);

    subBtn.addEventListener('click' , ()=>{
      document.querySelector('#after-sub').style.display = 'block';
      document.querySelector('#main-cart').style.display = 'none';
   });


  //  document.querySelector('body').addEventListener('click' , () =>{
  //   subBtn.style.backgroundColor = '#4D46A5';
  //  });


  });

});





function showDetails(plan){
    
  if(plan == 'basic'){
      
    pc_name.innerText = `BASIC`;
      pc_price.innerText = `$60`;
      pc_details.innerText = `Up to 50 creative & professional icons + one color version / themes`;
      pc_converted.src = 'no.png';
    }

    else if(plan == 'standard'){
      
      pc_name.innerText = `STANDARD`;
      pc_price.innerText = `$120`;
      pc_details.innerText = `Up to 100 creative & professional icons + two color version / themes`;
      pc_converted.src = 'yes.png';
    }

    else if(plan == 'premium'){

      pc_name.innerText = `PREMIUM`;
      pc_price.innerText = `$180`;
      pc_details.innerText = `Up to 200 creative & professional icons + four color version / themes`;
      pc_converted.src = 'yes.png';
    }



}

