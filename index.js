import getData from './app.js';

(async function () {
  const user = await getData(8);
  if (user) {
    console.log(user);
  }
}) ();