$(function() {

  var search;

  function searchWiki() {
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&format=json",
        dataType: "jsonp",
        success: function(data) {
          console.log(data);
          $('.search-items').empty();
          for (var i=0; i < data[1].length; i++) {
            $('.search-items').append('<li class=\'item\'><a class=\'item-link\' href=' + data[3][i] + ' target=\'_blank\'>' + '<h2>' + data[1][i] + '</h2><p>' + data[2][i] + '</p>' + '</a></li>');
          }

      }
    });
  }

  $('form').on('submit', function(e) {
    e.preventDefault();
    search = $('input').val();
    searchWiki();
  })


});