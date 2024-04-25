const swup = new Swup();

$(function () {



    // вызов меню
    $(function () {
        var menuVisible = false;

        // Показать / скрыть меню при клике на кнопку
        $('.burger-btn').click(function (e) {
            e.stopPropagation(); // Остановить всплытие события, чтобы не срабатывало на document.click
            menuVisible = !menuVisible;
            $(this).toggleClass('active');
            $('.menu').toggleClass('active');
        });

        // Скрыть меню при клике за его пределами
        $(document).click(function (e) {
            if (menuVisible && !$(e.target).closest('.menu').length && !$(e.target).closest('.burger-btn').length) {
                $('.burger-btn').removeClass('active');
                $('.menu').removeClass('active');
                menuVisible = false;
            }
        });

        $('.menu__link').click(function (e) {
            $('.burger-btn').removeClass('active');
            $('.menu').removeClass('active');
            menuVisible = false;
        });
    });



    // липкая шапка
    $(function () {
        var header = $('.header');
        var hero = $('.hero');
        var scrollPosition = $(window).scrollTop();

        // Проверяем положение прокрутки при загрузке страницы
        if (scrollPosition > 30) {
            header.addClass('fixed');
        }

        $(window).scroll(function () {
            scrollPosition = $(window).scrollTop();
            if (scrollPosition > 30) {
                header.addClass('fixed');
                hero.addClass('hide');
            } else {
                header.removeClass('fixed');
                hero.removeClass('hide');
            }
        });
    });


});




// window.addEventListener('load', () => {
//     updateCurrentLink(); // Вызов функции при загрузке страницы
// });

// //Swup reload updateCurrentLink
// swup.hooks.on('page:view', (visit) => {
//     console.log('New page loaded:', visit.to.url);
//     updateCurrentLink(); // Повторный запуск функции обновления текущего элемента меню
//   });