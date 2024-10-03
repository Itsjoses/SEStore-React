import { axiosHttpRequest } from "../libs/api";


export const apiGetSingleProduct = async (id: number) => {
  try {
    const responseData = await axiosHttpRequest({
      endpoint: `/products/${id}?populate=*`,
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

  export const apiFilteredProducts = async (maxPrice: number,sort: string,subCats: any) => {
    console.log(subCats);
    
    try {
      const responseData = await axiosHttpRequest({
        endpoint: `/products?populate=*${subCats.map((data: any )=> `&[filters][sub_categories][id][$eq]=${data}`)}&[filters][price][$gte]=${maxPrice}${sort !== '' ? `&sort=price:${sort}` : ''}`,
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
  