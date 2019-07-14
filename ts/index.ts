var page = 0

window.onload = function(){
    $('#next-control-container').click(() => {
        $('#page' + (page-1)).addClass('page-hidden')
        $('#page' + page).addClass('page-standby')
        page++;
        $('#page' + page).addClass('page-flipped')
        $('#page' + (page+1)).addClass('page-standby')
        $('#page' + (page+1)).removeClass('page-hidden')
    })
}