"use strict";var menu_bars=$(".menu-phone__bars #menu-bars"),dropdown_menu=$("#dropdown-menu"),arrow_scroll=$("#scroll");function showMenu(){dropdown_menu.removeClass("hide-dropdown").addClass("show-dropdown"),menu_bars.removeClass("fa-bars").addClass("fa-times")}function hideMenu(){dropdown_menu.removeClass("show-dropdown").addClass("hide-dropdown"),menu_bars.removeClass("fa-times").addClass("fa-bars")}dropdown_menu.addClass("hide-dropdown").removeClass("show-dropdown"),menu_bars.click((function(){menu_bars.hasClass("fa-bars")?(showMenu(),arrow_scroll.fadeOut(600),$("html, body").css({overflow:"hidden",height:"100%"})):menu_bars.hasClass("fa-times")&&(hideMenu(),arrow_scroll.fadeIn(1e3),$("html, body").css({overflow:"visible",height:"auto"}))})),$(document).scroll((function(){0!==$(document).scrollTop()?arrow_scroll.fadeIn("slow"):arrow_scroll.fadeOut("slow")})),arrow_scroll.click((function(){$("html, body").animate({scrollTop:0},900)}));