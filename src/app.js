import getData from "./lib/service.js";

(async function () {
  const userData = await getData(8);
  if (userData) {
    console.log(userData);
  }
}) ();
