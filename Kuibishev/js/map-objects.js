<<<<<<< HEAD
$(function () {
    if ($('#map').length)
        initMapObjects();
});

function initMapObjects() {
    var $mapObjectsPage = $('#location'), //основная обертка раздела
        $objectsCategory = $('#location-category'), //список категорий/фильтры
        $objectsMap = $('#map'), //карта объектов
        $objectsList = $('#objects_list'); //список объектов


    fullscreenPage();

    $(window).on('resize', function () {
        fullscreenPage();
    });


    //объекты карты
    var map, //фулскрин карта
        objectManager; //объект с балунами для карты фулскрин

    //инициализация карт
    ymaps.ready(function () {
        initMaps();
    });

    //для мобильной версии показ/скрытие фулскрин карты
    $objectsMap.on('click', '.toggle-fullscreen-map', function () {
        if ($mapObjectsPage.hasClass('fullscreen-map')) {
            $mapObjectsPage.removeClass('fullscreen-map');

        } else {
            $mapObjectsPage.addClass('fullscreen-map');
        }

        fullscreenPage();
        map.container.fitToViewport();
        return false;
    });

    $mapObjectsPage.on('click', '.location-right-item', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');

        } else {
            $(this).addClass('active');
        }

        mapFilterRefresh();

        return false;
    });

    //показ/скрытие фильтра категорий
    $mapObjectsPage.on('click', '.category-toggle', function () {
        var $obj = $(this).parent();
        if ($obj.hasClass('open')) {
            $obj.removeClass('open');

        } else {
            $obj.addClass('open');
        }

        return false;
    });


    //если просмотр объекта - проскролливаем сайдбар сразу к активному объекту!
    var $currentObject = $objectsList.find('.object.active');
    if ($currentObject.length) {
        //для основной - скролл блока!
        if ($(window).width() * 1 > 1000) {
            var top = $currentObject.offset().top - $('#header_bar').height() * 1 - $('#page_caption').height() * 1 - 85;
            $objectsList.find('.scroll-content').scrollTop(top);
        } else {
            // setTimeout(function () {
            //     //для моб.версии скролл страницы
            //     var top = $currentObject.offset().top - 20;
            //     $(window).scrollTop(top);
            // }, 1000);
        }
    }


    $(window).on('resize', function () {
        fullscreenPage();
    });

    //инициализия яндекс-карт раздела
    function initMaps() {
        map = new ymaps.Map('map', {
            center: [53.286570, 50.222692],
            zoom: 15,
            controls: ['zoomControl']
        }, {
            suppressMapOpenBlock: true,
            yandexMapDisablePoiInteractivity: true,
            viewportMargin: 0
        });
        var myPlacemark = new ymaps.Placemark([53.286570, 50.222692], {
            hintContent: 'Содержимое всплывающей подсказки',
            balloonContent: 'Содержимое балуна'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark.svg',
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -16],
        });
        map.geoObjects.add(myPlacemark);

        map.behaviors.disable('scrollZoom')
        objectManager = new ymaps.ObjectManager({
            // clusterize: true,
            // gridSize: 32,
            // clusterDisableClickZoom: false
        });

        addObjectsOnMap();
    }

    function addObjectsOnMap() {
        if (OBJECTS.partners) {
            //формируем JSON балунов для ObjectManager
            var features = [];

            $.each(OBJECTS.partners, function (key, val) {
                //данные о партнере
                var id = val.id,
                    name = val.name,
                    coords = val.coords,
                    photo = val.photo,
                    address = val.address,
                    url = val.url,
                    current = val.current
                categoryId = val.categoryId;

                if (coords) {
                    coords = coords.split(',');
                    //информация о категории
                    var categoryInfo = CATEGORY_OBJECTS['c' + categoryId],
                        categoryBalloon = categoryInfo['balloon'];

                    //формируем контент описания балуна
                    var photoHTML = '',
                        addClass = '';
                    if (photo) {
                        photoHTML = '<div class="photo"><img src="' + photo + '"></div>';

                    } else {
                        addClass = 'no-photo';
                    }

                    var addressHTML = '';
                    if (address) {
                        addressHTML = '<p class="address">' + address + '</p>';
                    }

                    var balloonDesc = '<div class="balloon-info"><a href="' + url + '" class="with-photo-block ' + addClass + '">' + photoHTML + '<p class="name">' + name + '</p>' + addressHTML + '<div class="clr"></div></a><p><a class="external-link" href="https://yandex.ru/maps/samara/?mode=whatshere&ll=' + coords[1] + '%2C' + coords[0] + '&z=17&whatshere%5Bpoint%5D=' + coords[1] + '%2C' + coords[0] + '&whatshere%5Bzoom%5D=17" target="_blank">Смотреть на Яндекс.Картах</a></p></div>';

                    //если на странице просмотра объекта
                    //добавляем увеличенный балун для текущего объекта и позиционируем карту!
                    if (current) {
                        features.push({
                            'type': 'Feature',
                            'id': id,
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [coords[0], coords[1]]
                            },
                            'properties': {
                                'balloonContent': balloonDesc,
                                'categoryID': categoryId
                            },
                            'options': {
                                'iconLayout': 'default#image',
                                "hideIconOnBalloonOpen": false,
                                'iconImageHref': categoryBalloon,
                                'iconImageSize': [50, 50],
                                'iconImageOffset': [-25, -50],
                                'balloonOffset': [0, -50]
                            }
                        });

                        map.setCenter([coords[0], coords[1]], 14);

                    } else {
                        features.push({
                            'type': 'Feature',
                            'id': id,
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [coords[0], coords[1]]
                            },
                            'properties': {
                                'balloonContent': balloonDesc,
                                'categoryID': categoryId
                            },
                            'options': {
                                'iconLayout': 'default#image',
                                "hideIconOnBalloonOpen": false,
                                'iconImageHref': categoryBalloon,
                                'iconImageSize': [30, 30],
                                'iconImageOffset': [-15, -30],
                                'balloonOffset': [0, -30]
                            }
                        });
                    }

                }
            });

            var jsonObjects = {
                'type': 'FeatureCollection',
                'features': features
            };

            map.geoObjects.add(objectManager);

            objectManager.add(jsonObjects);

            //если просмотр категории
            //позиционируем карту так, чтобы были видные все балуны!
            //и добавляем обновление списка объектов в зависимости от попадания во вьюпорт!
            var type = $objectsMap.attr('data-type');
            if (type == 'category') {
                map.setBounds(objectManager.getBounds());

                map.events.add(['boundschange', 'datachange', 'objecttypeschange'], function (e) {
                    // console.log(map.getBounds());
                    // var count = 0;
                    // objectManager.objects.each(function (object) {

                    //   var objectState = objectManager.getObjectState(object.id);
                    //   if (objectState.isShown) {
                    //     count++;
                    //   }
                    // });

                    // console.log(count);
                });
            }

        }

    }

    function mapFilterRefresh() {
        //формируем строку фильтров
        var strFilter = '';
        $objectsCategory.find('.location-right-item.active').each(function () {
            if (strFilter != '') {
                strFilter += ' || ';
            }
            strFilter += 'properties.categoryID == ' + $(this).attr('data-category');
        });

        //при выключенных фильтрах формируем фейковую строку, чтобы яндекс не возвращал показ всех категорий балунов!
        if (strFilter == '') {
            strFilter = 'properties.categoryID == 23333';
        }

        //применяем фильтры
        objectManager.setFilter(strFilter);
    }

    //установка высоты для фулскрин блоков
    function fullscreenPage() {
        var height = $(window).height() * 1 - $('#header_bar').height() * 1 - $('#page_caption').height() * 1;
        if (height < 300) {
            height = 300;
        }

        $mapObjectsPage.css({
            'height': height,
            'minHeight': height
        });
    }
=======
$(function () {
    if ($('#map').length)
        initMapObjects();
});

function initMapObjects() {
    var $mapObjectsPage = $('#location'), //основная обертка раздела
        $objectsCategory = $('#location-category'), //список категорий/фильтры
        $objectsMap = $('#map'), //карта объектов
        $objectsList = $('#objects_list'); //список объектов


    fullscreenPage();

    $(window).on('resize', function () {
        fullscreenPage();
    });


    //объекты карты
    var map, //фулскрин карта
        objectManager; //объект с балунами для карты фулскрин

    //инициализация карт
    ymaps.ready(function () {
        initMaps();
    });

    //для мобильной версии показ/скрытие фулскрин карты
    $objectsMap.on('click', '.toggle-fullscreen-map', function () {
        if ($mapObjectsPage.hasClass('fullscreen-map')) {
            $mapObjectsPage.removeClass('fullscreen-map');

        } else {
            $mapObjectsPage.addClass('fullscreen-map');
        }

        fullscreenPage();
        map.container.fitToViewport();
        return false;
    });

    $mapObjectsPage.on('click', '.location-right-item', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');

        } else {
            $(this).addClass('active');
        }

        mapFilterRefresh();

        return false;
    });

    //показ/скрытие фильтра категорий
    $mapObjectsPage.on('click', '.category-toggle', function () {
        var $obj = $(this).parent();
        if ($obj.hasClass('open')) {
            $obj.removeClass('open');

        } else {
            $obj.addClass('open');
        }

        return false;
    });


    //если просмотр объекта - проскролливаем сайдбар сразу к активному объекту!
    var $currentObject = $objectsList.find('.object.active');
    if ($currentObject.length) {
        //для основной - скролл блока!
        if ($(window).width() * 1 > 1000) {
            var top = $currentObject.offset().top - $('#header_bar').height() * 1 - $('#page_caption').height() * 1 - 85;
            $objectsList.find('.scroll-content').scrollTop(top);
        } else {
            // setTimeout(function () {
            //     //для моб.версии скролл страницы
            //     var top = $currentObject.offset().top - 20;
            //     $(window).scrollTop(top);
            // }, 1000);
        }
    }


    $(window).on('resize', function () {
        fullscreenPage();
    });

    //инициализия яндекс-карт раздела
    function initMaps() {
        map = new ymaps.Map('map', {
            center: [53.286570, 50.222692],
            zoom: 15,
            controls: ['zoomControl']
        }, {
            suppressMapOpenBlock: true,
            yandexMapDisablePoiInteractivity: true,
            viewportMargin: 0
        });
        var myPlacemark = new ymaps.Placemark([53.286570, 50.222692], {
            hintContent: 'Содержимое всплывающей подсказки',
            balloonContent: 'Содержимое балуна'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark.svg',
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -16],
        });
        map.geoObjects.add(myPlacemark);

        map.behaviors.disable('scrollZoom')
        objectManager = new ymaps.ObjectManager({
            // clusterize: true,
            // gridSize: 32,
            // clusterDisableClickZoom: false
        });

        addObjectsOnMap();
    }

    function addObjectsOnMap() {
        if (OBJECTS.partners) {
            //формируем JSON балунов для ObjectManager
            var features = [];

            $.each(OBJECTS.partners, function (key, val) {
                //данные о партнере
                var id = val.id,
                    name = val.name,
                    coords = val.coords,
                    photo = val.photo,
                    address = val.address,
                    url = val.url,
                    current = val.current
                categoryId = val.categoryId;

                if (coords) {
                    coords = coords.split(',');
                    //информация о категории
                    var categoryInfo = CATEGORY_OBJECTS['c' + categoryId],
                        categoryBalloon = categoryInfo['balloon'];

                    //формируем контент описания балуна
                    var photoHTML = '',
                        addClass = '';
                    if (photo) {
                        photoHTML = '<div class="photo"><img src="' + photo + '"></div>';

                    } else {
                        addClass = 'no-photo';
                    }

                    var addressHTML = '';
                    if (address) {
                        addressHTML = '<p class="address">' + address + '</p>';
                    }

                    var balloonDesc = '<div class="balloon-info"><a href="' + url + '" class="with-photo-block ' + addClass + '">' + photoHTML + '<p class="name">' + name + '</p>' + addressHTML + '<div class="clr"></div></a><p><a class="external-link" href="https://yandex.ru/maps/samara/?mode=whatshere&ll=' + coords[1] + '%2C' + coords[0] + '&z=17&whatshere%5Bpoint%5D=' + coords[1] + '%2C' + coords[0] + '&whatshere%5Bzoom%5D=17" target="_blank">Смотреть на Яндекс.Картах</a></p></div>';

                    //если на странице просмотра объекта
                    //добавляем увеличенный балун для текущего объекта и позиционируем карту!
                    if (current) {
                        features.push({
                            'type': 'Feature',
                            'id': id,
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [coords[0], coords[1]]
                            },
                            'properties': {
                                'balloonContent': balloonDesc,
                                'categoryID': categoryId
                            },
                            'options': {
                                'iconLayout': 'default#image',
                                "hideIconOnBalloonOpen": false,
                                'iconImageHref': categoryBalloon,
                                'iconImageSize': [50, 50],
                                'iconImageOffset': [-25, -50],
                                'balloonOffset': [0, -50]
                            }
                        });

                        map.setCenter([coords[0], coords[1]], 14);

                    } else {
                        features.push({
                            'type': 'Feature',
                            'id': id,
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [coords[0], coords[1]]
                            },
                            'properties': {
                                'balloonContent': balloonDesc,
                                'categoryID': categoryId
                            },
                            'options': {
                                'iconLayout': 'default#image',
                                "hideIconOnBalloonOpen": false,
                                'iconImageHref': categoryBalloon,
                                'iconImageSize': [30, 30],
                                'iconImageOffset': [-15, -30],
                                'balloonOffset': [0, -30]
                            }
                        });
                    }

                }
            });

            var jsonObjects = {
                'type': 'FeatureCollection',
                'features': features
            };

            map.geoObjects.add(objectManager);

            objectManager.add(jsonObjects);

            //если просмотр категории
            //позиционируем карту так, чтобы были видные все балуны!
            //и добавляем обновление списка объектов в зависимости от попадания во вьюпорт!
            var type = $objectsMap.attr('data-type');
            if (type == 'category') {
                map.setBounds(objectManager.getBounds());

                map.events.add(['boundschange', 'datachange', 'objecttypeschange'], function (e) {
                    // console.log(map.getBounds());
                    // var count = 0;
                    // objectManager.objects.each(function (object) {

                    //   var objectState = objectManager.getObjectState(object.id);
                    //   if (objectState.isShown) {
                    //     count++;
                    //   }
                    // });

                    // console.log(count);
                });
            }

        }

    }

    function mapFilterRefresh() {
        //формируем строку фильтров
        var strFilter = '';
        $objectsCategory.find('.location-right-item.active').each(function () {
            if (strFilter != '') {
                strFilter += ' || ';
            }
            strFilter += 'properties.categoryID == ' + $(this).attr('data-category');
        });

        //при выключенных фильтрах формируем фейковую строку, чтобы яндекс не возвращал показ всех категорий балунов!
        if (strFilter == '') {
            strFilter = 'properties.categoryID == 23333';
        }

        //применяем фильтры
        objectManager.setFilter(strFilter);
    }

    //установка высоты для фулскрин блоков
    function fullscreenPage() {
        var height = $(window).height() * 1 - $('#header_bar').height() * 1 - $('#page_caption').height() * 1;
        if (height < 300) {
            height = 300;
        }

        $mapObjectsPage.css({
            'height': height,
            'minHeight': height
        });
    }
>>>>>>> 166b87d23fa700e4806e02fa0c833f73f634e4b2
}