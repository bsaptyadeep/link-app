import axios, { AxiosInstance } from "axios";
import { Page, PageBase, PageCreate } from "../../types/page";
import { BASE_URL } from "@/constants/templates";
import { v4 as uuidv4 } from 'uuid';

const path = "/api/page";

class ViewPageService {
    private static instance: ViewPageService;
    private client: AxiosInstance;

    private constructor() {
        this.client = axios.create({
            baseURL: `${BASE_URL}${path}`,
            timeout: 10000,
            headers: { "Content-Type": "application/json" },
        });
    }

    public static getInstance(): ViewPageService {
        if (!ViewPageService.instance) {
            ViewPageService.instance = new ViewPageService();
        }
        return ViewPageService.instance;
    }

    public async getPageByUserNameAndPageName(userName: string, pageName: string): Promise<Page> {
        try {
            const res = await this.client.get<Page>(`/${userName}/${pageName}/`);
            res.data.links.forEach((link) => {
                link.id = uuidv4();
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

export default ViewPageService;
