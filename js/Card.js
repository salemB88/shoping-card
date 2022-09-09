// var $totalShopping;
$(document).ready(function(){



  //To get value from row in table get(quantity value, price value) to calclute total price
  $("#table-product").on('change','#productQty',function(){
  
       // get the current row
       var currentRow=$(this).closest("tr"); 
       
      //  var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
      //  var col2=currentRow.find("td:eq(5)").val(); // get current row 2nd TD
       var quantity=parseInt(currentRow.find("#productQty").val()); // get current row 3rd TD
       var price=parseInt(currentRow.find("td:eq(4)").text()); // get current row 3rd TD
       var total=parseInt(currentRow.find("td:eq(5)").text()); // get current row 3rd TD
  
       var subTotal=quantity*price;
       currentRow.find("td:eq(5)").html(subTotal);
  
          
    var sum = 0;
      $('#table-product #sub-total').each(function() {
  
            var getSubTotal = $(this).text();
            sum += parseInt(getSubTotal);
  
              //Set new value to SubTotal of shopping card
              $("#card-sub-total").text(sum);
  
  });
  //Get tax value
  // card-tax
  var x=$("#card-tax").html();
  var taxValue=parseInt(x.substring(0,2));
  var toalAmout= sum * ((100 + taxValue) / 100);
  
  
  
  $("#card-amount").text(toalAmout.toFixed(2));
  // alert(taxValueity.val);
        });
  
  
  });