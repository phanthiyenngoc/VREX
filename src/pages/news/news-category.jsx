import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ContainerContent from "../../components/common/ContainerContent";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import RightCategory from "../../components/common/RightCategory";
import RightTopic from "../../components/common/RightTopic";
import RightNewsBox from "../../components/common/RightNewsBox";
import { useEffect, useState } from "react";
import {
  getUIPostCategoryList,
  getUIPostViewMore,
  getAllPostCategory,
  getPostTags,
} from "../../api/news";
import { css } from "@emotion/react";
import icon from "../../assets/Image/newBox/Group 13110.svg";
import { Typography } from "@mui/material";
import NewBox3 from "../../components/common/NewBox3";

NewsCategory.propTypes = {
  newsList: PropTypes.array,
};

function NewsCategory() {
  let { newsCategoryId } = useParams();
  const [data, setData] = useState({});
  const callAPI = async () => {
    try {
      const [newsList, viewMore, postCategory, postTags] = await Promise.all([
        getUIPostCategoryList(),
        // getUIPostList(),
        getUIPostViewMore(),
        getAllPostCategory(),
        getPostTags(),
      ]);

      const result = {
        newsList: newsList.data.result, // Danh sách tin tức
        // postList: postList.data.result, //tin thị trường news-category
        viewMore: viewMore.data.result, // Tin xem nhiều
        postCategory: postCategory.data.result, //Danh mục
        postTags: postTags.data.result, //Chủ đề được quan tâm
      };
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div
      css={css`
        padding: 48px 8px;
      `}
    >
      <ContainerContent>
        <Box>
          <Grid container spacing={6}>
            <Grid item xs={8}>
              <div>
                <div
                  css={css`
                    display: flex;
                    gap: 12px;
                  `}
                >
                  <img src={icon} alt="" />
                  <Typography
                    variant="h3"
                    component={"h3"}
                    css={css`
                      font-size: 28px;
                    `}
                  >
                    Tin Thị trường
                  </Typography>
                </div>
                {/* {data && data.posts && data.posts.length >= 1 && (
                  <NewBox3 newsList1={data.posts[0]} />
                )} */}
                {data &&
                  data.posts &&
                  data.posts.map((item, index) => (
                    <div key={index}>
                      <NewBox3 key1={item.id} newsList1={item.posts} />
                    </div>
                  ))}
              </div>
            </Grid>
            <Grid item xs={4}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
                css={css`
                  margin-bottom: 24px;
                  padding: 6px 0;
                  box-shadow: none;
                  background: #f6f6f6;
                  min-width: 380px;
                  height: 35px;
                `}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Nhập từ khóa bạn cần tìm"
                  inputProps={{ "aria-label": "Nhập từ khóa bạn cần tìm" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon color="secondary" />
                </IconButton>
              </Paper>
              <RightCategory postCategory={data && data.postCategory} />
              <RightTopic postTags={data && data.postTags} />
              <RightNewsBox
                newsList={data && data.viewMore}
                title={"Tin xem nhiều nhất"}
              />
            </Grid>
          </Grid>
        </Box>
      </ContainerContent>
    </div>
  );
}

export default NewsCategory;
