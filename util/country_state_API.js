import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export async function getNigerianStateData() {
  const response = await axios.get(
    "https://api.countrystatecity.in/v1/countries/NG/states",
    {
      headers: {
        "X-CSCAPI-KEY": API_KEY,
      },
    }
  );
  return response.data;
};