import $ from 'jquery';
 
global.jQuery = $;
global.$ = $;

const ObjData = {
    rem: window.innerWidth / 192,
};

const app = $('.App');
app.fadeIn();
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
    app.removeClass('start').removeClass('level-1').removeClass('level-2').removeClass('level-3').removeClass('level-4').addClass(classAdd);
}

const contObj= {
    left: $('#app-container').offset().left,
    right: $('#app-container').offset().left + $('#app-container').width(),
    top: $('#app-container').offset().top,
    bottom: $('#app-container').offset().top + $('#app-container').height(),
}

//Paralax
$(document).on('mousemove', ['.StartPage', '.final'], function(e){
    if (!app.hasClass('amobile') && window.innerWidth > 768) {
        $('.start-bg-left').css({backgroundPosition: ((e.pageX * -1 / 100) + 'px ' + (e.pageY * -1 / 90 ) + 'px')});
        $('.start-bg-right').css({backgroundPosition: ((e.pageX * -1 / 100 + (ObjData.rem * 161)) + 'px ' + (e.pageY * -1 / 80 ) + 'px')});
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
    $('.cursor').css({zIndex: 0});
    app.removeClass('overloaded');
    if($('#search-1').hasClass('searched')){
        $('#search-1').remove();
    }
    if($('#search-2').hasClass('searched')){
        $('#search-2').remove();
        $('#mess-2').remove();
        $('#boombox-3').show();
    }
    if($('#search-3').hasClass('searched')){
        $('#search-3').remove();
        $('#mess-3').remove();
        $('#boombox-3').show();
    }
    if($('#search-6').hasClass('searched')){
        $('#search-6').remove();
        $('#mess-5').remove();
    }
    if($('#search-7').hasClass('searched')){
        $('#search-7').remove();
        $('#mess-6').remove();
    }
    if($('#search-8').hasClass('searched')){
        $('#search-8').remove();
        $('#mess-7').remove();
    }
    if($('#search-9').hasClass('searched')){
        $('#search-9').remove();
        $('#mess-8').remove();
    }
});

$(document).on('mousemove', '.Level1', function(e){
    if (!app.hasClass('overloaded')){
        const cursor = $('#cursor-1');
        const cursorImg = $('#cursor-1 img');
        cursor.css({left: e.pageX  - cursor.width() + cursor.width() / 2 + 'px', top: e.pageY - cursor.height() * 2 + 'px'});
        let cursorleft = cursor.offset().left;
        let cursorRight = cursor.offset().left + cursor.width();
        let cursorTop = cursor.offset().top;
        let cursorBottom = cursor.offset().top + cursor.height();

        let cursorImgleft = cursorImg.offset().left;
        let cursorImgRight = cursorImg.offset().left + cursorImg.width();
        let cursorImgTop = cursorImg.offset().top;
        let cursorImgBottom = cursorImg.offset().top + cursorImg.height();

        if (cursorImgleft <= contObj.left || cursorImgRight >= contObj.right || cursorImgTop <= contObj.top || cursorImgBottom >= contObj.bottom){
            cursor.css({opacity: 0});
            $('.Level1 .app-container').css({'cursor': 'auto'});
        } else {
            cursor.css({opacity: 1});
            $('.Level1 .app-container').css({'cursor': 'none'});
        }
        const elem = $('#search-1');
        if (elem.length > 0) {
            let elemleft = elem.offset().left;
            let elemRight = elem.offset().left + elem.width();
            let elemTop = elem.offset().top;
            let elemBottom = elem.offset().top + elem.height();
    
            if (cursorleft < elemleft && cursorRight > elemRight && cursorTop < elemTop && cursorBottom > elemBottom ) {
                $('#search-1').addClass('searched');
            }else {
                $('#search-1').removeClass('searched');
            }
        }
    }
});

$(document).on('click', '.Level1', function(e){
    if (!app.hasClass('overloaded')){
        const cursor = $('#cursor-1');
        cursor.css({left: e.pageX  - cursor.width() + cursor.width() / 2 + 'px', top: e.pageY - cursor.height() * 2 + 'px'});
        let cursorleft = cursor.offset().left;
        let cursorRight = cursor.offset().left + cursor.width();
        let cursorTop = cursor.offset().top;
        let cursorBottom = cursor.offset().top + cursor.height();
        const elem = $('#search-1');
        if (elem.length > 0) {
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
        if (elem.length > 0) {
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
        return false;
    }
});

$(document).on('click', '.Level1 #vopros', function(e){
    if (!app.hasClass('overloaded')) {
        $('#search-1').addClass('searched');
    }
});

$(document).on('click', '.Level1 #next-level.next', function(e){
    changeLevel(['level-2']);
    $('.Level1').remove();
    $('.level2').fadeIn(300);
    $('.level2 .overloy-message').show();
    $('#boombox-3').show();
});

function move2(e) {
    if (!app.hasClass('overloaded')){
        const cursor = $('#cursor-2');
        cursor.css({left: e.pageX  - cursor.width() + cursor.width() / 2 + 'px', top: e.pageY - cursor.height() * 2 + 'px'});
        let cursorleft = cursor.offset().left;
        let cursorRight = cursor.offset().left + cursor.width();
        let cursorTop = cursor.offset().top;
        let cursorBottom = cursor.offset().top + cursor.height();
        const elem1 = $('#search-2');
        const elem3 = $('#search-3');
        if (elem1.length > 0){
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
                $('#boombox-3').hide();
                $('#boombox-5').hide();
                $('#boombox-4').show();
                if (elem3.length > 0) {
                    $('#mess-2 .desc span').append('<div style="font-weight: bold; color: #FF2A07; text-align: center;">Теперь найди аккумулятор</div>');
                    $('#mess-2').append('<img class="w-close" src="public/img/close.png"/>');
                }
                $('#mess-2').show();
                if ($('.level2 .messages').length == 1) {
                    $('.level2 #next-level').addClass('next');
                }
            }
        }
        if (elem3.length > 0){
            let elemleft3 = elem3.offset().left;
            let elemRight3 = elem3.offset().left + elem3.width();
            let elemTop3 = elem3.offset().top;
            let elemBottom3 = elem3.offset().top + elem3.height();
            if (cursorleft < elemleft3 && cursorRight > elemRight3 && cursorTop < elemTop3 && cursorBottom > elemBottom3 ) {
                elem3.addClass('searched');
                app.addClass('overloaded');
                $('.level2 .Overloy .overloy-message').remove();
                $('.level2 .Overloy').fadeIn(300);
                cursor.css({zIndex: 200});
                if (elem1.length > 0) {
                    $('#mess-3 .desc span').append('<div style="font-weight: bold; color: #FF2A07; text-align: center;">Теперь найди кнопки</div>');
                    $('#mess-3').append('<img class="w-close" src="public/img/close.png"/>');
                }
                $('#mess-3').show();
                $('#boombox-3').hide();
                $('#boombox-4').hide();
                $('#boombox-5').show();
                if ($('.level2 .messages').length == 1) {
                    $('.level2 #next-level').addClass('next');
                }
            }
        }
    }
}

$(document).on('mousemove', '.level2', function(e){
    if (!app.hasClass('overloaded')){
        const cursor = $('#cursor-2');
        const cursorImg = $('#cursor-2 img');
        cursor.css({left: e.pageX  - cursor.width() + cursor.width() / 2 + 'px', top: e.pageY - cursor.height() * 2 + 'px'});
        let cursorleft = cursor.offset().left;
        let cursorRight = cursor.offset().left + cursor.width();
        let cursorTop = cursor.offset().top;
        let cursorBottom = cursor.offset().top + cursor.height();

        let cursorImgleft = cursorImg.offset().left;
        let cursorImgRight = cursorImg.offset().left + cursorImg.width();
        let cursorImgTop = cursorImg.offset().top;
        let cursorImgBottom = cursorImg.offset().top + cursorImg.height();

        if (cursorImgleft <= contObj.left || cursorImgRight >= contObj.right || cursorImgTop <= contObj.top || cursorImgBottom >= contObj.bottom){
            cursor.css({opacity: 0});
            $('.level2 .app-container').css({'cursor': 'auto'});
        } else {
            cursor.css({opacity: 1});
            $('.level2 .app-container').css({'cursor': 'none'});
        }

        const elem1 = $('#search-2');
        const elem3 = $('#search-3');
        if (elem1.length > 0){
            let elemleft1 = elem1.offset().left;
            let elemRight1 = elem1.offset().left + elem1.width();
            let elemTop1 = elem1.offset().top;
            let elemBottom1 = elem1.offset().top + elem1.height();
            if (cursorleft < elemleft1 && cursorRight > elemRight1 && cursorTop < elemTop1 && cursorBottom > elemBottom1 ) {
                elem1.addClass('searched');
            } else {
                elem1.removeClass('searched');
            }
        }
        if (elem3.length > 0){
            let elemleft3 = elem3.offset().left;
            let elemRight3 = elem3.offset().left + elem3.width();
            let elemTop3 = elem3.offset().top;
            let elemBottom3 = elem3.offset().top + elem3.height();
            if (cursorleft < elemleft3 && cursorRight > elemRight3 && cursorTop < elemTop3 && cursorBottom > elemBottom3 ) {
                elem3.addClass('searched');
            } else {
                elem3.removeClass('searched');
            }
        }
    }
});

$(document).on('click', '.level2', function(e){
    move2(e);
});

$(document).on('touchmove', '.level2 .app-container', function(e){
    e.preventDefault();
    e.stopPropagation();
    move2(e);
    return false;
});

$(document).on('click', '.level2 #vopros', function(e){
    if (!app.hasClass('overloaded')) {
        $('.level2 .sarch-item').each(function (index, value) { 
            if(index == 0){
                $(this).addClass('searched');
            }
        });
    }
});

$(document).on('click', '.level2 #next-level.next', function(e){
    changeLevel(['level-3']);
    $('.level2').remove();
    $('.level3').fadeIn(300);
    $('.level3 .overloy-message').show();
    $('#boombox-6').show();
});

function move3(e) {
    if (!app.hasClass('overloaded')){
        const cursor = $('#cursor-3');
        cursor.css({left: e.pageX  - cursor.width() + cursor.width() / 2 + 'px', top: e.pageY - cursor.height() * 2 + 'px'});
        let cursorleft = cursor.offset().left;
        let cursorRight = cursor.offset().left + cursor.width();
        let cursorTop = cursor.offset().top;
        let cursorBottom = cursor.offset().top + cursor.height();
        const elem1 = $('#search-6');
        const elem3 = $('#search-7');
        if (elem1.length > 0){
            let elemleft1 = elem1.offset().left;
            let elemRight1 = elem1.offset().left + elem1.width();
            let elemTop1 = elem1.offset().top;
            let elemBottom1 = elem1.offset().top + elem1.height();
            if (cursorleft < elemleft1 && cursorRight > elemRight1 && cursorTop < elemTop1 && cursorBottom > elemBottom1 ) {
                $('#search-6').addClass('searched');
                app.addClass('overloaded');
                $('.level3 .Overloy .overloy-message').remove();
                $('.level3 .Overloy').fadeIn(300);
                cursor.css({zIndex: 200});
                $('#boombox-6').hide();
                $('#boombox-8').hide();
                $('#boombox-7').show();
                if (elem3.length > 0) {
                    $('#mess-5 .desc span').append('<div style="font-weight: bold; color: #FF2A07; text-align: center;">Теперь найди ручки</div>');
                    $('#mess-5').append('<img class="w-close" src="public/img/close.png"/>');
                }
                $('#mess-5').show();
                if ($('.level3 .messages').length == 1) {
                    $('.level3 #next-level').addClass('next');
                }
            }
        }
        if (elem3.length > 0){
            let elemleft3 = elem3.offset().left;
            let elemRight3 = elem3.offset().left + elem3.width();
            let elemTop3 = elem3.offset().top;
            let elemBottom3 = elem3.offset().top + elem3.height();
            if (cursorleft < elemleft3 && cursorRight > elemRight3 && cursorTop < elemTop3 && cursorBottom > elemBottom3 ) {
                elem3.addClass('searched');
                app.addClass('overloaded');
                $('.level3 .Overloy .overloy-message').remove();
                $('.level3 .Overloy').fadeIn(300);
                cursor.css({zIndex: 200});
                $('#boombox-6').hide();
                $('#boombox-7').hide();
                $('#boombox-8').show();
                if (elem1.length > 0) {
                    $('#mess-6 .desc span').append('<div style="font-weight: bold; color: #FF2A07; text-align: center;">Теперь найди порты USB</div>');
                    $('#mess-6').append('<img class="w-close" src="public/img/close.png"/>');
                }
                $('#mess-6').show();
                if ($('.level3 .messages').length == 1) {
                    $('.level3 #next-level').addClass('next');
                }
            }
        }
    }
}

$(document).on('mousemove', '.level3', function(e){
    if (!app.hasClass('overloaded')){
        const cursor = $('#cursor-3');
        const cursorImg = $('#cursor-3 img');
        cursor.css({left: e.pageX  - cursor.width() + cursor.width() / 2 + 'px', top: e.pageY - cursor.height() * 2 + 'px'});
        let cursorleft = cursor.offset().left;
        let cursorRight = cursor.offset().left + cursor.width();
        let cursorTop = cursor.offset().top;
        let cursorBottom = cursor.offset().top + cursor.height();

        let cursorImgleft = cursorImg.offset().left;
        let cursorImgRight = cursorImg.offset().left + cursorImg.width();
        let cursorImgTop = cursorImg.offset().top;
        let cursorImgBottom = cursorImg.offset().top + cursorImg.height();

        if (cursorImgleft <= contObj.left || cursorImgRight >= contObj.right || cursorImgTop <= contObj.top || cursorImgBottom >= contObj.bottom){
            cursor.css({opacity: 0});
            $('.level3 .app-container').css({'cursor': 'auto'});
        } else {
            cursor.css({opacity: 1});
            $('.level3 .app-container').css({'cursor': 'none'});
        }

        const elem1 = $('#search-6');
        const elem3 = $('#search-7');
        if (elem1.length > 0){
            let elemleft1 = elem1.offset().left;
            let elemRight1 = elem1.offset().left + elem1.width();
            let elemTop1 = elem1.offset().top;
            let elemBottom1 = elem1.offset().top + elem1.height();
            if (cursorleft < elemleft1 && cursorRight > elemRight1 && cursorTop < elemTop1 && cursorBottom > elemBottom1 ) {
                elem1.addClass('searched');
            } else {
                elem1.removeClass('searched');
            }
        }
        if (elem3.length > 0){
            let elemleft3 = elem3.offset().left;
            let elemRight3 = elem3.offset().left + elem3.width();
            let elemTop3 = elem3.offset().top;
            let elemBottom3 = elem3.offset().top + elem3.height();
            if (cursorleft < elemleft3 && cursorRight > elemRight3 && cursorTop < elemTop3 && cursorBottom > elemBottom3 ) {
                elem3.addClass('searched');
            } else {
                elem3.removeClass('searched');
            }
        }
    }
});

$(document).on('click', '.level3', function(e){
    move3(e);
});

$(document).on('touchmove', '.level3 .app-container', function(e){
    e.preventDefault();
    e.stopPropagation();
    move3(e);
    return false;
});

$(document).on('click', '.level3 #vopros', function(e){
    if (!app.hasClass('overloaded')) {
        $('.level3 .sarch-item').each(function (index, value) { 
            if(index == 0){
                $(this).addClass('searched');
            }
        });
    }
});

$(document).on('click', '.level3 #next-level.next', function(e){
    changeLevel(['level-4']);
    $('.level3').remove();
    $('.level4').fadeIn(300);
    $('.level4 .overloy-message').show();
    $('#boombox-6').show();
});

function move4(e) {
    if (!app.hasClass('overloaded')){
        const cursor = $('#cursor-4');
        cursor.css({left: e.pageX  - cursor.width() + cursor.width() / 2 + 'px', top: e.pageY - cursor.height() * 2 + 'px'});
        let cursorleft = cursor.offset().left;
        let cursorRight = cursor.offset().left + cursor.width();
        let cursorTop = cursor.offset().top;
        let cursorBottom = cursor.offset().top + cursor.height();
        const elem1 = $('#search-8');
        const elem3 = $('#search-9');
        if (elem1.length > 0){
            let elemleft1 = elem1.offset().left;
            let elemRight1 = elem1.offset().left + elem1.width();
            let elemTop1 = elem1.offset().top;
            let elemBottom1 = elem1.offset().top + elem1.height();
            if (cursorleft < elemleft1 && cursorRight > elemRight1 && cursorTop < elemTop1 && cursorBottom > elemBottom1 ) {
                $('#search-8').addClass('searched');
                app.addClass('overloaded');
                $('.level4 .Overloy .overloy-message').remove();
                $('.level4 .Overloy').fadeIn(300);
                cursor.css({zIndex: 200});
                $('#boombox-8').css({zIndex: 200});
                $('#boombox-8').hide();
                $('#boombox-10').hide();
                $('#boombox-9').show();
                if (elem3.length > 0) {
                    $('#mess-7 .desc span').append('<div style="font-weight: bold; color: #FF2A07; text-align: center;">Теперь найди динамики</div>');
                    $('#mess-7').append('<img class="w-close" src="public/img/close.png"/>');
                }
                $('#mess-7').show();
                if ($('.level4 .messages').length == 1) {
                    $('.level4 #next-level').addClass('next');
                }
            }
        }
        if (elem3.length > 0){
            let elemleft3 = elem3.offset().left;
            let elemRight3 = elem3.offset().left + elem3.width();
            let elemTop3 = elem3.offset().top;
            let elemBottom3 = elem3.offset().top + elem3.height();
            if (cursorleft < elemleft3 && cursorRight > elemRight3 && cursorTop < elemTop3 && cursorBottom > elemBottom3 ) {
                elem3.addClass('searched');
                app.addClass('overloaded');
                $('.level4 .Overloy .overloy-message').remove();
                $('.level4 .Overloy').fadeIn(300);
                cursor.css({zIndex: 200});
                $('#boombox-8').hide();
                $('#boombox-9').hide();
                $('#boombox-10').show();
                if (elem1.length > 0) {
                    $('#mess-8 .desc span').append('<div style="font-weight: bold; color: #FF2A07; text-align: center;">Теперь найди корпус</div>');
                    $('#mess-8').append('<img class="w-close" src="public/img/close.png"/>');
                }
                $('#mess-8').show();
                if ($('.level4 .messages').length == 1) {
                    $('.level4 #next-level').addClass('next');
                }
            }
        }
    }
}

$(document).on('mousemove', '.level4', function(e){
    if (!app.hasClass('overloaded')){
        const cursor = $('#cursor-4');
        const cursorImg = $('#cursor-4 img');
        cursor.css({left: e.pageX  - cursor.width() + cursor.width() / 2 + 'px', top: e.pageY - cursor.height() * 2 + 'px'});
        let cursorleft = cursor.offset().left;
        let cursorRight = cursor.offset().left + cursor.width();
        let cursorTop = cursor.offset().top;
        let cursorBottom = cursor.offset().top + cursor.height();

        let cursorImgleft = cursorImg.offset().left;
        let cursorImgRight = cursorImg.offset().left + cursorImg.width();
        let cursorImgTop = cursorImg.offset().top;
        let cursorImgBottom = cursorImg.offset().top + cursorImg.height();

        if (cursorImgleft <= contObj.left || cursorImgRight >= contObj.right || cursorImgTop <= contObj.top || cursorImgBottom >= contObj.bottom){
            cursor.css({opacity: 0});
            $('.level4 .app-container').css({'cursor': 'auto'});
        } else {
            cursor.css({opacity: 1});
            $('.level4 .app-container').css({'cursor': 'none'});
        }

        const elem1 = $('#search-8');
        const elem3 = $('#search-9');
        if (elem1.length > 0){
            let elemleft1 = elem1.offset().left;
            let elemRight1 = elem1.offset().left + elem1.width();
            let elemTop1 = elem1.offset().top;
            let elemBottom1 = elem1.offset().top + elem1.height();
            if (cursorleft < elemleft1 && cursorRight > elemRight1 && cursorTop < elemTop1 && cursorBottom > elemBottom1 ) {
                elem1.addClass('searched');
            } else {
                elem1.removeClass('searched');
            }
        }
        if (elem3.length > 0){
            let elemleft3 = elem3.offset().left;
            let elemRight3 = elem3.offset().left + elem3.width();
            let elemTop3 = elem3.offset().top;
            let elemBottom3 = elem3.offset().top + elem3.height();
            if (cursorleft < elemleft3 && cursorRight > elemRight3 && cursorTop < elemTop3 && cursorBottom > elemBottom3 ) {
                elem3.addClass('searched');
            } else {
                elem3.removeClass('searched');
            }
        }
    }
});

$(document).on('click', '.level4', function(e){
    move4(e);
});

$(document).on('touchmove', '.level4 .app-container', function(e){
    e.preventDefault();
    e.stopPropagation();
    move4(e);
    return false;
});

$(document).on('click', '.level4 #vopros', function(e){
    if (!app.hasClass('overloaded')) {
        $('.level4 .sarch-item').each(function (index, value) { 
            if(index == 0){
                $(this).addClass('searched');
            }
        });
    }
});

$(document).on('click', '.level4 #next-level.next', function(e){
    changeLevel(['final']);
    $('.level4').remove();
    $('.final').fadeIn(300);
});

let url = ''
const urlProgect = 'https://medialeaks.ru/pomogi_zvezdam_na_avito/index.html'
const title = 'Я помог с покупками через Авито. Теперь твоя очередь!'
const desc = 'Я помог с покупками через Авито. Теперь твоя очередь!'
const pimg = 'https://medialeaks.ru/wp-content/uploads/2020/04/.jpg'

function shareVk() {
    url = 'http://vkontakte.ru/share.php?';
    url += 'url=' + encodeURIComponent(urlProgect);
    url += '&title=' + encodeURIComponent(title);
    url += '&description=' + encodeURIComponent(desc);
    url += '&image=' + encodeURIComponent(pimg);
    url += '&noparse=true';
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
}

function shareTwitter(){
    url = 'http://twitter.com/share?';
    url += 'text=' + encodeURIComponent(title);
    url += '&url=' + encodeURIComponent(urlProgect);
    url += '&counturl=' + encodeURIComponent(urlProgect);
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
}

function shareFacebook() {
    url = 'http://www.facebook.com/sharer.php?s=100';
    url += '&p[title]=' + encodeURIComponent(title);
    url += '&p[summary]=' + encodeURIComponent(desc);
    url += '&p[url]=' + encodeURIComponent(urlProgect);
    url += '&p[images][0]=' + encodeURIComponent(pimg);
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
}

$(document).on('click', '.share-wrap a', function(){
    if($(this).hasClass('share-vk')) shareVk();
    if($(this).hasClass('share-t')) shareTwitter();
    if($(this).hasClass('share-f')) shareFacebook();
    
    return false;
});

