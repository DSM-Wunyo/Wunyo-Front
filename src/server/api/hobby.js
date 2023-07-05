import { getRequest } from "./default";

export const fetchHobbyRank = async () => {
  try {
    const request = getRequest();
    const response = await request.get("/hobby/ranking");
    return response;
  } catch (error) {
    console.log(error);
  }
};
