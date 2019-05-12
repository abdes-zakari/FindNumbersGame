
$(document).ready(function(){




$('.how-to-play').click(function(){
    
    $("#how-to-play-box").css({"display":"block"});

});


var timer2 = "1:31";
var interval = setInterval(function() {


  var timer = timer2.split(':');

  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  if (minutes < 0) clearInterval(interval);
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  //minutes = (minutes < 10) ?  minutes : minutes;
  $('.timer').html(minutes + ':' + seconds);
  timer2 = minutes + ':' + seconds;
  if (minutes==0 && seconds==0 && list.length>0) {
    $("#info-box").css({"display":"block"});
    $('.timer').css("display","none");
    $('.messageFade').text('Game over');
    $(".fadeMessage").css("background-color","#c62828");
    $(".fadeMe").css("display","block");
    // alert('ende');
  }
}, 1000);

$(".play-again").click(function(){
  location.reload();
});

    $(".box").mousedown(function(){
        // alert($(this).find('.ctn-box').text());
        var first=$(this).find('.ctn-box').text();
        // $(this).css("background-color","red");
        $(this).addClass('selected-box');
        var pos=[];

         var position = $(this).position();
         pos.push({x:position.left, y:position.top});
        
         // console.log('X: ' + position.left + ", Y: " + position.top );
        var number=[];
        // number=first;
        number.push(first);

         $(".ctn-box").mouseover(function(){

         	var next=$(this).text();
         	var nextPosition = $(this).closest('.box').position();
            // $(this).closest('.box').css("background-color","red");
            $(this).closest('.box').addClass('selected-box');
         	pos.push({x:nextPosition.left, y:nextPosition.top});
         	console.log('X: ' + nextPosition.left + ", Y: " + nextPosition.top );
         	// alert(first+","+next);
         	// number=next;
         	number.push(next);
         	window.pos=pos;
         	 console.log(pos);
         	// $('.result').text(first+","+next);
         	console.log(number);

         });


         $(".box").mouseup(function(){

            
            $(".ctn-box").off("mouseover");
            $('.box').removeClass('selected-box');
            var text = "";
            var i;
            for (i = 0; i < number.length; i++) { 
                text += number[i] ;
            }
            $('.selectedNumtxt').html("<span class='label'>Selected Number</span> <br> <span class='txt-result'>"+text+"</span>");
         	// console.log(text);
            number=[];
            console.log("Empty now");
            var selectedNum=text;
            console.log(list);
        if(selectedNum !== null && selectedNum !== '') {
            if (!list.includes(selectedNum)) {
              failedSound();
              toastFailed('Wrong');
              
            }

            if (list.includes(selectedNum)) {
                var index = list.indexOf(selectedNum);
                list.splice(index, 1);
                toastSuccess('Success');
                SuccessSound();
                $(".n-"+selectedNum).css({
                    "text-decoration":"line-through",
                    "color":"#ffe57f"
                });

            }
        }

        if (list.length==0) {
            // $(".n-"+selectedNum).css({
            //         "text-decoration":"line-through",
            //         "color":"#ffe57f"
            //     });
           // toastSuccess('Congratulations you are smart');
           
           $("#info-box").css({"display":"block"});
           $('.timer').css("display","none");
           $('.messageFade').text('Congratulations you are smart!');
           $(".fadeMessage").css("background-color","#0277bd");
           $(".fadeMe").css({"display":"block"});
           
           
        }

            
            console.log(list);

         });

    });

    // start generate number
    // $(".getNum").click(function(){
           
        // var rand=Math.floor(Math.random() * 7);
        var num="";
        var list=[];
        var out=0;
        for (i = 0; i < 50; i++) {
            if (out<10) {
                var rand=Math.floor(Math.random() * 7);
                num=getNum(rand);
                if (num.toString().length==3) {
                   // console.log(num);
                   if (!list.includes(num)) {
                       list.push(num);
                       out++;
                   }
                }
            }
        }
         console.log(list);
        for (j = 0; j < list.length; j++) {
          if (j==list.length-1) {
            $(".listNum").append("<span class='n-"+list[j]+" color-"+parseInt(Math.floor(Math.random() * 9)+ 1)+"'> "+list[j]+"</span>");

          }else{
            $(".listNum").append("<span class='n-"+list[j]+" color-"+parseInt(Math.floor(Math.random() * 9)+ 1)+"'> "+list[j]+" ,</span>");

          }
             
        }

        
         function getNum(rand){
           switch (rand) {
                case 0:
                    var r1=Math.floor(Math.random() * 5);
                    var r2=Math.floor(Math.random() * 5);
                    // console.log("v1:{ "+r2+","+r1+"}");
                    var m1=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                    var r1=parseInt(r1)-1;
                    var r2=parseInt(r2)+1;
                    var m2="";
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m2=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    var r1=parseInt(r1)-1;
                    var r2=parseInt(r2)+1;
                    var m3="";
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m3=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v3:{ "+r2+","+r1+"}");
                    }
                                         return m1+m2+m3;
                     // console.log(m1+m2+m3);
                    break;
                case 1:
                    var r1=Math.floor(Math.random() * 5);
                    var r2=Math.floor(Math.random() * 5);
                    var m2="";
                    var m3="";
                    // console.log("v1:{ "+r2+","+r1+"}");
                    var m1=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                    var r1=parseInt(r1)+1;
                    var r2=parseInt(r2)+1;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m2=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    var r1=parseInt(r1)+1;
                    var r2=parseInt(r2)+1;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m3=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    return m1+m2+m3;
                    // console.log(m1+m2+m3);
                    break;
                case 2:
                    var r1=Math.floor(Math.random() * 5);
                    var r2=Math.floor(Math.random() * 5);
                    var m2="";
                    var m3="";
                    // console.log("v1:{ "+r2+","+r1+"}");
                    var m1=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                    var r1=parseInt(r1)+0;
                    var r2=parseInt(r2)+1;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m2=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    var r1=parseInt(r1)+0;
                    var r2=parseInt(r2)+1;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m3=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    return m1+m2+m3;
                    // console.log(m1+m2+m3);
                    break;
                case 3:
                    var r1=Math.floor(Math.random() * 5);
                    var r2=Math.floor(Math.random() * 5);
                    var m2="";
                    var m3="";
                    // console.log("v1:{ "+r2+","+r1+"}");
                    var m1=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                    var r1=parseInt(r1)+1;
                    var r2=parseInt(r2)+0;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m2=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    var r1=parseInt(r1)+1;
                    var r2=parseInt(r2)+0;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m3=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    return m1+m2+m3;
                    // console.log(m1+m2+m3);
                    break;
                case 4:
                    var r1=Math.floor(Math.random() * 5);
                    var r2=Math.floor(Math.random() * 5);
                    var m2="";
                    var m3="";
                    // console.log("v1:{ "+r2+","+r1+"}");
                    var m1=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                    var r1=parseInt(r1)-1;
                    var r2=parseInt(r2)+0;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m2=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    var r1=parseInt(r1)-1;
                    var r2=parseInt(r2)+0;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m3=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    return m1+m2+m3;
                    // console.log(m1+m2+m3);
                    break;
                case 5:
                    var r1=Math.floor(Math.random() * 5);
                    var r2=Math.floor(Math.random() * 5);
                    var m2="";
                    var m3="";
                    // console.log("v1:{ "+r2+","+r1+"}");
                    var m1=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                    var r1=parseInt(r1)-1;
                    var r2=parseInt(r2)-1;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m2=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    var r1=parseInt(r1)-1;
                    var r2=parseInt(r2)-1;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m3=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    return m1+m2+m3;
                    // console.log(m1+m2+m3);
                    break;
                case 6:
                    var r1=Math.floor(Math.random() * 5);
                    var r2=Math.floor(Math.random() * 5);
                    var m2="";
                    var m3="";
                    // console.log("v1:{ "+r2+","+r1+"}");
                    var m1=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                    var r1=parseInt(r1)-0;
                    var r2=parseInt(r2)-1;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m2=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    var r1=parseInt(r1)-0;
                    var r2=parseInt(r2)-1;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m3=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    return m1+m2+m3;
                    // console.log(m1+m2+m3);
                    break;
                case 7:
                    var r1=Math.floor(Math.random() * 5);
                    var r2=Math.floor(Math.random() * 5);
                    // r1=$(".y1").val();
                    // r2=$(".x1").val();
                    var m2="";
                    var m3="";
                    // console.log("v1:{ "+r2+","+r1+"}");
                    var m1=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                    var r1=parseInt(r1)+1;
                    var r2=parseInt(r2)-1;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m2=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    var r1=parseInt(r1)+1;
                    var r2=parseInt(r2)-1;
                    if (r1>=0 && r2>=0 && r1<5 && r2<5) {
                       m3=$(".ctn-game:eq("+r1+")").find(".box:eq("+r2+")").find(".ctn-box").text();
                       // console.log("v2:{ "+r2+","+r1+"}");
                    }
                    return m1+m2+m3;
                    // console.log(m1+m2+m3);
            }
        }
    // }); // end


  // init color number 

  var listNum=['color-1','color-2','color-3','color-4','color-5','color-6','color-7','color-8','color-9'];
  var colors = ['#00897b', '#c62828', '#7b1fa2', '#ff6f00', '#01579b', '#880e4f', '#00bcd4', '#e65100', '#4caf50'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.getElementById('title').style.color = random_color;
for (c = 0; c < listNum.length; c++) { 
  
  $('.'+listNum[c]).css('color', colors[c]);
}


  //end color number 


    $(".btnCheck").click(function(){
       console.log(window.pos);
       var notEqlsY=false;
       var notEqlsX=false;

       for (i = 1; i < window.pos.length-1; i++) { 

       	  if (window.pos[0].y!=window.pos[i].y) {
       	  	console.log('YY');
             notEqlsY=true;
       	  }

       	  if (window.pos[0].x!=window.pos[i].x) {
       	  	console.log('XX');
             notEqlsX=true;
       	  }
       	 
       }
       if (notEqlsY==false) {
       	   console.log('Linie ist gerade aus Y ');return;
       }
       if (notEqlsX==false) {
       	   console.log('Linie ist gerade aus X ');return;
       }

       // get a
       var a=(window.pos[1].y-window.pos[0].y)/(window.pos[1].x-window.pos[0].x);
       var b=(window.pos[0].y)-((a)*window.pos[0].x);

       var y=(a*window.pos[pos.length-1].x)+b;

       // var b=2-((-3)*0);
       // console.log(window.pos[0].x);// console.log(window.pos[0].y);
       if (y==window.pos[pos.length-1].y) {

       	   console.log('Linie ist gerade aus ');
       }else{
       	  console.log('nicht gerade');
       }
    });

//     $(document).on('mouseenter', onMouseUpdate);

// function onMouseUpdate(e) {
//     x = e.pageX;
//     y = e.pageY;
//     // $('.position').text("x: "+x+" y: "+y);
//     alert('as');
// }
$(document).mousemove(function(event){ 
	$('.position').text("x: "+event.pageX+" y: "+event.pageY);

});



function toastSuccess(message) {
    var x = document.getElementById("snackbar1");
    $('#snackbar1').text(message);
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function toastFailed(message) {
    var x = document.getElementById("snackbar2");
    $('#snackbar2').text(message);
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function failedSound(){
  var audio = new Audio('assets/audio/gameAudio.mp3');
      audio.currentTime = 1.5;
      audio.play();
      setTimeout(function(){
         audio.pause();
         //player.currentTime = 0;
      }, 1000);
}

function SuccessSound(){
  var audio = new Audio('assets/audio/gameAudio.mp3');
      audio.currentTime = 0;
      audio.play();
      setTimeout(function(){
         audio.pause();
         //player.currentTime = 0;
      }, 800);
}

});