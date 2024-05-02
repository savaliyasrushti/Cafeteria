
//loader start
$(document).ready(function() {
  setTimeout(function(){
      $('.loader').fadeOut();
  },2000);
  var btn = $('#button');
  
$(window).scroll(function() {
  if($(window).scrollTop() > 300){
      btn.addClass('show');
  }else{
      btn.removeClass('show');
  }

});
btn.on('click',function(e){
  e.preventDefault();
  $('html,body').animate({screenTop:0},'500');
});
})
// loader end 


$(document).ready(function() {
    setTimeout(function(){
        $('.loader').fadeOut();
    },2000);
    var btn = $('#button');
    
$(window).scroll(function() {
    if($(window).scrollTop() > 300){
        btn.addClass('show');
    }else{
        btn.removeClass('show');
    }

});
btn.on('click',function(e){
    e.preventDefault();
    $('html,body').animate({screenTop:0},'500');
});
})
// loader end


// icon section start
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});

//icon section end 
    // header sticky start

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 200) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });
// header stiky end  