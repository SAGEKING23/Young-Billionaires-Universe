var btn = document.getElementsByClassName('btnz')
    var slide = document.getElementById('slide');

    btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("activez");
    }
    this.classList.add('activez')
    }
    btn[1].onclick = function(){
    slide.style.transform = "translateX(-800px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("activez");
    }
    this.classList.add('activez')
    }
    btn[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("activez");
    }
    this.classList.add('activez')
    }
    btn[3].onclick = function(){
    slide.style.transform = "translateX(-2400px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("activez");
    }
    this.classList.add('activez')
    }
 