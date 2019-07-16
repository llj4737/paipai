import myAxios from "./index";
import axios from "axios";
import qs from "qs";

export const upload = (data) => (
    axios.post("http://localhost:8080/goods/upload", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(res => (res.data))
)

export const to_publish = (data) => (
    myAxios.request({
        url: "/goods/publish",
        method: "post",
        data
    })
)

export const load_goods = (data) => (
    myAxios.request({
        url: "/goods/category_goods",
        method: "get",
        params: data
    })
)

export const goods_detail = (gId) => (
    myAxios.request({
        url: "/goods/goodsdetail",
        method: "get",
        params: {gId}
    })
)
