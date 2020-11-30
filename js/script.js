// TO DO LIST CON HANDLEBARS

$(document).ready(
  function(){

    var arrayTodo = [
      "Fare i compiti",
      "Allenarsi",
      "Fare la spesa",
      "Cenare",
      "Giocare alla Play Station"
    ];

    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    for(var i = 0; i < arrayTodo.length; i++){

      var context = {
         text: arrayTodo[i],
      };

      var html = template(context);
      $(".prova").append(html);

    }


  }
);
