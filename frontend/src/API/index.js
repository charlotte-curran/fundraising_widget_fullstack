import axios from "axios";

export const getEvent = async () => {
  const endpoint = "/event";
  try {
    const res = await axios.get(endpoint);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const postFunds = async funds => {
  const endpoint = "/event";
  try {
    const res = await axios.post(endpoint, { funds: funds });
    return res;
  } catch (error) {
    console.error(error);
  }
};
