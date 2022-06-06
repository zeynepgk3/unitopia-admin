var remove = function() {
    var girilen = $('#girilen').val();
    $('#gosterilen').text(girilen);
    $('#girilen').hide();
    $('#gosterilen').show();
    var markup = $('.click2edit').summernote('code');
    $('.click2edit').summernote('destroy');

    removeData();
};