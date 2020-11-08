var users =[
 user1 = {
    name: "mohamed",
    age: 19,
    adresse: {
        zip: 2060,
        rue: "23 mohamed ali",
        ville: "Tunis"
    },
    lienFb: "/profile/5124577896"
},
 user2 = {
    name: "seif",
    age: 26,
    adresse: {
        zip: 2061,
        rue: "05 tayeb atrous",
        ville: "Tunis"
    },
    lienFb: "/profile/6666677896"
},
 user3 = {
    name: "aziz",
    age: 10,
    adresse: {
        zip: 2072,
        rue: "13 mohamed slimen",
        ville: "Beja"
    },
    lienFb: "/profile/512111117896"
},
 user4 = {
    name: "sara",
    age: 27,
    adresse: {
        zip: 2066,
        rue: "63 belkassem bazmi",
        ville: "Djerba"
    },
    lienFb: "/profile/69994577896"
},
 user5 = {
    name: "zouhour",
    age: 37,
    adresse: {
        zip: 2054,
        rue: "03 hadi nouira",
        ville: "Gafsa"
    },
    lienFb: "/profile/50024577896"
}];

localStorage.setItem('user', JSON.stringify(users));

var usr = JSON.parse(localStorage.getItem('user')) || [];     /*   ou bien hedha || [] ou bien il bloc  if(usr === null) 
{
    usr = [];
} */

console.log(usr);

var fd =users.find((el)=> el.name === "zouhour");
console.log(fd);

var index = usr.findIndex((elemt) => elemt.name === "sara" );
usr[index].name = "salem";
console.log(usr[index].name);

localStorage.setItem('user', JSON.stringify(usr));

var filt = usr.filter((elt) => (elt.age > 18) && (elt.name === "mohamed"));
console.log(filt);

var usrFind = usr.find((elt) => (elt.age > 18) && (elt.name === "mohamed"));
console.log(usrFind);

var tbModifie = usr.map(obj => obj.department = 'it');
console.log(tbModifie);
console.log(usr);






