import request from "../utils/http";
import request2 from "../utils/http2";

export const getlogin = (params) => request({ url: "/api/v1/login" ,params,method:"post"});
export const getRegister = (params) => request({ url: "/api/v1/register" ,params,method:"post"});
export const getTabList = (params) => request2({ url: "/tabList",params });
export const getNav = (params) => request2({ url: "/nav",params });
export const getShopping = (params) => request2({ url: "/shopping",params });
export const getOtherfunction = (params) => request2({ url: "/Otherfunction",params });
export const getGuessLike = (params) => request2({ url: "/guessLike",params });
export const getSwiper = (params) => request2({ url: "/swiper",params });
export const getSmallSwiper = (params) => request2({ url: "/smallSwiper",params });

