// http là giống như fetch nhưng hiện tại là dùng axios để thay thế cho fetch
import http from "../utils/http";

export function getNewsDetail(newsId) {
  //tin tuc/id
  return http({
    url: `/api/services/app/Post/GetDetailDto?id=${newsId}`,
    method: "get",
    postId: newsId,
  });
}

export function getUIRecentPost(newsId) {
  //tin moi
  return http({
    url: `/api/services/app/Post/GetUIRecentPost?id=${newsId}`,
    method: "get",
    params: {
      postId: newsId,
      rowsPerPage: 5,
      postType: 0,
    },
  });
}

export function getAllPostCategory() {
  //danh muc
  return http({
    url: `/api/services/app/PostCategory/GetAllPostCategory`,
    method: "get",
  });
}

export function getUIRelatedPostList(newsId) {
  //tcác tin lien quan
  return http({
    url: `/api/services/app/Post/GetUIRelatedPostList?id=${newsId}`,
    method: "get",
    params: {
      postId: newsId,
      rowsPerPage: 3,
      postType: 0,
    },
  });
}

export function getPostTags() {
  //chủ đề dc quan tam
  return http({
    url: `/api/services/app/HostSettings/GetPostTags`,
    method: "get",
  });
}

export function getUIPostCategoryList() {
  //tin tuc- tin thi truong
  return http({
    url: `/api/services/app/PostCategory/GetUIPostCategoryList`,
    method: "get",
    params: {
      postType: 0,
      take: 7,
    },
  });
}

export function getUIPostViewMore() {
  //tin xem nhiu nhat
  return http({
    url: `/api/services/app/Post/GetUIPostViewMore`,
    method: "get",
    params: {
      take: 5,
    },
  });
}

export function getUIPostList(newsCategoryId) {
  //tin thị trường news-category
  return http({
    url: `api/services/app/Post/GetUIPostList?id=${newsCategoryId}`,
    method: "get",
    params: {
      take: 5,
      postId: newsCategoryId,
      rowsPerPage: 10,
      postCategoryId: 2,
    },
  });
}
