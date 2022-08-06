const baseUrl = "http://localhost:3026";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}${fileName}`;
};
