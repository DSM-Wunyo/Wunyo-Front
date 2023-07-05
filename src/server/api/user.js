import { getRequest } from "./default";

export const WriteUserInformation = async ({ name, sex, birthday }) => {
  try {
    const request = getRequest();
    await request.post("/user/info", {
      name,
      sex,
      birthday,
    });
    return true;
  } catch (error) {
    return false;
  }
};
