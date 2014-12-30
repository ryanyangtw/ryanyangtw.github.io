// JavaScript Document
(function ($){
    $.fn.MainDataInIt = function () {
        $.Body.EventInIt();
    }
    $.fn.EventInIt = function () {
    }
})(jQuery);
	
$(function(){
	$.Body =$('body');	
	$.Window = $(window);
    $.Wrapper = $.Body.find('div.wrapper');
    $.Loading = $.Body.find('div.loading');
    $.Window.load(function(){
        $.Loading.fadeOut(200);
        $.Body.MainDataInIt();
    });	
});


