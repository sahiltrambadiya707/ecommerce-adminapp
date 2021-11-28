const baseUrl =
  "http://localhost:3026 " || "https://ecommercerestserver.herokuapp.com";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
