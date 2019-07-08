import { AxiosDefault } from "@/plugins/axios";
import { Doc } from "./doc.interfaces";

export class DocService {
  static getDocs() {
    return AxiosDefault.get(
      `/v2/repos/${process.env.VUE_APP_YUQUE_REPO_ID}/docs`
    );
  }
  static async searchDocs(q: string): Promise<Doc[]> {
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
}
