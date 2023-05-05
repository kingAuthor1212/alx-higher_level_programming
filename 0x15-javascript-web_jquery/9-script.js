$('document').ready(function () {get('https://fourtonfish.com/hellosalut/?lang=f', function (data) {$('DIV#hello').text(data.hello);});});
