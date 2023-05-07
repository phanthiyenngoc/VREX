import PropTypes from "prop-types";
import getImageUrl from "../../utils/getImage";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

ListingBox.propTypes = {
  item: PropTypes.object,
};

function ListingBox(props) {
  const { item } = props;
  return (
    <Link to={`/listing/${item.id}`}>
      <div
        css={css`
          max-width: 280px;
        `}
      >
        <img
          css={css`
            width: 100%;
            height: 157px;
            object-fit: cover;
            border-radius: 8px;
          `}
          src={getImageUrl(item.avatarUrl, 280)}
          alt=""
        />
        <div>
          <span>{item.price}</span>
          <p>{item.name}</p>
          <span></span>
          <div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListingBox;
