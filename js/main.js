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

//табы
document.addEventListener('DOMContentLoaded', function () {
    // Первоначальная установка активных классов для кнопки infoBtn и блока infoContent
    document.getElementById('infoBtn').classList.add('active');
    document.getElementById('infoContent').classList.add('active');

    // Назначаем обработчик события клика на все кнопки
    document.querySelectorAll('.tabs__filter-button').forEach(function (button) {
        button.addEventListener('click', function () {
            // Удаляем класс active со всех кнопок и блоков контента
            document.querySelectorAll('.tabs__filter-button').forEach(function (btn) {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.tabs__content-item').forEach(function (content) {
                content.classList.remove('active');
            });

            // Добавляем класс active к текущей кнопке и соответствующему блоку контента
            this.classList.add('active');
            var contentId = this.getAttribute('id').replace('Btn', 'Content');
            document.getElementById(contentId).classList.add('active');
        });
    });
});


//галерея с увеличением по клику, можно использовать на любой странице
$(function () {
    $('.lightFox').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        retina: {
            ratio: 2, // Increase this number to enable retina image support.
            // Image in popup will be scaled down by this number.
            // Option can also be a function which should return a number (in case you support multiple ratios). For example:
            // ratio: function() { return window.devicePixelRatio === 1.5 ? 1.5 : 2  }
            replaceSrc: function (item, ratio) {
                return item.src.replace(/\.\w+$/, function (m) {
                    return '-2x' + m;
                });
            } // function that changes image source
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        },
        swipe: {
            enabled: true
        }
    });
});


//Swup reload
swup.hooks.on('page:view', (visit) => {

    //табы
    document.querySelectorAll('.tabs__filter-button').forEach(function (button) {
        button.addEventListener('click', function () {
            // Удаляем класс active со всех кнопок и блоков контента
            document.querySelectorAll('.tabs__filter-button').forEach(function (btn) {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.tabs__content-item').forEach(function (content) {
                content.classList.remove('active');
            });

            // Добавляем класс active к текущей кнопке и соответствующему блоку контента
            this.classList.add('active');
            var contentId = this.getAttribute('id').replace('Btn', 'Content');
            document.getElementById(contentId).classList.add('active');
        });
    });

    $(function () {
        $('.lightFox').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title');
                }
            },
            gallery: {
                enabled: true
            },
            retina: {
                ratio: 2, // Increase this number to enable retina image support.
                // Image in popup will be scaled down by this number.
                // Option can also be a function which should return a number (in case you support multiple ratios). For example:
                // ratio: function() { return window.devicePixelRatio === 1.5 ? 1.5 : 2  }
                replaceSrc: function (item, ratio) {
                    return item.src.replace(/\.\w+$/, function (m) {
                        return '-2x' + m;
                    });
                } // function that changes image source
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function (element) {
                    return element.find('img');
                }
            },
            swipe: {
                enabled: true
            }
        });
    });
});


