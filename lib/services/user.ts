import axios, { AxiosInstance } from "axios";
import { Template } from "../../types/template";
import { BASE_URL } from "@/constants/templates";
import { CreateUser, LoginUser, User } from "@/types/User";

const path = "/api/user";

class UserService {
  private static instance: UserService;
  private client: AxiosInstance;

  private constructor() {
    this.client = axios.create({
      baseURL: `${BASE_URL}${path}`,
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });
  }

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public async registerUser(payload: CreateUser): Promise<any> {
    try {
        const res = await this.client.post("/register", payload);
        return res.data;
    } catch (err: any) {
        this.handleError(err, `Failed to register User`);
    }
  }

  public async getUser(): Promise<User>{
    try {
      const res = await this.client.get<User>("/");
      return res.data;
    } catch (err: any) {
      this.handleError(err, "Failed to fetch user details");
    }
  }

  public async loginUser(payload: LoginUser): Promise<any> {
    try {
        const res = await this.client.post("/login", payload);
        return res.data;
    } catch (err: any) {
        this.handleError(err, `Failed to login User`);
    }
  }

  private handleError(error: any, message: string): never {
    if (axios.isAxiosError(error)) {
      throw new Error(`${message}: ${error.response?.data?.detail || error.message}`);
    }
    throw new Error(`${message}: ${error}`);
  }
}

export default UserService;
