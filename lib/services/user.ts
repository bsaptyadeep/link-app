import axios, { AxiosInstance } from "axios";
import { Template } from "../../types/template";
import { BASE_URL } from "@/constants/templates";
import { CreateUser, LoginUser, User } from "@/types/User";

const path = "/user";

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
        this.handleError(err, `Registration failed`);
    }
  }

  public async getUser(): Promise<User>{
    try {
      const res = await this.client.get<User>("/");
      return res.data;
    } catch (err: any) {
      this.handleError(err, `Fetch User failed`);
    }
  }

  public async loginUser(payload: LoginUser): Promise<any> {
    try {
        await this.client.post("/login", payload);
        return;
    } catch (err: any) {
        this.handleError(err, `Login Failed`);
    }
  }

  public async checkProfileNameAvailable(profileName: string): Promise<boolean> {
    try {
      const res = await this.client.get<{ isAvailable: boolean }>(`/profile/check/${profileName}/`);
      return res.data.isAvailable;
    } catch (err: any) {
      this.handleError(err, `profileName ${profileName} check failed`);
    }
  }

  private handleError(error: any, message: string): never {
    if (axios.isAxiosError(error)) {
      if(error.response?.status === 409) {
        throw new Error(`${error.response?.data?.message || error.message}`);
      }
      console.log(error);
      throw new Error(`${message}: ${error.response?.data?.message || error.message}`);
    }
    throw new Error(`${message}: ${error}`);
  }
}

export default UserService;
