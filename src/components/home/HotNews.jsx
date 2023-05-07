import { css } from "@mui/material";
import PropTypes from "prop-types";
import ContainerContent from "../common/ContainerContent";
import NewBox from "../common/NewBox";

HotNews.propTypes = {
  news: PropTypes.array,
};

function HotNews(props) {
  const { news } = props;
  const arrNews = [...news];
  const firstItem = arrNews.shift();
  return (
    <ContainerContent>
      <>
        <h2>Thông tin nỗi bật</h2>
        <div css={css``}>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              gap: 20px;
              margin-bottom: 109px;
            `}
          >
            <div
              css={css`
                flex: 1;
                height: 440px;
              `}
            >
              <NewBox
                css={css`
                  border-radius: 8px;
                `}
                news={firstItem}
                width={580}
                height={440}
              />
            </div>
            <div
              css={css`
                flex: 1;

                height: 440px;
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
              `}
            >
              {arrNews.map((item) => (
                <div
                  key={item.id}
                  css={css`
                    max-width: 280px;
                    max-height: 210px;
                    border-radius: 8px;
                  `}
                >
                  <NewBox
                    css={css`
                      gap: 20px;
                    `}
                    news={item}
                    width={280}
                    height={210}
                  />
                </div>
              ))}
            </div>
            {/* {news.map((item) => (
              <NewBox news={item} key={item.id} />
            ))} */}
          </div>
        </div>
      </>
    </ContainerContent>
  );
}

export default HotNews;
