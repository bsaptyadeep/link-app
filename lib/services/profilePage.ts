
import axios, { AxiosInstance } from "axios";
import { Page, PageBase, PageCreate, ProfilePage, ProfilePageCreate } from "../../types/page";
import { BASE_URL } from "@/constants/templates";
import { v4 as uuidv4 } from 'uuid';
import qs from 'qs';

const path = "/profile-page";
export class ProfilePageService {
    private static instance: ProfilePageService;
    private client: AxiosInstance;

    private constructor() {
        this.client = axios.create({
            baseURL: `${BASE_URL}${path}`,
            withCredentials: true,
            // timeout: 10000,
            headers: { "Content-Type": "application/json" },
        });
    }

    public static getInstance(): ProfilePageService {
        if (!ProfilePageService.instance) {
            ProfilePageService.instance = new ProfilePageService();
        }
        return ProfilePageService.instance;
    }

    public async createProfilePage(page: ProfilePageCreate): Promise<Page> {
        try {
            const links = page.links.map(({ label, url }) => ({ label, url })); // removed id from label to create in server
            const socials = page.socials.map(({ platform, url }) => ({ platform, url }));
            const res = await this.client.post<Page>("/", { ...page, links, socials });
            return res.data;
        } catch (err: any) {
            this.handleError(err, `Failed to create Page: ${page}`);
        }
    }

    public async getProfilePage(): Promise<ProfilePage | null> {
        try {
            const res = await this.client.get<ProfilePage | null>("/");
            res.data?.links?.forEach((link) => {
                link.id = uuidv4();
            });
            res.data?.socials?.forEach((social) => {
                social.id = uuidv4();
            });
            return res.data;
        } catch (err: any) {
            this.handleError(err, `Failed to fetch the Pages`);
        }
    }

    public async updateProfilePage(profilePage: Partial<ProfilePage>): Promise<ProfilePage> {
        try {
            const links = profilePage?.links?.map(({label, url}) => ({label, url}));
            const socials = profilePage?.socials?.map(({platform, url}) => ({platform, url}));
            const res = await this.client.put<ProfilePage>(`/`, {...profilePage, links, socials});
            return res.data;
        } catch (err: any) {
            this.handleError(err, `Failed to update Page with ID ${profilePage?.pageId}`);
        }
    }

    private handleError(error: any, message: string): never {
        if (axios.isAxiosError(error)) {
            throw new Error(`${message}: ${error.response?.data?.detail || error.message}`);
        }
        throw new Error(`${message}: ${error}`);
    }
}