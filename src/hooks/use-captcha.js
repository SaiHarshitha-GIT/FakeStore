import React from "react";
function useCatpcha() {
  let data = ``;
  data = `${Math.floor(Math.random() * 10)} ${Math.floor(
    Math.random() * 10
  )} ${Math.floor(Math.random() * 10)} ${Math.floor(Math.random() * 10)}`;
  return data;
}

export default useCatpcha;
