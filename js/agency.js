

// Agency Theme JavaScript


function swapSlides(){
    var $active = $('#educationShowSlide .active');
    var $next = ($('#educationShowSlide .active').next().length > 0) ? $('#educationShowSlide .active').next() : $('#educationShowSlide div:first-child');
    var $selected = $active.attr('id');
    var selectedPage = $selected + '-page';
    var $nextSelected = $next.attr('id');
    var nextPage = $nextSelected + '-page';


        $('#' + selectedPage).removeClass('slide-page-active');
        $('#' + nextPage).fadeIn().addClass('slide-page-active');


    $active.fadeOut(function(){
        $active.removeClass('active');
        $next.fadeIn().addClass('active');
    });

}

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    $('.img-showbar').click(function() {
        $('.fullBar').css('width', '600px');
        $('.majorBar').css('width', '550px');
        $('.minorBar').css('width', '400px');
        $('.leastBar').css('width', '250px');
        $('.img-hideBar').css('opacity', '1');
    });

    $('.img-showbarWT').click(function() {
        $('.fullBarWT').css('width', '600px');
        $('.majorBarWT').css('width', '500px');
        $('.minorBarWT').css('width', '380px');
        $('.img-hideBar').css('opacity', '1');
    });


    $('.img-showbarG').click(function() {
        $('.fullBarG').css('width', '600px');
        $('.majorBarG').css('width', '570px');
        $('.minorBarG').css('width', '460px');
        $('.img-hideBar').css('opacity', '1');
    });

    $('.img-hideBar').click(function () {
        $('.fullBar').css('width', '0px');
        $('.majorBar').css('width', '0px');
        $('.minorBar').css('width', '0px');
        $('.leastBar').css('width', '0px');
        $('.fullBarWT').css('width', '0px');
        $('.majorBarWT').css('width', '0px');
        $('.minorBarWT').css('width', '0px');
        $('.fullBarG').css('width', '0px');
        $('.majorBarG').css('width', '0px');
        $('.minorBarG').css('width', '0px');
        $('.img-hideBar').css('opacity', '0');        
    });



    var eduslideShow = setInterval('swapSlides()', 1000);


    $('#educationShowSlide').on('mouseenter', function() {
        clearInterval(eduslideShow);
    });

    $('#educationShowSlide').on('mouseleave', function() {
        eduslideShow = setInterval('swapSlides()', 1000);
    });

    $('.slide-page').click(function() {
        $('.slide-page').css('background-image', 'url("img/education/1.svg")');

        var $active = $('#educationShowSlide .active');
        
        clearInterval(eduslideShow);
    
        $active.fadeOut(function(){
            $active.removeClass('active');
        });
    });


    $('#hIS-page').click(function() {
        setTimeout(function () {$('#hIS').fadeIn().addClass('active');}, 500);
        $('#hIS-page').css('background-image', 'url("img/education/2.svg")');
    });
    $('#sU-page').click(function() {
        setTimeout(function () {$('#sU').fadeIn().addClass('active');}, 500)
        $('#sU-page').css('background-image', 'url("img/education/2.svg")');
    });
    $('#lTU-page').click(function() {
        setTimeout(function () {$('#lTU').fadeIn().addClass('active');}, 500)
        $('#lTU-page').css('background-image', 'url("img/education/2.svg")');
    });
    $('#polyU-page').click(function() {
        setTimeout(function () {$('#polyU').fadeIn().addClass('active');}, 500)
        $('#polyU-page').css('background-image', 'url("img/education/2.svg")');
    });


    $('.show-EduTimeline').click(function() {
            $('.eduTimeLine').slideDown(1000, function () {
                $('#educationShowSlide').slideUp(1000);
                $('.slide-selector').slideUp(1000);
                $('.show-EduTimeline').css('opacity', '0');
                $('.hide-EduTimeline').css('opacity',' 1');
            });
    });

    $('.hide-EduTimeline').click(function() {
            $('#educationShowSlide').slideDown(1000, function () {
                $('.eduTimeLine').slideUp(1000);
                $('.slide-selector').slideDown(1000);
                $('.show-EduTimeline').css('opacity', '1');
                $('.hide-EduTimeline').css('opacity',' 0');
            });
    });







})(jQuery); // End of use strict
