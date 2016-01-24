(function (window, $) {
  'use strict';

  var imgs = [
    ['images/ATX_capitol2.jpg', "Elana"],
    ['images/ATX_franklin2.jpg',  "Elana"],
    ['images/ATX_historystar.jpg', "Elana"],
    ['images/ATX_leaves.jpg', "Elana"],
    ['images/ATX_maze2.jpg', "Elana"],
    ['images/ATX_tower2.jpg', "Elana"],
    ['images/ATX_night.jpg', "Elana"],
    ['images/ATX_skyline2.jpg', "Elana"]
],
    Cache = [],
    currentIndex = -1,
    rotateDuration = 8 * 1000,
    interval,
    changeBg = function () {
      var len = Cache.length, index = currentIndex;
      if (!len || (len === 1 && currentIndex === 0)) { return; }

      do {
        index = ~~(Math.random() * len);
      } while (index === currentIndex);

      $('#bgtop').fadeOut(0).css('background-image', 'url(' + Cache[index][0] + ')').fadeIn(500);
      $('#photocredit').text(Cache[index][1]);
      $('a#photolink').prop('href', Cache[index][2]);
      currentIndex = index;
    },
    shuffle = function (array) {
      var i, j, temp;
      for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };

  window.bg = {
    start: function () {
      interval = window.setInterval(changeBg, rotateDuration);
    },
    stop: function () {
      window.clearInterval(interval);
    }
  };

  imgs = shuffle(imgs);

  $.each(imgs, function () {
    var url = this,
      img = new Image();

    $(img).load(function () {
      Cache.push(url);

      if (Cache.length === 1) {
        changeBg();
        window.bg.start();
      }
    }).attr('src', url[0]);
  });

  $('#joinlink').on('click', function () {
    $("#form").fadeIn(500);
  });

  $('#joinconfirm').on('click', function () {
    $("#gplus").hide();
    $("#form").fadeIn(500);
  });

  $('#formclose').on('click', function () {
    $("#form").hide();
  });

  $('#aboutlink').on('click', function () {
    $("#about").fadeIn(500);
  });

  $('#aboutclose').on('click', function () {
    $("#about").hide();
  });

  $('#gpluslink').on('click', function () {
    $("#gplus").fadeIn(500);
  });

  $('#gplusclose').on('click', function () {
    $("#gplus").hide();
  });

})(window, jQuery);