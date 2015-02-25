
$(document).ready(function() {

   var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
   

   $('.work_item').hover(
      function(){
         $(this).children('.fade').fadeIn(150)
         
      }, 
      function() {
         $(this).children('.fade').fadeOut(50)
         
      }
   )

$('.work_item').on('click', function(){
      var num = parseInt($(this).attr('id'))
     $('.work_item_description').eq(num).slideDown(400);
})

$('.work_item_description button').on('click', function(){
   $('.work_item_description').slideUp(100);
})

$('.contact_form_display_button').on('click', function() {
   $('.work_item_description.contact').slideDown(400)
})

if ($(document).width() < 900) {
   $('.contact_form_display_button').on('click', function(){
      $('.work_item_description.contact').slideDown(400)
      $('#work').hide()
   })
   $('#contact_close_button').on('click', function(){
   $('#work').show()
   $('.work_item_description').slideUp(100);
   })


  $('.work_item').on('click', function(){
      $('#visible_container').hide()
      var num = parseInt($(this).attr('id'))
     $('.work_item_description').eq(num).slideDown(400);
   })

  $('.work_item_description button').on('click', function(){
   $('#visible_container').show()
   $('.work_item_description').slideUp(100);
   })

}








})