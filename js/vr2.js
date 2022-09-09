
// var $totalShopping;
$(document).ready(function(){


  // $('#table-product #sub-total').each(function() {

  //   var getSubTotal = $(this).text();
  //   sum += parseInt(getSubTotal);


  //     $("#card-sub-total").fadeOut("slow", function(){
  //       $("#card-sub-total").text(sum).fadeIn("slow");
  //       });

  //     });
  //To get value from row in table get(quantity value, price value) to calclute total price
  var sum = 0;
  $("#table-product").on('change','#productQty',function(){
 
       // get the current row
       var currentRow=$(this).closest("tr"); 
       
      //  var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
      //  var col2=currentRow.find("td:eq(5)").val(); // get current row 2nd TD
       var quantity=parseInt(currentRow.find("#productQty").val()); // get current row 3rd TD
       var price=parseInt(currentRow.find("td:eq(4)").text()); // get current row 3rd TD
       var total=parseInt(currentRow.find("td:eq(5)").text()); // get current row 3rd TD
  
       var subTotal=quantity*price;
      //  currentRow.find("td:eq(5)").html(subTotal);
       currentRow.find("td:eq(5)").fadeOut('slow',function(){
       currentRow.find("td:eq(5)").html(subTotal).fadeIn("slow");
      });
          
alert(sum);
      $('#table-product #sub-total').each(function() {
  
            var getSubTotal = $(this).text();
            sum += parseInt(getSubTotal);
  
              //Set new value to SubTotal of shopping card
              // $("#card-sub-total").text(sum);

              $("#card-sub-total").fadeOut("slow", function(){
                $("#card-sub-total").text(sum).fadeIn("slow");
                });


  });
  //Get tax value
  // card-tax
  var x=$("#card-tax").html();
  var taxValue=parseInt(x.substring(0,2));

  var totalAmount= sum * ((100 + taxValue) / 100);

  
  // $("#card-sub-total").fadeOut("slow", function(){
  //   $("#card-sub-total").text(sum).fadeIn("slow");
  //   });

  // $("#card-amount").text(totalAmout.toFixed(2));
  // // alert(taxValueity.val);
  //       });


    $("#card-amount").fadeOut("slow", function(){
      $("#card-amount").text(totalAmount.toFixed(2)).fadeIn("slow");
    });
  });
  });