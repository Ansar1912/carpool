currentimgid = 0;
img = ['1.png', '2.png', '3.png', '4.png']
imgslider = document.querySelector(".slidebar .leftside img")
// console.log(img(0))
imgsliderbtn = $('.slidebar .leftside .imgslider')
console.log(img.length)
for (let index = 0; index < img.length; index++) {
    imgsliderbtn.append('<div id='+index+' class="circle" onClick="ImageSliderOff(id)"></div>')
}

IntervalPaused=false;
const myInterval=setInterval(function () {
    if(IntervalPaused==false)
    {
    $(".slidebar .leftside .imgslider .circle").removeClass("active")
    if (currentimgid < img.length-1) {
        imgslider.src = "SliderImage/" + img[currentimgid];
        $(".slidebar .leftside .imgslider #"+currentimgid+"").toggleClass('active')
    }
    else {
        imgslider.src = "SliderImage/" + img[currentimgid];
        $(".slidebar .leftside .imgslider #"+currentimgid+"").toggleClass('active')
        currentimgid = -1;
    }

    currentimgid++;
}
    
}, 2000);

function ImageSliderOff(id){
    $(".slidebar .leftside .imgslider .circle").removeClass("active")
    imgslider.src = "SliderImage/" + img[id];
    $(".slidebar .leftside .imgslider #"+id+"").toggleClass('active')
    IntervalPaused=true
    setTimeout(function(){
        IntervalPaused=false
        currentimgid=id
    },10000)
}
// document.querySelector(".footer").scrollIntoView();
function scrolltodetails(id){
    if(id=="Home")
    {
        document.querySelector(".slidebar").scrollIntoView({ behavior: 'smooth' });
    }
    else if(id=="Contact")
    {
        document.querySelector(".footer").scrollIntoView({ behavior: 'smooth' });
    }
    else if(id=="Service")
    {
        document.querySelector(".details").scrollIntoView({ behavior: 'smooth' });
    }
}
