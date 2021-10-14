var quotes = [
    '"Somewhere, something incredible is waiting to be known." - Carl Sagan',
    '"Be yourself; everyone else is already taken." ― Oscar Wilde',
    '"Live as if you were to die tomorrow. Learn as if you were to live forever." ― Mahatma Gandhi',
    '"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten." ― Neil Gaiman',
    '"Hello World"',
    '"Oh yes, the past can hurt. But you can either run from it, or learn from it." – Rafiki',
    '"You are who you choose to be. You choose. Choose." - Hogarth Hughes',
    '"Always walk through life as if you have something new to learn, and you will." - Vernon Howard',
    '"The secret of getting ahead is getting started." – Mark Twain',
    '"If people are doubting how far you can go, go so far that you can’t hear them anymore." – Michele Ruiz',
    '"If opportunity doesn’t knock, build a door." – Kurt Cobain',
    '"Don’t say you don’t have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo Da Vinci, Thomas Jefferson, and Albert Einstein." – H. Jackson Brown Jr.',
    '"You will give the people an ideal to strive towards. They will race behind you, they will stumble, they will fall. But in time, they will join you in the sun. In time you will help them accomplish wonders." -Jor-El',
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}

// $('.button').on('click', function(){

//     $.ajax({
//         method: 'getQuote',
//         url: 'https://type.fit/api/quotes',
//         data: {limit: 5},
//         dataType: "json",
//         success: function(data) {
//             console.log(data)
//         const quotesArray = data

//         let listHtml = ''
//         console.log(quotesArray)
//         console.log(listHtml)
//         }
//     }
// )

// for loop

        // for (var i = 0; i < 5 && i < response.data; i++) {

        // var items = response[i].data.items
    // console.log(items)

//         for (const quote of quotesArray) {
//             listHtml += `<div id='inspire-quotes'>${key}</div>`
//         }
//         console.log(quotesArray)

//         $('#inspire-quotes').html( listHtml)
//         console.log(listHtml)
// })