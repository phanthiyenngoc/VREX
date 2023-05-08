import ContainerContent from "../common/ContainerContent";
import { css } from "@emotion/react";
import CommonButton from "../common/CommonButton";
import { Typography } from "@mui/material";

Support.propTypes = {};

function Support() {
  return (
    <>
      hhhhh
      <div>
        <ContainerContent>
          <div>
            <div
              css={css`
                max-width: 580px;
                min-height: 240px;
                background: #440656;
                border-radius: 12px;
              `}
            >
              <Typography CSS={``} variant="h5" component={"h5"}>
                Hỗ trợ bán và cho thuê
              </Typography>
              <Typography variant="Body2" component={"span"}>
                Với chi phí môi giới thấp, công nghệ và chuyên gia của Vrex sẽ tư vấn giá tốt nhất cho bạn
              </Typography>
              <CommonButton>Đăng tin</CommonButton>
            </div>
            <div
              css={css`
                max-width: 580px;
                min-height: 240px;
                background: #440656;
                border-radius: 12px;
              `}
            >
              <Typography CSS={``} variant="h5" component={"h5"}>
                Hỗ trợ mua và tìm thuê
              </Typography>
              <Typography variant="Body2" component={"span"}>
                Thông tin căn hộ được cập nhật liên tục mỗi 5 phút, dịch vụ hoàn toàn miễn phí
              </Typography>
              <CommonButton>Liên hệ</CommonButton>
            </div>
          </div>
        </ContainerContent>
      </div>
      <div>
        <ContainerContent></ContainerContent>
      </div>
    </>
  );
}

export default Support;
