$(document).ready(function () {
    $('.tab').not('#tab_1').hide();
    $('.link__container').on('click', function () {
        $('.link__container').removeClass('link__container_active').eq($(this).index()).addClass('link__container_active');
        $('.tab__text').removeClass('tab__text_active').eq($(this).index()).addClass('tab__text_active');
        $('.tab').hide().eq($(this).index()).fadeIn()
    })
})
