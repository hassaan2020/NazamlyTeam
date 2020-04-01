function myFunction(x) {
if (x.matches) {
$('.slider_team').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $('.rght'),
      prevArrow: $('.lft'),
    });

}else{
$('.slider_team').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      nextArrow: $('.rght'),
      prevArrow: $('.lft'),
      
    });
}
}
    var x = window.matchMedia("(max-width: 600px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

$(".our_team .slider_team .feat_slidr").height($(".our_team .slider_team .feat_slidr").width());

function new_share()
{
    var whatsapp_content = document.getElementsByClassName("inp").value;
    if(whatsapp_content!=='')
    {
       whatsapp_link = 'via Editor  ';

      var url = "https://api.whatsapp.com/send?phone=+201140351221?text="+ whatsapp_content + whatsapp_link;
      document.getElementById('whatsapp_link').setAttribute("href",url);
     }
} 























