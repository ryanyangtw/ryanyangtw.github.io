// JavaScript Document
(function ($){
    $.fn.MainDataInIt = function () {
        $.Body.DefineIndexOf();
        $.Body.EventInIt();
    }
    $.fn.DefineIndexOf = function () {
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (elt /*, from*/) {
                var len = this.length >>> 0;

                var from = Number(arguments[1]) || 0;
                from = (from < 0)
                     ? Math.ceil(from)
                     : Math.floor(from);
                if (from < 0)
                    from += len;

                for (; from < len; from++) {
                    if (from in this &&
                        this[from] === elt)
                        return from;
                }
                return -1;
            };
        }
    }
    $.fn.EventInIt = function () {
        $.nav_bg = $.Body.find('div.nav_bg');
        $.move_item = $.Body.find('.move_item');
        $.sec = $.Body.find('div.sec');
        $.member_array = [];
        $.member_num = $.Body.find('div.member_in').length;
        $.sec_array = [];
        var temp_degree = 0;
        var click_and_animate = false;
        for(var i = 0; i < $.member_num; i ++) {
            $.member_array.push($.Body.find('div.member_in').eq(i));
        }
        for(var i = 0; i < $.sec.length; i ++) {
            $.sec_array.push($.sec.eq(i));
        }
        $.member_array
        var scroll_value = 0,
            w_h = 0,
            w_h_min = 300,
            w_w = 0,
            hash_array = ['home','about','service','team','works','contact'];
        $.Window.resize(resizing).trigger('resize');
        function resizing () {
            w_h = $.Window.height();
            w_w = $.Window.width();
            w_h_min = Math.max(650,w_h);
            $.sec_array[0].css({'height': Math.max(w_h,400)+'px'});
            if(w_w/w_h > 1920/1080){
                $.video_box.css({'width': w_w+'px','height': w_w*(1080/1920)+'px','margin': -0.5*w_w*(1080/1920)+'px 0px 0px '+(-0.5*w_w)+'px'});
            } else {
                $.video_box.css({'width': w_h*(1920/1080)+'px','height': w_h+'px','margin': -0.5*w_h+'px 0px 0px '+(-0.5*w_h*(1920/1080))+'px'});
            }
        }
        $.Window.scroll(scrolling).trigger('scroll');
        function scrolling () {
            scroll_value = $.Window.scrollTop();
            switch(true){
                case scroll_value >= 200 && !$.nav_bg.hasClass('darken') :
                    $.nav_bg.addClass("darken");
                break;
                case scroll_value < 200 && $.nav_bg.hasClass('darken') :
                    $.nav_bg.removeClass("darken");
                break;
            }
            //$.nav_bg.css({'opacity': Math.min(scroll_value/500,1)});
            $.move_item.each(
                function () {
                    switch (true){
                        case scroll_value > $(this).offset().top+$(this).height(): 
                            //console.log($(this).parent().attr('class')+" is out");
                        break;
                        case scroll_value+w_h >= $(this).offset().top:
                            //console.log($(this).parent().attr('class')+" is in");
                            switch(true){
                                case $(this).hasClass('run_top'):
                                    //$(this).stop().animate({'top': 300*(1-(($(this).offset().top+$(this).height()-scroll_value)/$(this).height()))+'px'},800);
                                    $(this).css({'top': Math.max(300*(1-(($(this).offset().top+$(this).height()-scroll_value)/$(this).height())),0)+'px'});
                                break;
                                case $(this).hasClass('run_opacity'):
                                    $(this).css({'opacity': Math.min((scroll_value-($(this).offset().top-w_h_min))/(0.5*w_h),1)});
                                    /*if(Math.min((scroll_value-($(this).offset().top-w_h_min))/(0.5*w_h),1) >= 0.8 && !$(this).parent().hasClass('show_main')) {
                                        $(this).parent().addClass('show_main');
                                    } else if(Math.min((scroll_value-($(this).offset().top-w_h_min))/(0.5*w_h),1) < 0.8 && $(this).parent().hasClass('show_main')) {
                                        $(this).parent().removeClass('show_main');
                                    }*/
                                break;
                                case $(this).hasClass('run_opacity_rotate'):
                                    $(this).css({'opacity': Math.min((scroll_value-($(this).offset().top-w_h_min))/(0.5*w_h),1)});
                                    $(this).ComCss({'transform':'rotateZ('+360*Math.min((scroll_value-($(this).offset().top-w_h_min))/(0.5*w_h),1)+'deg)'});
                                break;
                                case $(this).hasClass('run_aftershow'):                                
                                    if(Math.min((scroll_value-($(this).offset().top-w_h_min))/(0.5*w_h),1) >= 0.8 && !$(this).parent().hasClass('show_main')) {
                                        $(this).parent().addClass('show_main');
                                    } else if(Math.min((scroll_value-($(this).offset().top-w_h_min))/(0.5*w_h),1) < 0.8 && $(this).parent().hasClass('show_main')) {
                                        $(this).parent().removeClass('show_main');
                                    }
                                break;
                                case $(this).hasClass('run_member'):
                                /*
                                    temp_degree = Math.min((scroll_value-($(this).offset().top-w_h))/(0.5*w_h),1); 
                                    if(temp_degree >= 1/$.member_num && !$.member_array[1].hasClass('member_in_show')) {
                                        for(var i = 0; i < $.member_num; i ++) {
                                            $.member_array[i].addClass('member_in_show');  
                                        }
                                    }
                                    if(temp_degree >= (1)/$.member_num && temp_degree < (1+1)/$.member_num && $.member_array[1].hasClass('member_in_show')){
                                        for(var i = 0; i < $.member_num; i ++) {
                                            $.member_array[i].removeClass('member_in_show');  
                                        }
                                    }
                                    */
                                    /*temp_degree = Math.min((scroll_value-($(this).offset().top-w_h))/(0.5*w_h),1);
                                    for(var i = 0; i < $.member_num; i ++) {
                                        if(temp_degree >= i/$.member_num && !$.member_array[i].hasClass('member_in_show')) {
                                            $.member_array[i].addClass('member_in_show');  
                                        }
                                        if(temp_degree >= (i)/$.member_num && temp_degree < (i+1)/$.member_num && $.member_array[i].hasClass('member_in_show')){
                                            $.member_array[i].removeClass('member_in_show');  
                                            if(i == 0) {
                                                $.Body.find('div.member_in').removeClass('member_in_show'); 
                                            }
                                        }
                                    }*/
                                break;
                            }
                        break;
                    }
                }
            );
            var scrollCurNum = 0; 
            //console.log(scroll_value);
            for(var i = 0; i< $.sec.length; i ++){
                if((Math.abs($.sec.eq(i).offset().top-scroll_value) < $.Window.height()/4)){
                    scrollCurNum = i;
                }
                if(i < $.sec.length-1){
                    //console.log((i+1).toString()+':'+(Math.abs($.sec.eq(i+1).offset().top-scroll_value) < 3*$.Window.height()/4));
                    if((Math.abs($.sec.eq(i+1).offset().top-scroll_value) < $.Window.height())){
                        scrollCurNum = i;
                    }
                }
                //console.log(i.toString()+':'+(Math.abs($.sec.eq(i).offset().top-scroll_value) < $.Window.height()/4));
            }
            if(!click_and_animate){
                window.location.hash = hash_array[scrollCurNum]; 
            }
        }
        var cur_index = 0;
        $.scroll_obj = $({"ani":0});
        $.Window.bind('hashchange',hashchanging).trigger('hashchange');
        function hashchanging () {
            cur_index = hash_array.indexOf(window.location.hash.substring(1));
            if(cur_index !== -1){
                $.Body.find('div.nav_line').removeClass('nav_line_show').eq(cur_index).addClass('nav_line_show');
                if(click_and_animate){
                    if(!!navigator.userAgent.match(/Trident.*rv[ :]*11\./)){
                        $.scroll_obj.stop().animate(
                            {
                                "ani": $.Body.find('div.sec_'+cur_index).offset().top-20
                            },
                            {
                                step:function(now,fx){
                                    $.Window.scrollTop(now);
                                },
                                duration:900,
                                easing:"easeInOutCirc",
                                complete:function(){
                                    click_and_animate = false;
                                }
                            }
                        );
                    } else {
                        $.Body.animate({scrollTop: $.Body.find('div.sec_'+cur_index).offset().top-20},900,"easeInOutCirc",function(){click_and_animate = false;});
                    }
                }
            }
        }
        $.Body.find('div.nav_item a,#tip').click(
            function(){
                click_and_animate = true;
            }
        );
        var s = setInterval(
            function(){
                //console.log(click_and_animate);
            },
            5000
        );
        $.Body.find('div.light_box_bg,div.close_bg,div.close_btn').click(
            function(){
               $.Body.find('div.light_box').fadeOut(200);
            }
        );
        $.light_box_content = $.Body.find('.light_box_content');
        $.Body.find('a.light_box_btn').click(
            function(){
                $.Body.find('div.light_box');
                $.light_box_content.hide();
                $.Body.find('.'+$(this).find('div.work_item_pic img').attr('src').split('images/index/')[1].split('.')[0]+'_').css({'display':'inline-block'});
                $.Body.find('div.light_box').fadeIn(200);
            }
        );
    }
    $.fn.ComCss = function (property) {
        var _self = $(this);
            _self['propObj'] = {};
        for(x in property){ 
            _self.propObj['-webkit-'+x] = property[x];
            _self.propObj['-moz-'+x] = property[x];
            _self.propObj['-ms-'+x] = property[x];
            _self.propObj[x] = property[x];
        }
        _self.css(_self.propObj);
        /*for(x in _self.propObj){ 
            delete _self.propObj[x];
        }*/
        delete _self.propObj;
        property = null;
        _self = null;      
    }
})(jQuery);
	
$(function(){
	$.Body =$('body');	
	$.Window = $(window);
    $.Wrapper = $.Body.find('div.wrapper');
    $.Loading = $.Body.find('div.loading');
    $.video_box = $.Body.find('.video_box');
    $.Window.load(function(){
        $.Loading.fadeOut(200);
        $.Body.MainDataInIt();
    });	
});


