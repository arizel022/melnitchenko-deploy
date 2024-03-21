$(function () {
    new WOW().init();

    $(document).on('mouseup', function (e) {
        // Проверяем, был ли клик вне элемента .order и его дочерних элементов, а также
        // наличие класса 'show' у элемента .backdrop
        if (!$('.order').is(e.target) && $('.order').has(e.target).length === 0 && $('.backdrop').hasClass('show')) {
            $('.backdrop').removeClass('show');
        }
    });

    

    if ($('.program__list').length) {
        var mixer = mixitup('.program__list');
    }





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
                $('.menu__list').removeClass('active');
                menuVisible = false;
            }
        });
        // Скрыть меню при клике на элемент .menu__item
        $('.menu__item').click(function () {
            $('.burger-btn').removeClass('active');
            $('.menu').removeClass('active');
            menuVisible = false;
        });
    });

    // появление затемнения липкой шапки
    $(function () {
        var header = $('.header');
        var scrollPosition = $(window).scrollTop();

        // Проверяем положение прокрутки при загрузке страницы
        if (scrollPosition > 30) {
            header.addClass('fixed');
        }

        $(window).scroll(function () {
            scrollPosition = $(window).scrollTop();
            if (scrollPosition > 30) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        });
    });


    // чтобы тег base не мешал якорным ссылкам + сразу же плавный скролл для всех якорных ссылок
    $(function () {
        $("body").on('click', '[href*="#"]', function (e) {
            var fixed_offset = 150;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 800);
            e.preventDefault();
        });
    });


    // если .blog__list есть на странице, то микситап будет проинициализирован
    if ($('.blog__list').length) {
        var mixer = mixitup('.blog__list');
    }
});

