function getQuote() {
    var xhr = new XMLHttpRequest();
    var quoteArea = document.getElementById('quote-display');
    var quoteAuthorArea = document.getElementById('quote-author');

    xhr.open('GET', 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10', true);
    xhr.setRequestHeader('X-Mashape-Key', 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V');
    xhr.onload = function () {
        if (xhr.status == 200) {
            var parsed = JSON.parse(this.responseText);
            // console.log(parsed);
            quoteArea.innerHTML = parsed.quote;
            quoteAuthorArea.innerHTML = parsed.author;

        } else if (this.status == 403) {
            quoteArea.innerHTML = "There was a problem..";
        }
    };
    xhr.send();
}

function changeBackground() {
    var main = document.getElementById('main');
    main.style.backgroundColor = getRandomColor();
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('get-quote').addEventListener('click', getQuote);
document.getElementById('get-quote').addEventListener('click', changeBackground);