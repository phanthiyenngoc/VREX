import PropTypes from "prop-types";
import { css } from "@emotion/react";

ContainerContent.propTypes = {
  children: PropTypes.element,
};

function ContainerContent(props) {
  const { children } = props;
  return (
    <div
      css={css`
        width: 100%;
        max-width: 1180px;
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  );
}

export default ContainerContent;
