(function(){
    let screen=document.querySelector('.screen');
    let btns=document.querySelectorAll('.btns');
    let clr=document.querySelector('.clr');
    let eq=document.querySelector('.eq');
    let del=document.querySelector('.del');

    btns.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value+=value;
        })
    });
    eq.addEventListener('click',function(e){
        if(screen.value!=''){
            let ans=eval(screen.value);
            screen.value=ans;
        }
    });
    clr.addEventListener('click',function(e){
        screen.value='';
    });
    del.addEventListener('click',function(e){
        let str="";
        str=screen.value;
        str=str.substring(0, str.length-1);
        screen.value=str;
    });

})();