import { AxiosDefault } from "@/plugins/axios";
import { DocListItem, SearchDocItem, DocDetail } from "./doc.interfaces";

export class DocService {
  static async getDocs(): Promise<DocListItem[]> {
    const { data } = await AxiosDefault.get(
      `/v2/repos/${process.env.VUE_APP_YUQUE_REPO_ID}/docs`
    );
    return data.data;
  }
  static async searchDocs(q: string): Promise<SearchDocItem[]> {
    const { data } = await AxiosDefault.get("/zsearch", {
      params: {
        p: 1,
        q,
        scope: `${process.env.VUE_APP_YUQUE_USER_ID}/${process.env.VUE_APP_YUQUE_REPO_SLUG}`,
        type: "doc"
      }
    });
    return data.data.hits;
  }
  static async getDocDetail(id: string): Promise<DocDetail> {
    const { data } = await AxiosDefault.get(
      `/v2/repos/${process.env.VUE_APP_YUQUE_REPO_ID}/docs/${id}`
    );
    return data.data;
  }
}
