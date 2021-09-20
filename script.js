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
             default:
                console.log("error");
           }
        switch(pcrust){
            case "0":
                crust_price = 0;
            break;
            case "Crispy":
                crust_price = 200;
            break;
            case "Stuffed":
                crust_price = 250;
            break;
            case "Gluten-free":
                crust_price = 180;
            break;
            default:
                console.log("No price"); 
            }
        let topping_value = ptopping.length*50;
        console.log("toppins value" + topping_value);

        if((psize == "0") && (pcrust == "0")){
            console.log("nothing selected");
            $("button.proceed").show();
            $("#information").show();
            $("div.choise").hide();
            alert("Please select pizza size and crust"); 
          }
          else{
            $("button.proceed").hide();
            $("#information").hide();
            $("div.choise").slideDown(1000);
          }
        total = price + crust_price + topping_value;
        console.log(total);
        let checkoutTotal =0;
        checkoutTotal = checkoutTotal + total;

        $("#pizzaname").html($(".name option:selected").val());
        $("#pizzasize").html( $("#size option:selected").val());
        $("#pizzacrust").html($("#crust option:selected").val());
        $("#pizzatopping").html(ptopping.join(", "));
        $("#totals").html(total);

        $("button.addPizza").click(function(){
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
               console.log(price);
             break;
             case "medium":
               price = 850;
               console.log("The price is "+price);
             break;
             case "small":
               price = 600;
               console.log(price);
             default:
               console.log("error"); 
           }

           switch(pcrust){
            case "0":
              crust_price = 0;
            break;
            case "Crispy":
              crust_price = 200;
            break;
            case "Stuffed":
              crust_price = 150;
            break;
            case "Gluten-free":
              crust_price = 180;
            break;
            default:
              console.log("No price"); 
          }
          let topping_value = ptopping.length*50;
          console.log("toppins value" + topping_value);
          total = price + crust_price + topping_value;
          console.log(total);
  
        });
});