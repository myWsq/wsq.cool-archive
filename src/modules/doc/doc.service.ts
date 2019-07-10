import { AxiosDefault } from "@/plugins/axios";
import {
  DocListItem,
  SearchDocItem,
  DocDetail,
  DocPager
} from "./doc.interfaces";

export class DocService {
  static async getDocs(): Promise<DocListItem[]> {
    const { data } = await AxiosDefault.get(
      `/api/v2/repos/${process.env.VUE_APP_YUQUE_REPO_ID}/docs`
    );
    return data.data;
  }
  /**
   * search document
   * @param q search string
   */
  static async searchDocs(q: string): Promise<SearchDocItem[]> {
    const { data } = await AxiosDefault.get("/api/zsearch", {
      params: {
        p: 1,
        q,
        scope: `${process.env.VUE_APP_YUQUE_USER_ID}/${process.env.VUE_APP_YUQUE_REPO_SLUG}`,
        type: "doc"
      }
    });
    return data.data.hits;
  }
  /**
   * get document detail
   * @param id doc id or slug
   */
  static async getDocDetail(id: string | number): Promise<DocDetail> {
    const { data } = await AxiosDefault.get(
      `/api/v2/repos/${process.env.VUE_APP_YUQUE_REPO_ID}/docs/${id}`
    );
    return data.data;
  }
  static async getPager(id: number | string): Promise<DocPager> {
    let docId = id;
    // slug
    if (typeof id === "string") {
      const docDetail = await this.getDocDetail(id);
      docId = docDetail.id;
    }
    const { data } = await AxiosDefault.get(`/api/docs/${docId}/pager`);
    return data.data;
  }
}
