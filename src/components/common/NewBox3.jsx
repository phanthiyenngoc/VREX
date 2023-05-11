import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

NewBox3.propTypes = {
  newsList1: PropTypes.array.isRequired,
};

function NewBox3(props) {
  const { newsList1 } = props;
  console.log("newslist", newsList1);
  return (
    <div>
      <article>
        <div>
          <img src={newsList1.avatarUrl} alt="" />
        </div>
        <div>
          <div>
            <h1>hhhh</h1>
            <a href="">{newsList1.name}</a>
            <span>{newsList1.creationTime}</span>
          </div>
          <p>{newsList1.name}</p>
          <p></p>
        </div>
      </article>

      <div
        css={css`
          width: 811px;
          height: 1px;
          margin: 24px 0;
          background: #dddfe1;
        `}
      ></div>
    </div>
  );
}

export default NewBox3;
