//user interface logic
$(document).ready(function(){
    //varieties scripts
    $("#col1").hover(function() {
        $("#text1").fadeTo("slow",1);
        $("#pic1").fadeTo("slow",0.4);
        },function() {
          $("#text1").fadeTo("slow",0);
          $("#pic1").fadeTo("slow",1);
        });
    
        $("#col2").hover(function() {
            $("#text2").fadeTo("slow",1);
            $("#pic2").fadeTo("slow",0.4);
            },function() {
              $("#text2").fadeTo("slow",0);
              $("#pic2").fadeTo("slow",1);
            });
    
         $("#col3").hover(function() {
            $("#text3").fadeTo("slow",1);
             $("#pic3").fadeTo("slow",0.4);
             },function() {
                 $("#text3").fadeTo("slow",0);
                $("#pic3").fadeTo("slow",1);
            });
            $("#col4").hover(function() {
                $("#text4").fadeTo("slow",1);
                $("#pic4").fadeTo("slow",0.4);
                },function() {
                  $("#text4").fadeTo("slow",0);
                  $("#pic4").fadeTo("slow",1);
                });
            $("#col5").hover(function() {
                $("#text5").fadeTo("slow",1);
                $("#pic5").fadeTo("slow",0.4);
                },function() {
                    $("#text5").fadeTo("slow",0);
                     $("#pic5").fadeTo("slow",1);
                 });
                 $("#col6").hover(function() {
                    $("#text6").fadeTo("slow",1);
                    $("#pic6").fadeTo("slow",0.4);
                    },function() {
                      $("#text6").fadeTo("slow",0);
                      $("#pic6").fadeTo("slow",1);
                    });
                    $("#col7").hover(function() {
                        $("#text7").fadeTo("slow",1);
                        $("#pic7").fadeTo("slow",0.4);
                        },function() {
                          $("#text7").fadeTo("slow",0);
                          $("#pic7").fadeTo("slow",1);
                        });
                        $("#col8").hover(function() {
                            $("#text8").fadeTo("slow",1);
                            $("#pic8").fadeTo("slow",0.4);
                            },function() {
                              $("#text8").fadeTo("slow",0);
                              $("#pic8").fadeTo("slow",1);
                            });
});

//business logic scripts
var price, crust_price, topping_price;
let total = 0;
function GetPizza(name,size, crust, topping,total){
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}

//user interface logic
$(document).ready(function(){
    $("button.proceed").click(function(event){
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));

        switch(psize){
            case "0":
              price =0;
            break;
            case "large":
               price = 1200;
               console.log("The price is "+price);
             break;
             case "medium":
               price = 850;
               console.log("The price is "+price);
             break;
             case "small":
               price = 600;
               console.log("The price is "+price);
             break;
           }
    });
});