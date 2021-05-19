$(document).ready(function() {
    var logoTop = false
    var cloude = false
    var btns = false

    $('.wrapper').on('mousewheel', function(e) {

        if (e.deltaY < 0) {
            $('.logo-wrap').addClass('logo-wrap--active')
            setTimeout(() => {
                logoTop = true
            }, 800)
        } else if (e.deltaY > 0 && !cloude && !btns) {
            $('.logo-wrap').removeClass('logo-wrap--active')
            logoTop = false
        }

        if (e.deltaY < 0 && logoTop) {
            $('.block-wrap').addClass('block-wrap--active')
            setTimeout(() => {
                cloude = true
                $('.text').addClass('text--active')
            }, 800)
        } else if (e.deltaY > 0 && logoTop && !btns) {
            $('.text').removeClass('text--active')
            setTimeout(() => {
                $('.block-wrap').removeClass('block-wrap--active')
                cloude = false
            }, 800)
        }

        if (e.deltaY < 0 && logoTop && cloude) {
            $('.btns').addClass('btns--active')
            setTimeout(() => {
                btns = true
                $('.btn-text').addClass('btn-text--active')
            }, 800)
        } else if (e.deltaY > 0 && logoTop && cloude) {
            $('.btn-text').removeClass('btn-text--active')
            setTimeout(() => {
                $('.btns').removeClass('btns--active')
                btns = false
            }, 800)
        }
       
    });
})