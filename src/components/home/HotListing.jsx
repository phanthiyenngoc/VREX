import PropTypes from "prop-types";
import ListingBox from "../common/ListingBox";
import ContainerContent from "../common/ContainerContent";
import { css } from "@emotion/react";

const HotListing = (props) => {
  const { listListing } = props;
  return (
    <ContainerContent>
      <>
        <h2>Các sản phẩm mua bán nổi bật</h2>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
          `}
        >
          {listListing.map((item) => (
            <ListingBox item={item} key={item.id} />
          ))}
        </div>
      </>
    </ContainerContent>
  );
};

HotListing.propTypes = {
  listListing: PropTypes.array.isRequired,
};

export default HotListing;
