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

    if (age < 21 && drink === 'pina' && geo === 'nature' && food === 'kabob' && party === 'bunji'){
      $("#result1").show();
    }

    else if (age >= 21 && drink === 'pina' && geo === 'nature' && food === 'kabob' && party === 'bunji'){
        $("#result2").show();
    }

    else if (age >= 21 && drink === 'beer' && geo === 'nature' && food === 'kabob' && party === 'bunji'){
        $("#result2").show();
    }

    else if (age < 21 && drink === 'beer' && geo === 'nature' && food === 'kabob' && party === 'bunji'){
        $("#result2").show();
    }

    else if (age >= 21 && drink === 'beer' && geo === 'urban' && food === 'kabob' && party === 'bunji'){
        $("#result4").show();
    }

    else if (age < 21 && drink === 'beer' && geo === 'urban' && food === 'kabob' && party === 'bunji'){
        $("#result2").show();
    }

    else if (age < 21 && drink === 'beer' && geo === 'nature' && food === 'salad' && party === 'bunji'){
        $("#result2").show();
    }

    else if (age >= 21 && drink === 'beer' && geo === 'nature' && food === 'salad' && party === 'bunji'){
        $("#result2").show();
    }

    else if (age < 21 && drink === 'beer' && geo === 'nature' && food === 'kabob' && party === 'sky'){
        $("#result4").show();
    }

    else if (age >= 21 && drink === 'beer' && geo === 'nature' && food === 'kabob' && party === 'sky'){
        $("#result4").show();
    }

    else if (age < 21 && drink === 'pina' && geo === 'nature' && food === 'kabob' && party === 'bunji'){
        $("#result4").show();
    }

    else if (age >= 21 && drink === 'pina' && geo === 'nature' && food === 'kabob' && party === 'bunji'){
        $("#result4").show();
    }

    else if (age < 21 && drink === 'pina' && geo === 'nature' && food === 'kabob' && party === 'bunji'){
        $("#result4").show();
    }

    else if (age >= 21 && drink === 'pina' && geo === 'urban' && food === 'kabob' && party === 'bunji'){
        $("#result4").show();
    }

    else if (age < 21 && drink === 'pina' && geo === 'urban' && food === 'kabob' && party === 'bunji'){
        $("#result4").show();
    }

    else if (age >= 21 && drink === 'pina' && geo === 'nature' && food === 'salad' && party === 'bunji'){
        $("#result4").show();
    }

    else if (age < 21 && drink === 'pina' && geo === 'nature' && food === 'salad' && party === 'bunji'){
        $("#result1").show();
    }

    else if (age >= 21 && drink === 'pina' && geo === 'nature' && food === 'kabob' && party === 'sky'){
        $("#result1").show();
    }

    else if (age < 21 && drink === 'pina' && geo === 'nature' && food === 'kabob' && party === 'bunji'){
        $("#result1").show();
    }

    else if (age >= 21 && drink === 'pina' && geo === 'nature' && food === 'kabob' && party === 'bunji'){
        $("#result1").show();
    }

    else if (age < 21 && drink === 'pina' && geo === 'nature' && food === 'kabob' && party === 'bunji'){
        $("#result1").show();
    }

    else {
      $("#result3").show();
    }

    event.preventDefault();

  });
});
