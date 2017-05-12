$(document).ready(function(){


    $('.phone').inputmask({ mask: "0 (999) 99-99-99", clearIncomplete: true,
        onincomplete: function(){
            $(this).addClass('error').removeClass('active');
        },
        oncomplete: function(){
            $(this).removeClass('error').addClass('active');
        }
    });

});




