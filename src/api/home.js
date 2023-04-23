import http from "../utils/http";

export function getHomeTopData() {
  return http({
    url: `/api/services/app/Home/GetHomeTopData`,
    method: "get",
  });
}

export function getHomeBottomData() {
  return http({
    url: `/api/services/app/Home/GetHomeBottomData`,
    method: "get",
  });
}
