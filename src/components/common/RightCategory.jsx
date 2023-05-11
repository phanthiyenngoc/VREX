import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import getImageUrl from "../../utils/getImage";
import { Link } from "react-router-dom";

const RightCategory = (props) => {
  const { postCategory } = props;
  if (!postCategory || postCategory.length == 0) return <></>;

  return (
    <div
      css={css`
        border: 1px solid;
        padding: 1.5rem !important;
        margin-bottom: 1.5rem;
        border-radius: 0.5rem !important;
        --tw-border-opacity: 1 !important;
        border-color: rgba(238, 238, 238);
      `}
    >
      <Typography
        css={css`
          line-height: 1.75rem;
          font-size: 1.25rem;
          font-weight: 600;
          color: rgba(31, 31, 31);
        `}
        varian={"h4"}
        component={"h4"}
      >
        Danh mục
      </Typography>

      {postCategory.map((p, index) => {
        if (p.children.length == 0) {
          return (
            <div key={index}>
              <Link to={`/danh-muc-tin-tuc/${postCategory.newsCategoryId}`}>
                <div>
                  <p
                    css={css`
                      padding: 6px 0;
                      margin-bottom: 4px;
                      &:hover {
                        color: red;
                        cursor: pointer;
                      }
                    `}
                  >
                    {p.name}
                  </p>
                </div>
              </Link>
            </div>
          );
        }

        return (
          <div key={index}>
            <p
              css={css`
                padding: 6px 0;
                margin-bottom: 4px;
                &:hover {
                  color: red;
                  cursor: pointer;
                }
              `}
            >
              {p.name}
            </p>
            {p.children.map((item, itemIndex) => (
              <div
                css={css`
                  display: flex;
                  align-items: center;
                `}
                key={itemIndex}
              >
                <IconButton color="#757575" aria-label="add an alarm">
                  <KeyboardArrowRightOutlinedIcon />
                </IconButton>

                <p
                  key={itemIndex}
                  css={css`
                    padding: 6px 0;

                    &:hover {
                      color: red;
                      cursor: pointer;
                    }
                  `}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

RightCategory.propTypes = {
  postCategory: PropTypes.array,
};

export default RightCategory;
