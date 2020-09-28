$(document).ready(function(){
           $('#button_add').click(function(){
              var thing=$('#add_textarea').val();
               console.log(thing);
              $('#add_textarea').val("");
               var new_thing= '<li class="list-group-item text-info justify-content"><button type="button" class="btn btn-outline-info button_check"><i class="fa fa-circle"></i></button>'+' '+thing +'</li>';
              $('#list_to_do').prepend(new_thing);
           }); 
        })
        $(document).on('click', '.button_check', function(){
                $(this).removeClass('btn btn-outline-info button_check');
                $(this).addClass('btn btn-info button_check_true');
                $(this).html('<i class="fa fa-check-circle"></i>');
        });
         $(document).on('click', '.button_check_true', function(){
                $(this).removeClass('btn btn-info button_check_true');
                $(this).addClass('btn btn-outline-info button_check');
                $(this).html('<i class="fa fa-circle"></i>');
        });