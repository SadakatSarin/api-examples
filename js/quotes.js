const loadQuote = () => {

    fetch('https://api.kanye.rest/')
        .then(res=>res.json())
    .then(data=>displauQuote(data))


}

const displauQuote = quote => {

    const blockquote = document.getElementById('quote');

    blockquote.innerHTML = quote.quote;

}

loadQuote();

