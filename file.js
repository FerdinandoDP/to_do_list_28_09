$(document).ready(function(){
           $('#button_add').click(function(){
              var thing=$('#add_textarea').val();
               console.log(thing);
              $('#add_textarea').val("");
               var new_thing= '<li class="list-group-item text-info justify-content"><button type="button" class="btn btn-outline-info button_check"><i class="fa fa-circle"></i></button>'+' '+thing +'</li>';
              $('#list_to_do').prepend(new_thing);
           });
            $('#button_rename').click(function(){
                var text_and_button = '<div class="input-group mb-3" id="div_rename"><input type="text" class="form-control" placeholder="rinomina" id="text_name"><div class="input-group-append"><button class="btn btn-outline-info" type="button" id="button_rename_2">Invia</button></div></div>';
               $('#header_title').append(text_and_button); 
            })
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
          $(document).on('click', '#button_rename_2', function(){
            var new_name=$('#text_name').val();
            console.log(new_name);
            $('#div_rename').remove();
            $('#list_title').html(new_name);
          })