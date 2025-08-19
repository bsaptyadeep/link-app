
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

    public async createProfilePage(page: ProfilePageCreate, profileImageFile: File | null): Promise<any> {
        try {
            const formData = new FormData();

            // 1. Prepare the JSON data for the 'profilePage' part
            const pageData = {
                ...page,
                links: page.links.map(({ label, url }) => ({ label, url })),
                socials: page.socials.map(({ platform, url }) => ({ platform, url })),
                profileImageFileName: profileImageFile?.name || null
            };

            // Append the JSON data as a Blob with the correct content type
            const profilePageBlob = new Blob([JSON.stringify(pageData)], { type: 'application/json' });
            formData.append("profilePage", profilePageBlob);

            // 2. Append the image file if it exists
            if (profileImageFile) {
                formData.append("profileImageFile", profileImageFile);
            }

            // 3. Send the multipart/form-data request
            const res = await this.client.post<ProfilePage>("/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return res.data;
        } catch (err: any) {
            this.handleError(err, `Failed to create Profile Page: ${page}`);
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

    public async updateProfilePage(profilePage: Partial<ProfilePage>, profileImageFile: File | null): Promise<ProfilePage> {
        try {
            const formData = new FormData();

            // 1. Prepare the JSON data for the 'profilePage' part
            const pageData = {
                ...profilePage,
                links: profilePage?.links?.map(({ label, url }) => ({ label, url })),
                socials: profilePage?.socials?.map(({ platform, url }) => ({ platform, url })),
                profileImageFileName: profileImageFile?.name || null
            };

            // Append the JSON data as a Blob with the correct content type
            const profilePageBlob = new Blob([JSON.stringify(pageData)], { type: 'application/json' });
            formData.append("profilePage", profilePageBlob);

            // 2. Append the image file if it exists
            if (profileImageFile) {
                formData.append("profileImageFile", profileImageFile);
            }

            // 3. Send the multipart/form-data request
            const res = await this.client.put<ProfilePage>("/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return res.data;
        } catch (err: any) {
            this.handleError(err, `Failed to update Profile Page with ID ${profilePage?.pageId}`);
        }
    }

    public async uploadProfileImage(file: File): Promise<string> {
        try {
            const formData = new FormData();
            formData.append("profilePicture", file);
            const res = await this.client.post<string>(`/profile-pic/`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            return res.data;
        } catch (err: any) {
            this.handleError(err, `Failed to upload profile image`);
        }
    }

    private handleError(error: any, message: string): never {
        if (axios.isAxiosError(error)) {
            throw new Error(`${message}: ${error.response?.data?.detail || error.message}`);
        }
        throw new Error(`${message}: ${error}`);
    }
}