import { axiosHttpRequest } from "../libs/api";

export const apiGetHomeProduct = async () => {
    try {
      const responseData = await axiosHttpRequest({
        endpoint: `/products?populate=*&pagination[limit]=4`,
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

  export const apiGetSelectedHomeProduct = async (type: string) => {
    try {
      const responseData = await axiosHttpRequest({
        endpoint: `/products?filters[type][$eq]=${type}&populate=*&pagination[limit]=4`,
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
  