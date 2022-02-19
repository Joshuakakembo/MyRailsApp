// import axios from "axios";
// const api = axios.create({
//   baseURL: "https://new.registry.co.ug/api/v2",
// });
// const api_key = process.env.REACT_APP_API_KEY;
// console.log(api_key);
// export const checkGetDomainAvailability = () =>
//   api.get("/domains/check-availability", apiToken());

// export const apiToken = () => {
//   const config = {
//     headers: {
//       "Content-type": "application/json",
//     },
//   };

//   if (api_key) {
//     config.headers.Authorization = `Bearer ${api_key}`;
//   }
//   try {
//     if (api_key) {
//       api.interceptors.request.use((config) => {
//         config.headers.Authorization = `Bearer ${api_key}`;
//       });
//     }
//   } catch (error) {
//     console.log(`Error ${error.message}`);
//   }
//   return config;
// };

// export const register_Domain = (values) =>
//   api.post("/domains/register", values, apiToken(api_key));

export const apiToken = (api_key) => {
  // Get api_key from state

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // if api_key, add to headers in config
  if (api_key) {
    console.log(api_key);
    config.headers["authorization"] = `Bearer ${api_key}`;
  }
  return config;
};
