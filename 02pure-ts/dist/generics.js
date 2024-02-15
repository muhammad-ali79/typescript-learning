"use strict";
// GENERICS allows the function ,class to accept arguments of any type and return the same type
function giveNames(name, phone) {
    return [name, phone];
}
const person = giveNames("ali", "hassan");
const users = giveNames({ name: "ali", phon: 34 }, { name: "hassan", phon: 34 });
console.log(users);
function getSearchResults(produts) {
    return produts;
}
const getSearchResultsArrow = (products) => {
    return products[1];
};
function getPagination(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
getPagination("string", {
    connection: "",
    username: "",
    password: "",
});
