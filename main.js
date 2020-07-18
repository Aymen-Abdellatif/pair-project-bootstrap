
$(document).ready(function(){



//Women: BMR = 65 + (4.35 x weight) + (4.7 x length) – (4.7 x age)
//Men: BMR = 66 + (6.23 x weight) + (12.7 x length) – (4.7 x age)
//If you are lazy like myself, you could just use this online BMR calculator.
function basalMetabolicRate(weight,length,age,sexe,activitylevel) {
    var bmr = 0;
    console.log(weight,length,age,sexe,activitylevel)
    var calories = 0;
    if(sexe === "male"){
       bmr = bmr + ( 66 + (6.23 * weight) + (12.7 * length)- (4.7 * age))
      }
    else {
     bmr = bmr + (65 + (4.35 * weight) + (4.7 * length) - (4.7 * age))
    }
      if (activitylevel==="Sedentary: ittle or no exercise"){
        calories = 1926 + bmr
      }else if (activitylevel==="Exercise 1-3 times/week"){
        calories= 2207 + bmr
      }else if (activitylevel==="Exercise 4-5 times/week "){
        calories= 2351 + bmr
      }else if (activitylevel==="Daily exercise or intense exercise 3-4 times/week "){
        calories= 2488 + bmr
      }else if (activitylevel==="Intense exercise 6-7 times/week"){
        calories= 2769 + bmr
      }else if(activitylevel==="Very intense exercise daily, or physical job"){
        calories= 3050 + bmr
      }
    return calories;
   alert(calories)
  }
var calories;
$('#showCalories').click(function(){ 
var sexe = $( "#sexe" ).val();
var activitylevel = $( "#activitylevel" ).val();
var weight= $( "#weight" ).val();
var length= $( "#length" ).val();
var age = $( "#age" ).val(); 
console.log(weight,length,age,sexe,activitylevel)
calories = basalMetabolicRate(weight,length,age,sexe,activitylevel)

 $("#result").text("You have to consome "+calories+" calories");
   
})



var count =0 ;
   $('#mandarine').click(function(){
    count=count+53
    $("#mandarine").hide();
   }
    )
    $('#peach').click(function(){
     count=count+30
     $("#peach").hide();
   })
    
   $('#chocolate').click(function(){
     count=count+546
     $("#chocolate").hide();
   })
   $('#kiwi').click(function(){
    $("#kiwi").hide();
   })
   $('#apple').click(function(){
    $("#peach").hide();
     count=count+65
    console.log(count)

  })
   $('#orange').click(function(){
    $("#orange").hide();
     count=count+50
   })
   console.log(count)
   $('#carrot').click(function(){
    $("#carrot").hide();
     count=count+43
   })
  
   console.log(count)
   $('#raspberries').click(function(){
    $("#raspberries").hide();
       count= count+53
     })
   console.log(count)
   $('#tomatos').click(function(){
    $("#tomatos").hide();
       count=count+18
     })
   console.log(count)
   $('#bread').click(function(){
    $("#bread").hide();
        count=count+247
      })
   console.log(count)
   $('#pepper').click(function(){
    $("#pepper").hide();
       count=count+40
     })
   console.log(count)
   $('#olive').click(function(){
    $("#olive").hide();
       count=count+25
     })
   console.log(count)
   $('#fish').click(function(){
    $("#fish").hide();
        count=count+206
     })
   console.log(count)
   $('#meat').click(function(){
    $("#meat").hide();
       count=count+143
     })
   console.log(count)
    $("#milk").click(function(){
      $("#milk").hide();
       count=count+42
     })
   console.log(count)
   $("#eggs").click(function(){
    $("#eggs").hide();
       count=count+155
      })
   console.log(count)
   $("#rice").click(function(){
    $("#rice").hide();
       count=count+140
      })
    console.log(count)
   $("#chiken").click(function(){
    $("#chiken").hide();
        count=count+239
      })
    console.log(count)
   $("#banans").click(function(){
    $("#banans").hide();
      count=count+155
      })
   console.log(count)
    $("#fig").click(function(){
      $("#fig").hide();
       count=count+74
      })
    console.log(count)
  $('#lim').click(function(){
    $("#lim").hide();
       count=count+70
      })
    $('#lettuce').click(function(){
      $("#lettuce").hide();
       count=count+15
     })
    $("#calories").click(function(){ 
     $("#resultCalories").text('you have buyed '+count+' calories');

     }) 
}) 