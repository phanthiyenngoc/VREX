import PropTypes from "prop-types";
import { css } from "@emotion/react";
import ContainerContent from "../common/ContainerContent";
import icon from "../../assets/Image/TopProject/icon.svg";
import ProjectBox from "../common/ProjectBox";

function TopProject(props) {
  const { projects } = props;

  return (
    <div>
      <ContainerContent>
        <section>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <div
              css={css`
                display: flex;
                gap: 12px;
              `}
            >
              <img src={icon} alt="" />
              <h5>Các dự án nổi bật</h5>
            </div>
            <span>Xem tất cả</span>
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 20px;
            `}
          >
            {projects.map((item) => (
              <ProjectBox key={item.id} itemData={item} />
            ))}
          </div>
        </section>
      </ContainerContent>
    </div>
  );
}

TopProject.propTypes = {
  projects: PropTypes.array.isRequired,
};

TopProject.defaultProps = {
  projects: [],
};

export default TopProject;
