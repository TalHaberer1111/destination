$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var age = parseInt($("input#age").val());
    var drink = $("select#drink").val();
    var geo = $("select#geo").val();
    var food = $("select#food").val();
    var activity = $("select#activity").val();

    console.log(age);
    console.log(drink);
    console.log(geo);
    console.log(food);
    console.log(activity);

    if (age <= 21 && drink === 'pina' && geo === 'nature' && food === 'kabob' && activity === 'bunji'){
      $("#result1").show();
      $("#result2").show();
      $("#result10").show();
    }

    else if (age >= 21 && drink === 'pina' && geo === 'nature' && food === 'kabob' && activity === 'bunji'){
        $("#result1").show();
        $("#result2").show();
        $("#result3").show();
    }

    else if (age >= 21 && drink === 'beer' && geo === 'nature' && food === 'kabob' && activity === 'bunji'){
        $("#result2").show();
        $("#result7").show();
        $("#result8").show();
    }

    else if (age <= 21 && drink === 'beer' && geo === 'nature' && food === 'kabob' && activity === 'bunji'){
        $("#result3").show();
        $("#result5").show();
        $("#result6").show();
    }

    else if (age >= 21 && drink === 'beer' && geo === 'urban' && food === 'kabob' && activity === 'bunji'){
        $("#result4").show();
        $("#result7").show();
        $("#result8").show();
    }

    else if (age <= 21 && drink === 'beer' && geo === 'urban' && food === 'salad' && activity === 'sky'){
        $("#result2").show();
        $("#result3").show();
        $("#result4").show();
    }

    else {
      alert("AND YOUR RESULTS ARE.... : )");
      $("#result7").show();
      $("#result9").show();
      $("#result10").show();
    }

    event.preventDefault();

  });
});
