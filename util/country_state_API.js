import axios from "axios";

export async function getCountryState() {
  const response = await axios.get(
    "https://api.countrystatecity.in/v1/countries/IN/states",
    { headers: {
        "X-CSCAPI-KEY": "eW5qMkRRcTlJc1lmNW5ITktIdTEzWExhQVQ4bllhZXZSREVyYTN6Ng=="
    } }
  );
  return response;
}
