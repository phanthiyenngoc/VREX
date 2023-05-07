import { useEffect, useState } from "react";
// File chứa api cần gọi
import { getHomeTopData, getHomeBottomData } from "../../api/home.js";

import TopBanner from "../../components/home/TopBanner";
import TopProject from "../../components/home/TopProject";
// import TopProduct from "../../components/home/TopProduct.jsx";
import HotListing from "../../components/home/HotListing.jsx";
import RentListing from "../../components/home/RentListing.jsx";
import TransferToListing from "../../components/home/TransferToListing.jsx";
import NewListing from "../../components/home/NewListing.jsx";
import HotNews from "../../components/home/HotNews.jsx";
import MiddleBanner from "../../components/home/MiddleBanner.jsx";
import MiddleBanner2 from "../../components/home/MiddleBanner2.jsx";

const HomePage = () => {
  const [homePageData, setHomePageData] = useState({});

  const callHomeAPI = async () => {
    try {
      //cách 1
      // Promise.all([getHomeTopData(), getHomeBottomData()]).then((resp) => {
      //   const [result1, result2] = resp;
      //   setHomeData({
      //     ...result1.data.result, // spread operator
      //     ...result2.data.result, // spread operator
      //   });
      // });

      //Cách 2
      const [result1, result2] = await Promise.all([getHomeTopData(), getHomeBottomData()]);

      const result = {
        ...result1.data.result, // spread operator
        ...result2.data.result, // spread operator
      };

      setHomePageData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callHomeAPI();
  }, []);

  console.log("homeData", homePageData);

  return (
    <>
      {homePageData.banners && <TopBanner homeTopBanners={homePageData.banners.homeTopBanners} />}
      {homePageData.projects && <TopProject projects={homePageData.projects} />}
      {/* {homeData.listings && <TopProduct listings={homeData.listings} />} */}
      {homePageData.banners && <MiddleBanner homeMiddle1Banner={homePageData.banners.homeMiddle1Banner} />}

      {homePageData.listings && homePageData.listings.length >= 1 && <HotListing listListing={homePageData.listings[0].items} />}
      {homePageData.listings && homePageData.listings.length >= 2 && <RentListing listListing={homePageData.listings[1].items} />}
      {homePageData.banners && homePageData.banners.homeMiddle2Banners.length > 0 && <MiddleBanner2 homeMiddleBanner2={homePageData.banners.homeMiddle2Banners} />}
      {homePageData.listings && homePageData.listings.length >= 3 && <TransferToListing listListing={homePageData.listings[2].items} />}
      {homePageData.listings && homePageData.listings.length >= 4 && <NewListing listListing={homePageData.listings[3].items} />}
      {homePageData.news && <HotNews news={homePageData.news.items} />}
    </>
  );
};

export default HomePage;
