$(document).ready(function() {
    $('.showmenu').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });
    
   // 點擊愛心 
   $('.like-n').click(function (e) { 
    e.preventDefault();
    $(this).siblings('.like').css('display', 'block');
    $(this).css('display','none')
   });
   

   //取消愛心
   $('.like').click(function (e) { 
    e.preventDefault();
    $(this).css('display', 'none');
    $(this).siblings('.like-n').css('display','block')
   });

});