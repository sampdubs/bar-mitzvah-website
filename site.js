$(".tab").hide();
$('#home-tab').show();

function tabOpen(tabId) {
    $('#' + tabId + '-button').click(function() {
        $('.tab').hide();
        $('#' + tabId + '-tab').show();
    });
}

const tabs = $('.tab').map(function() {
    const id = this.id;
    return id.substring(0, id.length - '-tab'.length);
}).get();


for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    tabOpen(tab);
}

$('#guest-div').hide();
$('#yes-button').click(function() {
    $('#guest-number').attr('min', '1');
    $('#guest-number').val('1');
    $('#guest-div').show();
    $('#guest-number').addClass('manditory');
});
$('#no-button').click(function() {
    $('#guest-number').attr('min', '0');
    $('#guest-number').val('0');
    $('#guest-div').hide();
});

$('#partiers-div').hide();
$('#p-yes-button').click(function() {
    $('#partiers-number').attr('min', '1');
    $('#partiers-number').val('1');
    $('#partiers-div').show();
    $('#partiers-number').addClass('manditory');
});
$('#p-no-button').click(function() {
    $('#partiers-number').attr('min', '0');
    $('#partiers-number').val('0');
    $('#partiers-div').hide();
});

/*$('#guest-div').hover(
    () => $(this).css('width', '100%'),
    () => $(this).css('width', '30em'));

$('#partiers-div').hover(
    () => $(this).css('width', '100%'),
    () => $(this).css('width', '30em'));*/
