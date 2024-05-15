//Масив об'єктів з адресами користувачів

var incorrectJson = `[
  {
      userName:"Test",
      lastName:"Test",
      <email:"test.test@gmail.com>"
  },
  {
      userName:"Dmitro",
      lastName:"Porohov",
      <email:"dmitro.porohov@yahoo.com>"
  },
  {
      userName:"Andrii",
      lastName:"",
      <email:"andrii@mail.ru>" 
  }
]`;

function fixIncorrectJson(incorrectJson) {    //Функція, щоб виправити некоректну назву властивості 
  return incorrectJson.replace(/<(\w+)/g, "$1");
}

function addQuotesToKeys(jsonString) {    //Функція для додавання лапок у властивість
  const regex = /(\w+):/g;
  return jsonString.replace(regex, '"$1":');
}

function getValidEmails(usersData) {    //Функція для порівняння наявних імейлів та регулярного виразу (для валідації імейлів)
  const emailValidationPattern = /^[a-zA-Z\d]+.{0,1}[a-zA-Z\d]+\@(gmail|yahoo)\.com$/ms;
  let validEmails = [];

  for (const userData of usersData) {   //Цикл для перебору наявних даних
    let email = userData.email.endsWith(">")
      ? userData.email.substring(0, userData.email.length - 1)    //Тернарний вираз, щоб прибрати зайвий символ в кінці імейлу (якщо треба)
      : userData.email;

    if (email.match(emailValidationPattern)) {    //Додавання імейлу до масиву валідних імейлів, якщо імейл відповідає паттерну
      validEmails.push(email);
    }
  }

  return validEmails;
}

const fixedJson = fixIncorrectJson(incorrectJson);
const modifiedJson = addQuotesToKeys(fixedJson);
const parsedJson = JSON.parse(modifiedJson);
const validEmails = getValidEmails(parsedJson);

console.log("Valid emails:", validEmails);