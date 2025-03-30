window.addEventListener('load', function () {
    $('.loader').fadeOut();
});

document.addEventListener('DOMContentLoaded', (e) => {
    $('#toWrite').click(function () {
        $('#feedback').modal({
            showClose: false,
        });
    });
});
