const getTheTitles = function(books) {

    let arrTitles = [];
    books.forEach(element => {
        arrTitles.push(element.title);
    });

    return arrTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
