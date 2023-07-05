import { getRequest } from "./default";

export const WriteUserInformation = async ({ name, sex, birthday }) => {
  try {
    const request = getRequest();
    await request.post("/user", {
      name,
      sex,
      birthday,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
