
var iphone4 = window.matchMedia( "(min-device-width : 320px) and (max-device-width : 321px)" );
var iphone6 = window.matchMedia( "(min-device-width : 375px) and (max-device-width : 667px)");
var iphone6p = window.matchMedia( "(min-device-width : 414px) and (max-device-width : 736px)");

var galaxy34 = window.matchMedia( "(min-device-width: 320px) and (max-device-height: 640px)");

var laptop = window.matchMedia( "(min-device-width: 768px)");

if (iphone4.matches) {
  $(function(){
    $(".intro-text").typed({ 
      strings: ['<p class="intro-lead-in" style="font-style:normal; font-size:20px">모집합니다 3/2 ~ 3/11</p><br><p class="intro-heading intro-text2" style="font-size:30px; margin-bottom: 25px; font-family:"asmileM";">멋쟁이 사자처럼 <span style="color:#FFD216">4기</span></p><br> <p class="intro-lead-in" style="font-size:20px; margin-bottom:50px;">@서강대학교</p>'],
      typeSpeed: 100,
      contentType: 'html'
    });
  });
} else if(iphone6.matches) {
  $(function(){
    $(".intro-text").typed({ 
      strings: ['<p class="intro-lead-in" style="font-style:normal; font-size:25px">모집합니다 3/2 ~ 3/11</p><br><p class="intro-heading intro-text2" style="font-size:37px; margin-bottom: 25px; font-family:"asmileM";">멋쟁이 사자처럼 <span style="color:#FFD216">4기</span></p><br> <p class="intro-lead-in" style="font-size:25px; margin-bottom:50px;">@서강대학교</p>'],
      typeSpeed: 100,
      contentType: 'html'
    });
  });
} else if(iphone6p.matches) {
  $(function(){
    $(".intro-text").typed({ 
      strings: ['<p class="intro-lead-in" style="font-style:normal; font-size:27px">모집합니다 3/2 ~ 3/11</p><br><p class="intro-heading intro-text2" style="font-size:40px; margin-bottom: 25px; font-family:"asmileM";">멋쟁이 사자처럼 <span style="color:#FFD216">4기</span></p><br> <p class="intro-lead-in" style="font-size:27px; margin-bottom:50px;">@서강대학교</p>'],
      typeSpeed: 100,
      contentType: 'html'
    });
  });
} else if(galaxy34.matches) {
  $(function(){
    $(".intro-text").typed({ 
      strings: ['<p class="intro-lead-in" style="font-style:normal; font-size:25px">모집합니다 3/2 ~ 3/11</p><br><p class="intro-heading intro-text2" style="font-size:35px; margin-bottom: 25px; font-family:"asmileM";">멋쟁이 사자처럼 <span style="color:#FFD216">4기</span></p><br> <p class="intro-lead-in" style="font-size:25px; margin-bottom:50px;">@서강대학교</p>'],
      typeSpeed: 100,
      contentType: 'html'
    });
  });
} else if(laptop.matches) {
  $(function(){
    $(".intro-text").typed({ 
      strings: ['<p class="intro-lead-in" style="font-style:normal;">모집합니다 3/2 ~ 3/11</p><br><p class="intro-heading intro-text2" style="font-size:60px; margin-bottom: 25px; font-family:"asmileM";">멋쟁이 사자처럼 <span style="color:#FFD216">4기</span></p><br> <p class="intro-lead-in" style="margin-bottom:50px;">@서강대학교</p>'],
      typeSpeed: 100,
      contentType: 'html'
    });
  });
}
