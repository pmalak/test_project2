

$( document ).ready(function() {
  console.log( "ready!" );

  ///CHANGE TARGET TO FIND PARENT ELEMENT !!!!!!!!!!!!!!!!!
  var target = ""
      
  // ====================== NAVBAR RESIZING =====================
  ///////////////////////////////////////////////////////////////
  $(function(){
      $('nav').data('size','big');
  });

  $(window).scroll(function(){
    
      if($(document).scrollTop() > 0)
      {
          if($('nav').data('size') == 'big')
          {
              $('nav').data('size','small');
              $('nav').stop().animate({
                  height:'70px',
              },600)
              .addClass("shadow")

              $('.logo').stop().animate({
                  height:'60px',
              },600);    
                    
          }
      }
      else
      {
          if($('nav').data('size') == 'small')
          {
              $('nav').data('size','big');
              $('nav').stop().animate({
                  height:'156px'
              },600)
              .removeClass("shadow")
              $('.logo').stop().animate({
                  height:'98px',
                   
              },600);
          }  
      }
  });

////////// MOBILE NAVBAR TOGGLE AND NAVIGATION  ///////////////////////
/////////////////////////////////////////////////////////////////
  function navToggle() {
    var width = document.body.clientWidth;
      if (width <= 840) {
      $(".nav").toggle('slide',{direction:'right'},300);
      $('#nav-toggle').toggleClass('active');   
    }
  }  

  $("nav li").on("click", function(e) {
    e.preventDefault(); 
    target = "." + $(this).attr('value');
    navToggle();
    $('html, body').animate({
      scrollTop: $(target).offset().top - 60}, 400);
  })

  $('#nav-toggle').click(function(e) {
    e.preventDefault(); 
    navToggle(); 
  });

////////// SHOW HIDDEN DETAILS SECTION IN WHO WE ARE  ////////////
/////////////////////////////////////////////////////////////////
  $('.js-block-btn').click(function(e){
    e.preventDefault(); 
    var target = "." + $(this).attr('value')
    var $target = $(target);

    if ($target.hasClass("show")) {
      $target.fadeTo(400, 0, function() {
        $target.removeClass("show", 150)
        $('.block')
          .show()
          $('.block') 
          .fadeTo(300, 1)   
        })        

    } else {        
      $('.block').not(target)
        .fadeTo(200, 0.01)     
        
      $target
        .delay(200)
        .fadeTo(400, 0, function() {
            $('.block').not(target)
              .hide()
        })
   
      $target
        .addClass("show", 150)
        .fadeTo(800, 1)
    }
  });


  /////////////////  CONTACT FORM    ///////////////////////////////
  //////////////////////////////////////////////////////////////////

  //////TEXTAREA  RESIZE ////

  var textarea = document.querySelector('textarea');
  textarea.addEventListener('keydown', autosize);
  function autosize(){
    var el = this;
    setTimeout(function(){
      el.style.cssText = 'height:auto; padding:0';
      // for box-sizing other than "content-box" use:
      // el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
  }

  /////////// LABEL LIFT AFTER CLICK ON INPUT//
  $(".form-row").click(function () {
    $(this).find("label").css({
    // $("textarea ~ label").css({
        "transform": "scale(0.75)",
        "top": "-25px",
        "left": "-15px",
    })
  }) 

  // Applied globally on all textareas with the "autoExpand" class
// $(document)
//     .one('focus.autoExpand', 'textarea.autoExpand', function(){
//         var savedValue = this.value;
//         this.value = '';
//         this.baseScrollHeight = this.scrollHeight;
//         this.value = savedValue;
//     })
//     .on('input.autoExpand', 'textarea.autoExpand', function(){
//         var minRows = this.getAttribute('data-min-rows')|0, rows;
//         this.rows = minRows;
//         rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
//         this.rows = minRows + rows;
//     });








});






