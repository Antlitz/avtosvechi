$(document).ready(function() {
 $('select').styler();
 $("#owl-demo").owlCarousel({
    slideSpeed : 300,
    singleItem: true,
    paginationSpeed : 400
  });




$(document).on('click', '.js-city-select', function(){
  $('.js-chose-city--popup--wrap').show();
});

$(document).on('click', '.js-popup-close', function(){
  $('.js-chose-city--popup--wrap').hide();
});


$(document).on('click', '.js-top-lk__text', function(){
  $('.js-autorization--popup--wrap').show();
});

$(document).on('click', '.js-popup-close', function(){
  $('.js-autorization--popup--wrap').hide();
});



$(document).on('click', '.js-promo-vin', function(){
  $('.js-vin--popup--wrap').show();
});

$(document).on('click', '.js-popup-close', function(){
  $('.js-vin--popup--wrap').hide();
});

	$(".btn-value__count").on("click", function() {

  var $button = $(this);
  var oldValue = $button.parent().find("input").val();
  var newVal;
  if ($button.hasClass('btn-value__count--plus')) {
    newVal = parseInt(oldValue) + 1;
  } else if ($button.hasClass('btn-value__count--minus')) {
        newVal = parseInt(oldValue) - 1;
        newVal <=1 ? newVal = 1 : newVal
  }

  $button.parent().find("input").val(newVal + " шт");

});


///product-descr tabs
$('.product-descr .product-descr__link').click(function(){
		var tab_id = $(this).attr('data-tab');
		// 1
		$('.product-descr .product-descr__link').removeClass('product-descr__link--active');
		$('.product-descr .product-descr__item').removeClass('product-descr__item--active');
		//2 
		$(this).addClass('product-descr__link--active');
		$("#"+tab_id).addClass('product-descr__item--active');
	});
///product-mark tabs
$('.product-mark .product-descr__link').click(function(){
    var tab_id = $(this).attr('data-tab');
    // 1
    $('.product-mark .product-descr__link').removeClass('product-descr__link--active');
    $('.product-mark .product-descr__item').removeClass('product-descr__item--active');
    //2 
    $(this).addClass('product-descr__link--active');
    $("#"+tab_id).addClass('product-descr__item--active');
  })
///IE8 STYLES SHIT.
if (IE='\v'=='v'){ //test for MSIE x.x;
  //home
  $(".inner-menu-item:last-child").css('padding-right', '0');
  //global
  $('.bread-crumbs .bread-crumbs__item:last-child').css({'color':'black','text-decoration':'none','cursor':'default'}).click(function(e) {
    e.preventDefault();
  });
  $('.inner-menu-item').css('font-size', '18px');
  $('.top-header-second').css('border-bottom', '2px solid #727272')

  //catalog-marks page
  $('.catalog-mark .catalog__item').filter(function(i){
      return i%3 === 2 && $(this).css('margin-right', '0');
    });
  //basket page
  $('.basket tbody tr:last-child td').css('border-bottom', '1px solid #d2d2d2');
  $('.basket tbody tr td:last-child').css('border-right', '1px solid #d2d2d2');
  //ie placeholder plugin
  $('.news-full__spark-type .spark-type').filter(function(i){
      return i%3 === 2 && $(this).css('margin-right', '0');
    });
  $('.delivery__item').last().css('margin-bottom', '0');
  //menu
  $('.top-lk').css('margin-left', '-15');
  //details
  $('.product-order__amount-wrap').css('margin-right', '20');
  $('label input').css('display', 'inline-block');
  $('span.selection-button').css('display', 'none');
  $('span.checkbox-button').css('display', 'none');
  $('.product-order__compare span').css('margin-right', '5px')
};
  $('input, textarea').placeholder();

});
