;
(function($) {
    'use strict';

    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },

            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10
            },
            subject: {
                required: false
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'Come on, you have a name don\'t you?',
                minlength: 'Your name must consist of at least 2 characters'
            },

            email: {
                required: 'Please put your email address'
            },
            phone: {
                required: 'Please put your contact number',
                minlength: 'Your contact number must consist of 10 characters',
                maxlength: 'Your contact number must consist of 10 characters'
            },
            subject: {
                required: 'Please put your subject'

            },
            message: {
                required: 'Put some messages here?',
                minlength: 'Your name must consist of at least 2 characters'
            }

        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: 'POST',
                data: $(form).serialize(),
                url: 'sendmail.php',
                success: function() {
                    $('#contact-form #success').fadeIn();
                },
                error: function() {

                    $('#contact-form #error').fadeIn();
                }
            });
        }
    });
})(jQuery);