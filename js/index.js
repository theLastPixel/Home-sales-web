$(document).ready(function()
{
    $(document).scroll(function()
    {
        var height = $(window).height();
        var scrollTop = $(this).scrollTop();
        var pixeles = scrollTop / 80;

        if(scrollTop < height)
        {
            $("div.background").css(
            {
                "-webkit-filter": "blur(" + pixeles + "px)",
                "background-position": "center -" + pixeles * 15 + "px"
            });
        }

    });
});