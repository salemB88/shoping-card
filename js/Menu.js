
    $(document).ready(function() {
        var inputSearchValue='';
        var inputCategroyValue='';
        var menuTypeList=[];

// This function to get and store all menu type(category) of resturant in array to divide the food
// or support search function to can divide the item based in category in search function based category
        $('.menu-type').each(function(i,val) {
            var value = $(this).val();
            menuTypeList.push(value);
        });
// console.log(menuTypeList);




         //This function used to display the product based user search 
        $('#serach-input-product').on('keyup',function(){


    //Get value of search from input field
      inputSearchValue = $(this).val();
      alert(inputSearchValue)


            //if there input search
if(inputSearchValue!= ''){

    ///if user chose any category of item food
    if(inputCategroyValue!='' && inputCategroyValue!='ALL' ){
        $("div[data-item-name]").hide();
        $("div[data-item-name*='" + inputSearchValue + "'][data-item-catgrey='"+inputCategroyValue +"']").show();


        //if user chose but chose Default value(All)
    }else {
        $("div[data-item-name]").hide();
        $("div[data-item-name*='" + inputSearchValue + "']").show();
    }

    //if there not input search (Display all category of item)
}else{
    $("div[data-item-name]").show();
}   

 });



 //This method used to display the menu based user chose of catgrey   
        $('.menu-type').on('click',function(){ 

            //Get object value of select based id
            inputCategroyValue = $(this).html();
      
  $(".menu-type").removeClass('active-a');
  $(this).addClass('active-a');
  // var value = $(this).html();

  alert(inputCategroyValue);
  if(inputCategroyValue.toUpperCase() == "ALL") {
      
    $("div[data-item-catgrey]").show();
  }else{
    $("[data-item-catgrey]:not([data-item-catgrey='"+inputCategroyValue+"']").hide();
    // $("[data-catgrey]:not([data-catgrey='food']").hide();
    $("div[data-item-catgrey='"+inputCategroyValue+"']").show();
    //    $("div[data-catgrey='food']").show();
  }
    
//   if(value == "food") {
      
//        $("[data-catgrey]:not([data-catgrey='food']").hide();
//        $("div[data-catgrey='food']").show();

//     }else if(value == "drink"){

//         $("[data-catgrey]:not([data-catgrey='drink']").hide();
//         $("div[data-catgrey='drink']").show();

//     } else if(value == "all"){
//         $("div[data-catgrey]").show();
        
//     }else {
//         $("div[data-catgrey]").show();
//     }
});




      $("form").submit(function() {
        //Get form id to can know which form user click
        var form = $(this);

        //Get id value to know which product or item user added to card
        // var id = form.attr('id');
        var id = (this.id.value);


        // //Get price value
        // var price = form.attr('price');
        var price = (this.price.value);
        // alert(id+" , "+price);

        // //Get quantity's number of product 
        // var price = form.attr('price');
        var quantity = (this.quantity.value);


        // alert(id+" , "+price+" , "+quantity);

        // alert((this.price.val) + ' form submitted');

        // alert(id + ' form submitted');


        //Store all values form must be send in request
        // var formDatadata = {
        //   id:  id,
        //   price:  price}

        $.ajax({

          //Send request to add the product to card
          url: "add-product.php",
          method: "POST",

          //Define which data will be send in request to back-end

          // data:formData,

          // data:$('form').serialize(),
          data: {
            id: id,
            price: price,
            quantity: quantity
          },
          //IF there any error of request send display message to user 
          error: function(x, s, error) {
            alert(error);
          },

          //View wait counter for user when the process of request still be process to have an idea of what's going on system and to know when process send and get response from back end (api)
          beforeSend: function() {
            // $("p").html("connect.....");

          },


          //Display message or illustration to user to inform the process of request or process was be done and (Successful)
          success: function(response) {
          

            //To can test thge respone and show the result of json file in console
            console.log(response);

            //To convert respone jsone file from string to json object
            var result = JSON.parse(response);



            //Inform user about result of request , display different pop window based on status of request
            if ((result.status) == 'True') {


                //Get number of items in card and convert from text(String) to integer to can update the number when user add the product wihout refresh the page
                var span = (parseInt($('#number-card').text())+1);

                //Set new value to card
                $("#number-card").html(span);


//Display seccessful alert to user
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: result.massage,
                showConfirmButton: false,
                timer: 1500
              });


//Display Faild alert to user
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: result.massage,
              });
            }


          }


        });
        return false;
      });



      
    });

