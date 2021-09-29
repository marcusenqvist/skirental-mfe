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
          skiType: type,
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
