let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let ampm  = document.getElementById('ampm');

setInterval(() => {
    let h  =  new Date().getHours();
    let m  =  new Date().getMinutes();
    let s  =  new Date().getSeconds();
    let andDmd = h >= 12 ? 'PM': "AM";
   
    
    
    if (h > 12) {
       h = h - 12; 
       
    }
   
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    
    //console.log(andDmd);
    horas.innerHTML = h + '<br><span>horas</span>';
    minutos.innerHTML = m +  '<br><span>minutos</span>';
    segundos.innerHTML = s +  '<br><span>segundos</span>';
    ampm.innerHTML = andDmd;
})

 


