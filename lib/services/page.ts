import axios, { AxiosInstance } from "axios";
import { Page, PageBase, PageCreate } from "../../types/page";
import { BASE_URL } from "@/constants/templates";
import { v4 as uuidv4 } from 'uuid';
import qs from 'qs'; 

const path = "/api/page";

class PageService {
    private static instance: PageService;
    private client: AxiosInstance;

    private constructor() {
        this.client = axios.create({
            baseURL: `${BASE_URL}${path}`,
            withCredentials: true,
            timeout: 10000,
            headers: { "Content-Type": "application/json" },
        });
    }

    public static getInstance(): PageService {
        if (!PageService.instance) {
            PageService.instance = new PageService();
        }
        return PageService.instance;
    }

    public async createPage(page: PageCreate): Promise<Page> {
        try {
            const links = page.links.map(({label, url}) => ({label, url})); // removed id from label to create in server
            const res = await this.client.post<Page>("/", {...page, links});
            return res.data;
        } catch (err: any) {
            this.handleError(err, `Failed to create Page: ${page}`);
        }
    }

    public async getPages(pageIds?: number[]): Promise<Page[]> {
        try {
            const res = await this.client.get<Page[]>("/", {
                params: pageIds && pageIds.length > 0 ? { pageIds } : undefined,
                paramsSerializer: {
                    serialize: (params) => qs.stringify(params, { indices: false })
                }
            });

            res.data.forEach((page) => {
                page.links.forEach((link) => {
                    link.id = uuidv4();
                });
            });
            return res.data;
        } catch (err: any) {
            this.handleError(err, `Failed to fetch the Pages`);
        }
    }

    public async deletePage(pageId: string): Promise<any> {
        try {
            const res = await this.client.delete(`/${pageId}/`);
            return res.data;
        } catch (err: any) {
            this.handleError(err, `Failed to delete the page, with pageId: ${pageId}`);
        }
    }

    public async updatePage(pageId: number, page: Partial<Page>): Promise<Page> {
        try {
            const links = page?.links?.map(({label, url}) => ({label, url}));
            const res = await this.client.put<Page>(`/${pageId}/`, {...page, links});
            return res.data;
        } catch (err: any) {
            this.handleError(err, `Failed to update Page with ID ${pageId}`);
        }
    }


    private handleError(error: any, message: string): never {
        if (axios.isAxiosError(error)) {
            throw new Error(`${message}: ${error.response?.data?.detail || error.message}`);
        }
        throw new Error(`${message}: ${error}`);
    }
}

export default PageService;
