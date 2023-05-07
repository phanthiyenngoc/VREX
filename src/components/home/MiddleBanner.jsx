import PropTypes from "prop-types";
import ContainerContent from "../common/ContainerContent";
import getImageUrl from "../../utils/getImage";
import { css } from "@emotion/react";
import CommonButton from "../common/CommonButton";

const MiddleBanner = (props) => {
  const { homeMiddle1Banner } = props;
  return (
    <div
      css={css`
        margin: 60px 0;
      `}
    >
      <ContainerContent>
        <div
          css={css`
            position: relative;
          `}
        >
          <img css={css``} src={getImageUrl(homeMiddle1Banner.bannerUrl, 1180)} alt="" />
          <div
            css={css`
              position: absolute;
              top: 0;
              left: 65px;
            `}
          >
            <h4
              css={css`
                font-family: "Playfair Display";
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 44px;
                /* or 157% */

                color: #ffffff;
                max-width: 317px;
              `}
            >
              Ứng dụng BĐS công nghệ Trong bán hàng
            </h4>
            <div
              css={css`
                display: flex;
                gap: 25px;
              `}
            >
              <CommonButton
                css={css`
                  min-width: 160px;
                  height: 32px;
                  font-family: "SFU Eurostile";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 1.14;
                  color: #440656;
                  background: #ffc600;
                  box-shadow: 0px 2px 0px #f37506;
                  border-radius: 4px;
                  text-transform: none;
                  &:hover {
                    opacity: 0.9;
                    background: #ffc600;
                  }
                `}
              >
                Bán với Vrex
              </CommonButton>
              <CommonButton
                css={css`
                  min-width: 160px;
                  height: 32px;
                  font-family: "SFU Eurostile";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 1.14;
                  color: #440656;
                  background: #ffc600;
                  box-shadow: 0px 2px 0px #f37506;
                  border-radius: 4px;
                  text-transform: none;
                  &:hover {
                    opacity: 0.9;
                    background: #ffc600;
                  }
                `}
              >
                Cho thuê với Vrex
              </CommonButton>
            </div>
          </div>
        </div>
      </ContainerContent>
    </div>
  );
};

MiddleBanner.propTypes = {
  homeMiddle1Banner: PropTypes.object,
};

export default MiddleBanner;
