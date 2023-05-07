import PropTypes from "prop-types";
import ListingBox from "../common/ListingBox";
import ContainerContent from "../common/ContainerContent";
import { css } from "@emotion/react";

const NewListing = (props) => {
  const { listListing } = props;
  return (
    <ContainerContent>
      <>
        <h2>Sản phẩm mới</h2>
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

NewListing.propTypes = {
  listListing: PropTypes.array.isRequired,
};

export default NewListing;
