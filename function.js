///// function.js の内容
$(function(){

  $.ajax({
    url: 'https://saitama-works.microcms.io/api/v1/blogs',
    type: 'GET',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': 'gAbFiDfEhHjuuTS130Oo8WZo9o7PsUlTgOBV'
    },
  })
  .done(function(data) {

    var article = '';
    var lines = '';

    // 各値の取得
    $.each(data.contents, function(index, value) {
      var date = value.publishedAt.slice(0,10);
      var title = value.title;
      var content = value.content;
      var id = value.id;

      // 個別記事のHTMLを生成
      var article_id = location.search.slice(4,20);
      if(id === article_id){
        article =  '<div class="card column is-12">\
          <div class="card-content"><div class="content">\
          <h3 class="title is-2">'+ title +'</h3>\
          <time datetime="'+ date +'">'+ date +'</time>\
          <p>'+ content +'</p>\
          </div></div></div>';
        $('.article').html(article);
      }

      // 記事一覧のHTMLを生成
      lines +=  '<div class="card column is-4">\
        <a href="./index.html?id='+ id +'">\
        <div class="card-content"><div class="content">\
        <h3 class="subtitle is-5">'+ title +'</h3>\
        <time datetime="'+ date +'">'+ date +'</time>\
        </div></div></a></div>';
    }) 
    $('.news-list').html(lines);
  })
  .fail(function() {
    console.log('failed');
  });

});