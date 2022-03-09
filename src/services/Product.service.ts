import httpRequest from "./http.services";

class ProductService {
  async getAllProducts(): Promise<any[]> {
    const { data } = await httpRequest.get("/product");
    return data;
  }
}

export default new ProductService();
