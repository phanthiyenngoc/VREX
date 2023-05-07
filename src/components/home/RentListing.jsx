import PropTypes from "prop-types";
import ListingBox from "../common/ListingBox";
import ContainerContent from "../common/ContainerContent";
import { css } from "@emotion/react";

const RentListing = (props) => {
  const { listListing } = props;
  return (
    <ContainerContent>
      <>
        <h2>Các sản phẩm cho thuê nổi bật</h2>
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

RentListing.propTypes = {
  listListing: PropTypes.array.isRequired,
};

export default RentListing;
