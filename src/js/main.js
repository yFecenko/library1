import $ from './lib/lib';

$('button').on('click', function () {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function () {
    console.log($(this).index());
});

console.log($('div').eq(2).find('.more'));

// console.log($('button').html('Hello'));