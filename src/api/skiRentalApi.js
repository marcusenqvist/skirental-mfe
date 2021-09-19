import { skiTypes } from "../data/types";

export const sendGetSkis = (height, age, type) => {
    var options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          height: height,
          ageCategory: age,
          isFreestyle: type === skiTypes.CLASSIC ? false : true,
        })
    };

    return fetch('https://localhost:5001/SkiRental/getSkis', options)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      else {
        throw new Error();
      }
    })
    .catch(_ => {
      return {status: "FORBIDDEN"};
  });
};












// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }
