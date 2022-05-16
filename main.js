'use strict';

let article = document.getElementById('electric-cars');
console.log(article);
console.log(article.dataset.columns);
console.log(article.dataset.indexNumber);
console.log(article.dataset.parent);

const table = document.getElementsByClassName('sorting--table');
console.log(table);

for (let t of table) {
  console.log(t);
  const tBody = table[1];
  console.log(tBody);
}
