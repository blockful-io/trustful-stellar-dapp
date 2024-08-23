import { parseQueryParams } from "@/lib/utils/parseQueryParams";
import axios from "axios";
import dotenv from "dotenv";
import { IGenericHttpClient } from "./types";
dotenv.config();

class HttpClient implements IGenericHttpClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async post<T, P extends Object, B extends Object>(
    path: string,
    query: P,
    body: B
  ): Promise<T> {
    const fullPath = [this.baseUrl, path, "?", parseQueryParams(query)].join(
      ""
    );
    const response = await axios.post<T>(fullPath, body);
    return response.data;
  }

  async get<T, P extends Object>(path: string, query: P): Promise<T> {
    const fullPath = [this.baseUrl, path, "?", parseQueryParams(query)].join(
      ""
    );
    const response = await axios.get<T>(fullPath);
    return response.data;
  }
}

const httpClient = new HttpClient(process.env.NEXT_PUBLIC_API_URL || "");
export default httpClient;
