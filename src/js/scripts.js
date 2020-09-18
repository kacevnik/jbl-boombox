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
    app.removeClass('start').removeClass('level1').addClass(classAdd);
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
    changeLevel('level-1');
});

$(document).on('click', '.Overloy', function(e){
    $(this).fadeOut(200);
});
