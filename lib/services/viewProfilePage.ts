import axios, { AxiosInstance } from "axios";
import { Page, PageBase, PageCreate, ProfilePage } from "../../types/page";
import { BASE_URL } from "@/constants/templates";
import { v4 as uuidv4 } from 'uuid';

const path = "/profile-page";

class ViewProfilePageService {
    private static instance: ViewProfilePageService;
    private client: AxiosInstance;

    private constructor() {
        this.client = axios.create({
            baseURL: `${BASE_URL}${path}`,
            // timeout: 10000,
            headers: { "Content-Type": "application/json" },
        });
    }

    public static getInstance(): ViewProfilePageService {
        if (!ViewProfilePageService.instance) {
            ViewProfilePageService.instance = new ViewProfilePageService();
        }
        return ViewProfilePageService.instance;
    }

    public async getProfilePageByHandle(handle: string): Promise<ProfilePage> {
        try {
            const res = await this.client.get<ProfilePage>(`/${handle}/`);
            res.data.links?.forEach((link) => {
                link.id = uuidv4();
            })
            res.data.socials?.forEach((social) => {
                social.id = uuidv4();
            })
            return res.data;
        } catch (err: any) {
            this.handleError(err, `Failed to fetch the Pages`);
        }
    }

    private handleError(error: any, message: string): never {
        if (axios.isAxiosError(error)) {
            throw new Error(`${message}: ${error.response?.data?.detail || error.message}`);
        }
        throw new Error(`${message}: ${error}`);
    }
}

export default ViewProfilePageService;
