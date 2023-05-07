import Container from "../../components/common/Container";
import CommonButton from "../../components/common/CommonButton";
import logo from "../../assets/Image/Header/logo.png";
import arrow_down from "../../assets/Image/Header/arrow-down.png";
import { Typography, useTheme } from "@mui/material";
import icon from "../../assets/Image/Header/Group 13256.png";

// import Highlight from "../../assets/Image/Header/Highlight.svg";
// import { SvgIcon } from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  // const navigate = useNavigate();
  // const goToHome = () => {
  //   navigate("/tin-tuc");
  // };

  const theme = useTheme();

  return (
    <header>
      <Container>
        <nav
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
          `}
        >
          {/* <div onClick={() => goToHome()}>
            <img src={logo} alt="logo" />
          </div> */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul
            css={css`
              display: flex;
            `}
          >
            <li
              css={css`
                list-style-type: none;
                padding: 8px;
              `}
            >
              <Typography
                variant="subtitle2"
                href="#"
                component="a"
                css={css`
                  text-decoration: none;
                  color: #1f1f1f;
                  padding-right: 8px;
                  &:hover {
                    text-shadow: 1px 0 0 currentColor;
                    font-weight: bold;
                  }
                `}
              >
                Mua bán
              </Typography>
              <img src={arrow_down} alt="" />
            </li>
            <li
              css={css`
                list-style-type: none;
                padding: 8px;
              `}
            >
              <Typography
                vairiant="subtitle2"
                component="a"
                href="!#"
                css={css`
                  text-decoration: none;
                  color: #1f1f1f;
                  padding-right: 8px;
                  &:hover {
                    text-shadow: 1px 0 0 currentColor;
                    font-weight: bold;
                  }
                `}
              >
                Cho thuê
              </Typography>

              <img src={arrow_down} alt="" />
            </li>
            <li
              css={css`
                list-style-type: none;
                padding: 8px;
              `}
            >
              <Typography
                vairiant="subtitle2"
                component="a"
                href="!#"
                css={css`
                  text-decoration: none;
                  color: #1f1f1f;
                  padding-right: 8px;
                  &:hover {
                    text-shadow: 1px 0 0 currentColor;
                    font-weight: bold;
                  }
                `}
              >
                Sang nhượng
              </Typography>

              <img src={arrow_down} alt="" />
            </li>
            <li
              css={css`
                list-style-type: none;
                padding: 8px;
              `}
            >
              <Typography
                vairiant="subtitle2"
                component="a"
                href="!#"
                css={css`
                  text-decoration: none;
                  color: #1f1f1f;
                  padding-right: 8px;
                  &:hover {
                    text-shadow: 1px 0 0 currentColor;
                    font-weight: bold;
                  }
                `}
              >
                Dự án
              </Typography>

              <img src={arrow_down} alt="" />
            </li>
            <li
              css={css`
                list-style-type: none;
                padding: 8px;
              `}
            >
              <Link to="/tin-tuc">
                <Typography
                  vairiant="subtitle2"
                  component="a"
                  css={css`
                    text-decoration: none;
                    color: #1f1f1f;
                    padding-right: 16px;
                    &:hover {
                      text-shadow: 1px 0 0 currentColor;
                    }
                  `}
                >
                  Thông tin
                </Typography>

                <img src={arrow_down} alt="" />
              </Link>
            </li>
            <li
              css={css`
                list-style: none;
                padding: 0 16px;
                &::before {
                  display: inline-block;
                  content: "";
                  width: 1px;
                  height: 16px;
                  background: #c4c4c4;
                  position: relative;
                  top: -10px;
                  left: -12px;
                }
              `}
            >
              <img src={icon} alt="" />
            </li>
            <li
              css={css`
                list-style-type: none;
                display: flex;
                align-items: center;
              `}
            >
              <CommonButton
                startIcon={<BorderColorOutlinedIcon />}
                variant={"outlined"}
                css={css`
                  text-align: center;
                  color: ${theme.palette.primary.main};
                  padding: 9px 12px;
                  display: flex;
                  align-items: center;
                  font-size: 16px;
                  text-transform: unset;
                  line-height: 16px;
                  border-radius: 8px;
                `}
              >
                Đăng tin
              </CommonButton>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default AppHeader;
