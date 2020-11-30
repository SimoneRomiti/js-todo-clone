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

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);



    for(var i = 0; i < arrayTodo.length; i++){

      var context = {
         text: arrayTodo[i],
      };

      var html = template(context);
      $(".prova").append(html);

    }

    $("input").keydown(
      function(){
        if(event.which == 13){
          var newElement = $("input").val();
          var context = {
             text: newElement,
          };
          var html = template(context);
          $(".prova").append(html);
        }
      }
    );

    $(".delete").click(
      function(){

        $(this).parent().remove();

      }
    );




  }
);
