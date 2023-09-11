let favNum = 7;
let baseURL = "http://numbersapi.com";

// 1. 
$.getJSON(`${baseURL}/${favNum}?json`).then(data => {
    console.log(data);
});

// 2.
let favNums = [8, 16, 24];
$.getJSON(`${baseURL}/${favNums}?json`).then(data => {
    console.log(data);
});

// 3. 
Promise.all(
    Array.from({ length: 4}, () => {
        return $.getJSON(`${baseURL}/${favNum}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});