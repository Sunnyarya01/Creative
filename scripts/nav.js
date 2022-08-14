colors = ["red","blue","pink","aqua"]; 
i=0;
setInterval(()=>{
    document.querySelector(".logo span").style.color = colors[i];
    i++;
    if(colors[i] === undefined){
        i=0;
    }
},1000)