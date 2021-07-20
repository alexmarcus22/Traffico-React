import axios from "axios";

export const getData = async () => {
  const response = await axios
    .get("https://run.mocky.io/v3/94b2a659-e369-4da5-a4f6-627c6402868e")
    .then((data) => {
      console.log(data.data.response);
      return data.data.response;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return response;
};
