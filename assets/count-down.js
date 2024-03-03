
const output = document.querySelector('.output')
output.innerHTML = '';

for (i = 10; i > -1; i--){
    const para = document.createElement('p');
    output.appendChild(para);
      
 if (i === 10){
        para.textContent = "count down 10" ;
    
 }
 else if(i === 0){
 
        para.textContent ="Blast off!" ;
    
 }
 else {

        para.textContent = [i] ;
     
 }

}


