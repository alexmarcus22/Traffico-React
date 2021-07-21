import axios from "axios";

export const getData = async (key) => {
  const response = await axios
    // .get("https://lxpi9qne2a.api.quickmocker.com/getReactFAQs")
    .get("https://run.mocky.io/v3/94b2a659-e369-4da5-a4f6-627c6402868e")
    .then((data) => {
      return data.data.response;
    })
    .catch((err) => {
      return err;
    });

  return response;
};
