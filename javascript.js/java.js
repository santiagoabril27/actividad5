      
 function changeIn(){
    $(this).css("background","violet").css("color","blue").css("text-align","center").css("font-size","15px").css("border","8px solid blue")
}

function changeOut(){
  $(this).css("background","lightblue").css("color","blue").css("text-align","center").css("font-size","15px").css("border","8px solid blue")
}

$(".box").hover(changeIn,changeOut)