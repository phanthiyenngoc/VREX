import PropTypes from "prop-types";
import { css } from "@emotion/react";

const Container = (props) => {
  const { children } = props;
  return (
    <div
      css={css`
        width: 100%;
        max-width: calc(100% - 48px);
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
