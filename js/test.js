
    $(document).ready(function() {
 
      



      $("#check-email").submit(function() {
        //Get form id to can know which form user click
        var form = $(this);

        //Get id value to know which product or item user added to card
        // var id = form.attr('id');
        var email = (this.email.value);
        alert(email);

        $.ajax({

          //Send request to add the product to card
          url: "rest-password.php",
          method: "POST",

          //Define which data will be send in request to back-end

          // data:formData,

          // data:$('form').serialize(),
          data: {
            email: email

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



//Display seccessful alert to user
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: result.massage,
                showConfirmButton: false,
                timer: 1500
              });

              $("#check-email-form").css("display", "none");
        $("#rest-new-password-form").css("display", "block");     



 $("#rest-password").submit(function() {
                    alert("here");

                    $.ajax({

//Send request to add the product to card
                        url: "rest-password.php",
                        method: "POST",

//Define which data will be send in request to back-end

// data:formData,

// data:$('form').serialize(),
                        data: {
                            password: new-password

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

alert("True");

//Display Faild alert to user
                            } else {
                         
                              alert("False");
                            }


                        }


                    });
                    return false;


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
