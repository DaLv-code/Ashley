(()=>{
    const textElems=document.querySelectorAll('.s_text');
    const imgElems=document.querySelectorAll('.s_img');
    
    let item = imgElems[0];
    
    for(let i =0; i<textElems.length; i++){
        textElems[i].dataset.index=i;
        imgElems[i].dataset.index=i;
    }
    
    function active(){
        item.classList.add('visible');
    }
    
    function unactive(){
        item.classList.remove('visible');
    }
    
    window.addEventListener('scroll',()=>{
        let text;
        let rect;
        
        for(let i =0; i<textElems.length
           ; i++){
            text = textElems[i];
            rect = text.getBoundingClientRect();
            
            if(rect.top>window.innerHeight*0.1&&rect.top<window.innerHeight*0.9){
                
                console.log(text.dataset.index);
                unactive();
                item = imgElems[text.dataset.index];
                active();
            }
        }
    });
    
    for(var i = 0; i<textElems.length; i++){
        text = textElems[i].style;
        text.zIndex = 10-i;
    }
})();

