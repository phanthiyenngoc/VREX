import PropTypes from "prop-types";
import getImageUrl from "../../utils/getImage.js";

const TopBanner = (props) => {
  console.log("props   ", props.homeTopBanners);
  const { homeTopBanners } = props;

  return (
    <div>
      {homeTopBanners.map((p, index) => (
        <img src={getImageUrl(p.bannerUrl)} key={index} />
      ))}
    </div>
  );
};

TopBanner.propTypes = {
  homeTopBanners: PropTypes.array.isRequired,
};

// TopBanner.defaultProps = {
//   homeTopBanners: [],
// };

export default TopBanner;
