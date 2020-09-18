import $ from 'jquery';
 
global.jQuery = $;
global.$ = $;

const ObjData = {
    rem: window.innerWidth / 192,
};

const app = $('#App');

app.fadeIn(300);
function getRem() {
    if (window.innerWidth < window.innerHeight && window.innerWidth < 768) {
        ObjData.rem = window.innerWidth / 32;
        app.addClass('amobile').css({fontSize: ObjData.rem + 'px'});
    } else {
        ObjData.rem = window.innerWidth / 192;
        app.removeClass('amobile').css({fontSize: ObjData.rem + 'px'});
    }
}

getRem();
window.addEventListener("resize", function( ) {
    getRem();
});

function changeLevel(classAdd) {
    app.removeClass('start').removeClass('level-1').addClass(classAdd);
}

//Paralax
$(document).on('mousemove', '.StartPage', function(e){
    if (!app.hasClass('amobile')) {
        $('.start-bg-left').css({backgroundPosition: ((e.pageX * -1 / 100) + 'px ' + (e.pageY * -1 / 100 +5 ) + 'px')});
        $('.start-bg-right').css({backgroundPosition: ((e.pageX * -1 / 100 + (ObjData.rem * 159)) + 'px ' + (e.pageY * -1 / 100 +5 ) + 'px')});
    } else {
        $('.start-bg-left').css({backgroundPosition: 'center left'});
        $('.start-bg-right').css({backgroundPosition: 'center right'});
    }
});

$(document).on('click', '#app-btn', function(e){
    $('.StartPage').hide();
    $('.Level1').fadeIn(500);
    changeLevel(['level-1', 'overloaded']);
    $('#search-1').show();
    $('#boombox-1').show();
});

$(document).on('click', '.Overloy', function(e){
    $(this).fadeOut(200);
    app.removeClass('overloaded');
    if($('#search-1').hasClass('searched')){
        $('#search-1').remove();
    }
});

$(document).on('mousemove', '.Level1', function(e){
    if (!app.hasClass('overloaded')){
        const cursor = $('#cursor-1');
        cursor.css({left: e.pageX  - cursor.width() + cursor.width() / 2 + 'px', top: e.pageY - cursor.height() * 2 + 'px'});
        let cursorleft = cursor.offset().left;
        let cursorRight = cursor.offset().left + cursor.width();
        let cursorTop = cursor.offset().top;
        let cursorBottom = cursor.offset().top + cursor.height();
        const elem = $('#search-1');
        let elemleft = elem.offset().left;
        let elemRight = elem.offset().left + elem.width();
        let elemTop = elem.offset().top;
        let elemBottom = elem.offset().top + elem.height();

        if (cursorleft < elemleft && cursorRight > elemRight && cursorTop < elemTop && cursorBottom > elemBottom ) {
            $('#search-1').addClass('searched');
            app.addClass('overloaded');
            $('.Level1 .Overloy .overloy-message').remove();
            $('.Level1 .Overloy').fadeIn(300);
            $('#boombox-1').hide();
            $('#boombox-2').show();
            $('#mess-1').show();
            cursor.css({zIndex: 200});
            $('.Level1 .game-buttons').css({zIndex: 200});
            $('.Level1 #next-level').addClass('next');
        }
    }
});

$(document).on('touchmove', '.Level1 .app-container', function(e){
    if(!app.hasClass('overloaded')) {
        $('.Level1 .app-container').css({touchAction: 'none'});
        e.preventDefault();
        e.stopPropagation();
        const cursor = $('#cursor-1');
        cursor.css({left: e.pageX  - cursor.width() + cursor.width() / 2 + 'px', top: e.pageY - cursor.height() * 2 + 'px'});
        let cursorleft = cursor.offset().left;
        let cursorRight = cursor.offset().left + cursor.width();
        let cursorTop = cursor.offset().top;
        let cursorBottom = cursor.offset().top + cursor.height();
        const elem = $('#search-1');
        let elemleft = elem.offset().left;
        let elemRight = elem.offset().left + elem.width();
        let elemTop = elem.offset().top;
        let elemBottom = elem.offset().top + elem.height();

        if (cursorleft < elemleft && cursorRight > elemRight && cursorTop < elemTop && cursorBottom > elemBottom ) {
            $('#search-1').addClass('searched');
            app.addClass('overloaded');
            $('.Level1 .Overloy .overloy-message').remove();
            $('.Level1 .Overloy').fadeIn(300);
            $('#boombox-1').hide();
            $('#boombox-2').show();
            $('#mess-1').show();
            cursor.css({zIndex: 200});
            $('.Level1 .game-buttons').css({zIndex: 200});
            $('.Level1 #next-level').addClass('next');
        }
        return false;
    }
});

$(document).on('click', '.Level1 #vopros', function(e){
    $('#search-1').addClass('searched');
});

$(document).on('click', '.Level1 #next-level.next', function(e){
    changeLevel(['level-2']);
    $('.Level1').remove();
    $('.level2').fadeIn(300);
});

$(document).on('mousemove', '.level2', function(e){
    if (!app.hasClass('overloaded')){
        const cursor = $('#cursor-2');
        cursor.css({left: e.pageX  - cursor.width() + cursor.width() / 2 + 'px', top: e.pageY - cursor.height() * 2 + 'px'});
        let cursorleft = cursor.offset().left;
        let cursorRight = cursor.offset().left + cursor.width();
        let cursorTop = cursor.offset().top;
        let cursorBottom = cursor.offset().top + cursor.height();
        const elem1 = $('#search-2');
        if (elem1){
            let elemleft1 = elem1.offset().left;
            let elemRight1 = elem1.offset().left + elem1.width();
            let elemTop1 = elem1.offset().top;
            let elemBottom1 = elem1.offset().top + elem1.height();
            if (cursorleft < elemleft1 && cursorRight > elemRight1 && cursorTop < elemTop1 && cursorBottom > elemBottom1 ) {
                $('#search-2').addClass('searched');
                app.addClass('overloaded');
                $('.level2 .Overloy .overloy-message').remove();
                $('.level2 .Overloy').fadeIn(300);
                cursor.css({zIndex: 200});
            }
        }
    }
});

$(document).on('touchmove', '.level2 .app-container', function(e){
    if(!app.hasClass('overloaded')) {
        $('.Level1 .app-container').css({touchAction: 'none'});
        e.preventDefault();
        e.stopPropagation();
        const cursor = $('#cursor-2');
        cursor.css({left: e.pageX  - cursor.width() + cursor.width() / 2 + 'px', top: e.pageY - cursor.height() * 2 + 'px'});
        let cursorleft = cursor.offset().left;
        let cursorRight = cursor.offset().left + cursor.width();
        let cursorTop = cursor.offset().top;
        let cursorBottom = cursor.offset().top + cursor.height();
        const elem = $('#search-1');
        let elemleft = elem.offset().left;
        let elemRight = elem.offset().left + elem.width();
        let elemTop = elem.offset().top;
        let elemBottom = elem.offset().top + elem.height();

        if (cursorleft < elemleft && cursorRight > elemRight && cursorTop < elemTop && cursorBottom > elemBottom ) {
            $('#search-1').addClass('searched');
            app.addClass('overloaded');
            $('.Level1 .Overloy .overloy-message').remove();
            $('.Level1 .Overloy').fadeIn(300);
            $('#boombox-1').hide();
            $('#boombox-2').show();
            $('#mess-1').show();
            cursor.css({zIndex: 200});
            $('.Level1 .game-buttons').css({zIndex: 200});
            $('.Level1 #next-level').addClass('next');
        }
        return false;
    }
});

