import { getRequest } from "./default";

export const fetchResultList = async ({ name, sex, birthday }) => {
  try {
    const request = getRequest();
    const response = await request.get("/result/list", { name, sex, birthday });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchResultDetail = async ({ resultId }) => {
  try {
    const request = getRequest();
    const response = await request.get("/result/one", {
      "result-id": resultId,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchHobbyRank = async () => {
  try {
    const request = getRequest();
    const response = await request.get("/result/ranking");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const saveResult = async ({
  name,
  sex,
  birthday,
  active_score,
  solo_score,
}) => {
  try {
    const request = getRequest();
    await request.post("/result", {
      name,
      sex,
      birthday,
      active_score,
      solo_score,
    });
  } catch (error) {
    console.log(error);
  }
};
