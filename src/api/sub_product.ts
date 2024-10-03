import { axiosHttpRequest } from "../libs/api";

export const apiGetSubCategory = async () => {
    try {
      const responseData = await axiosHttpRequest({
        endpoint: `/sub-categories`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      return responseData.data;
    } catch (error) {
      throw error;
    }
  };