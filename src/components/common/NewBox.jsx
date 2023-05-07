import React from "react";
import PropTypes from "prop-types";
import getImageUrl from "../../utils/getImage";
import { css } from "@emotion/react";
import { formatDatetime } from "../../utils/format";

NewBox.propTypes = {
  news: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

function NewBox(props) {
  const { news, width, height } = props;
  return (
    <div
      css={css`
        position: relative;
        overflow: hidden;
      `}
    >
      <img
        css={css`
          width: ${width}px;
          height: ${height}px;
          border-radius: 8px;
        `}
        src={getImageUrl(news.avatarUrl, width)}
        alt=""
      />
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 114px;
          left: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, #141414 100%);
        `}
      ></div>
      <div
        css={css`
          position: absolute;
          bottom: 32px;
          left: 32px;
          z-index: 99;
        `}
      >
        <p
          css={css`
            color: white;
          `}
        >
          {news.name}
        </p>
        <span
          css={css`
            color: white;
          `}
        >
          {formatDatetime(news.issueDate)}
        </span>
      </div>
    </div>
  );
}

export default NewBox;
