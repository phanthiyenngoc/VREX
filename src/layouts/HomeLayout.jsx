import PropTypes from "prop-types";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

const HomeLayout = (props) => {
  const { children } = props;
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default HomeLayout;
