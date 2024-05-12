//Задаємо тестову строку для нашого регулярного виразу
const testExample = "AtestsymbolsAa11223344aStringA!!@#@$%#^AaaaAaaa&$**$%";
const pattern = /[^Aa]{6,}/g;       //Регулярний вираз щоб знайти підстроки в яких 6 і більше символів
const matches = testExample.match(pattern);   //Знаходимо співпадіння
console.log(matches);