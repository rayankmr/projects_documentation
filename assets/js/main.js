(function ($) {
    "use strict";

    /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

     // Navbar Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            $(".navbar").addClass("bg-primari");
        } else {
            $(".navbar").removeClass("bg-primari");
        }
    });


    //Smoth Scroll
    $(function () {
        $('.nav-link, .smoth-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });

    /*==========================
        Hero Area Slider
    ============================*/

    $('.hero-area-slids').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        doots: false,
        autoplay: true,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeIn'

    });
    //Wow Animation
    new WOW().init();
    /*==========================
        Hero Title typer
    ============================*/
    var element = $('.typed');

    $(function () {
        element.typed({
            strings: ["Mechatronics Engineer ", "ROBOTICIST"],
            typeSpeed: 100,
            loop: true,
            autoplay: true,
        });
    });

    /*::::::::::::::::::::::::::::::::::::
       Portfolio Section
    ::::::::::::::::::::::::::::::::::::*/

    lightbox.option({
        'imageFadeDuration': 800,
        'resizeDuration': 500,
        'wrapAround': true
    });

    $('.portfolio-area').mixItUp();


    /*::::::::::::::::::::::::::::::::::::
       Testimonial Section
    ::::::::::::::::::::::::::::::::::::*/

    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });


    /*::::::::::::::::::::::::::::::::::::
       Contact Area 
    ::::::::::::::::::::::::::::::::::::*/
    var form = $('#contact-form');

    var formMessages = $('.form-message');
    $(form).submit(function (e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);

                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });
    
    
    /*::::::::::::::::::::::::::::::::::::
    Preloader
    ::::::::::::::::::::::::::::::::::::*/
    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });

}(jQuery));


document.addEventListener('DOMContentLoaded', function() {
    // Array of quotes
    const quotes = [
        "The purpose of our lives is to be happy ~ Dalai Lama",
        "Life is what happens when you're busy making other plans ~ John Lennon",

        "Patience is the companion of wisdom ~ St. Augustine",

        "Patience is a key element of success ~ Bill Gates",

        "The two most powerful warriors are patience and time ~ Leo Tolstoy",

        "Patience is a virtue, and I’m learning patience. It’s a tough lesson ~ Elon Musk",

        "Patience is the art of hoping ~ Luc de Clapiers",

        "All good things come to those who wait ~ Proverb",

        "Patience is not passive; on the contrary, it is concentrated strength ~ Bruce Lee",

        // "Patience is the greatest of all virtues ~ Anonymous",

        "With love and patience, nothing is impossible ~ Daisaku Ikeda",

        "Patience is the best remedy for every trouble ~ Plautus",

        "Have patience. All things are difficult before they become easy ~ Saadi",

        // "The best way to get something done is to begin ~ Anonymous",

        // "Patience is the ability to count down before you blast off ~ Anonymous",
        
        "Don't watch the clock; do what it does. Keep going ~ Sam Levenson",
        // "Opportunities don't happen. You create them ~ Chris Grosser",
        
        "You miss 100% of the shots you don’t take ~ Wayne Gretzky",
        // "I find that the harder I work, the more luck I seem to have ~ Thomas Jefferson",
        "Believe you can and you're halfway there ~ Theodore Roosevelt",
        "The only place where success comes before work is in the dictionary ~ Vidal Sassoon",
        "Your time is limited, so don’t waste it living someone else’s life ~ Steve Jobs",
        "Act as if what you do makes a difference. It does ~ William James",
        "It does not matter how slowly you go as long as you do not stop ~ Confucius",
        
        // "Hardships often prepare ordinary people for an extraordinary destiny ~ C.S. Lewis",
        // "The best revenge is massive success ~ Frank Sinatra",
       
        "The only way to do great work is to love what you do ~ Steve Jobs",
        // "Do what you can, with what you have, where you are ~ Theodore Roosevelt",
        // "The future belongs to those who believe in the beauty of their dreams ~ Eleanor Roosevelt",
        "Your life does not get better by chance, it gets better by change ~ Jim Rohn",
        
        // Add more quotes here
    ];

    // Function to get a random quote
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    // Display a random quote
    document.getElementById('quote-text').innerText = getRandomQuote();
});

// Hide preloader when the page is loaded
window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display = 'none';
});