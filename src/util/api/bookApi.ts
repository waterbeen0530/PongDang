import axios from "axios";

export const getBookApi = async (title: string) => {
  return await axios
    .request({
      method: "get",
      url: `https://dapi.kakao.com/v3/search/book?target=title&query=${title}`,
      headers: {
        Authorization: `KakaoAK ${"9af4b9e0fc0a3c9890883b196ef2184e"}`,
      },
    })
    .then((res) => {
      console.log(res.data.documents);
      return res.data.documents;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
