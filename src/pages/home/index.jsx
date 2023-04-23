import { useEffect, useState } from "react";
import { getHomeTopData } from "../../api/home.js";
import TopBanner from "../../components/home/TopBanner.jsx";
// import getImageUrl from "../../utils/getImage.js";

const HomePage = () => {
  const [homeData, setHomeData] = useState({});

  const callHomeAPI = async () => {
    try {
      const result = await getHomeTopData();
      console.log("result", result.data.result);
      setHomeData(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callHomeAPI();
  }, []);

  return <>{homeData.banners && <TopBanner homeTopBanners={homeData.banners.homeTopBanners} />}</>;
};

export default HomePage;
