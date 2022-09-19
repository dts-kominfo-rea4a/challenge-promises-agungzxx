const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (test) => {
  let counter = 0;

  return promiseTheaterIXX()
    .then(
      (resolve) => (counter += resolve.filter((m) => m.hasil === test).length)
    )
    .then(() => promiseTheaterVGC())
    .then(
      (resolve) => (counter += resolve.filter((m) => m.hasil === test).length)
    )
    .then(() => counter)
    .catch((err) => err.response);
};

module.exports = {
  promiseOutput,
};
