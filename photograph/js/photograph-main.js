jQuery(function(){var e,n,o,i,a,t,u;jQuery(".header-search").click(function(){jQuery("#search-box").addClass("show-search-box")}),jQuery(".search-x").click(function(){jQuery("#search-box").removeClass("show-search-box")}),jQuery(window).scroll(function(){100<jQuery(this).scrollTop()?jQuery(".header-social-block").addClass("scrolled-social"):jQuery(".header-social-block").removeClass("scrolled-social")}),jQuery(function(){jQuery(".scroll-down").click(function(){return jQuery("html, body").animate({scrollTop:jQuery(".site-content-contain").offset().top-jQuery(".main-header").height()},900,"swing"),!1})}),o=jQuery(".main-navigation"),i=jQuery("body"),o&&(e=o.find(".menu-toggle"))&&((n=o.find(".menu"))&&n.children().length?jQuery(".menu-toggle").on("click",function(){jQuery(this).toggleClass("on"),o.toggleClass("toggled-on"),i.toggleClass("no-tog")}):e.hide()),(u=jQuery(".top-bar-menu"))&&(a=u.find(".top-menu-toggle"))&&((t=u.find(".top-menu"))&&t.children().length?jQuery(".top-menu-toggle").on("click",function(){jQuery(this).toggleClass("on"),u.toggleClass("toggled-on")}):a.hide()),jQuery(function(){jQuery(window).width()<981&&(jQuery("#site-navigation .menu-item-has-children, #site-navigation .page_item_has_children").prepend('<button class="sub-menu-toggle"> <i class="fa fa-plus"></i> </button>'),jQuery(".main-navigation .menu-item-has-children ul, .main-navigation .page_item_has_children ul").hide(),jQuery(".main-navigation .menu-item-has-children > .sub-menu-toggle, .main-navigation .page_item_has_children > .sub-menu-toggle").on("click",function(){jQuery(this).parent(".main-navigation .menu-item-has-children, .main-navigation .page_item_has_children").children("ul").first().slideToggle(),jQuery(this).children(".fa-plus").first().toggleClass("fa-minus")}))}),jQuery(document).ready(function(){jQuery(".show-menu-toggle, .hide-menu-toggle, .page-overlay").click(function(){jQuery(".side-menu").fadeToggle("slow"),jQuery(".side-menu").addClass("show"),jQuery(".page-overlay").toggleClass("side-menu-open"),jQuery("#page").addClass("side-content-open")}),jQuery(".hide-menu-toggle, .page-overlay").click(function(){jQuery(".side-menu").removeClass("show"),jQuery(".page-overlay").removeClass("side-menu-open"),jQuery("#page").removeClass("side-content-open")})}),jQuery(document).ready(function(){jQuery(".go-to-top").hide(),jQuery(window).scroll(function(){900<jQuery(window).scrollTop()?jQuery(".go-to-top").fadeIn():jQuery(".go-to-top").fadeOut()}),jQuery(".go-to-top").click(function(){return jQuery("html,header,body").animate({scrollTop:0},700),!1})})});