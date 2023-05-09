var para=""
function takevalue(){
para=document.getElementById("mytext").value
}
function showpara(){
    document.getElementById("mypara").textContent=para
    document.getElementById("mytext").value=""
}

function changeimahe(){
    var image=document.getElementById("image1")
    
    if(image.src ==="https://i.pinimg.com/564x/aa/e0/d9/aae0d96f038d06995afcc2c835f54d97.jpg"){
        image.src="https://i.pinimg.com/564x/c7/2b/d8/c72bd88dc5da8c3a2c53a0cbed0cd6c9.jpg"
    }else{
        image.src ="https://i.pinimg.com/564x/aa/e0/d9/aae0d96f038d06995afcc2c835f54d97.jpg"
    }
}
