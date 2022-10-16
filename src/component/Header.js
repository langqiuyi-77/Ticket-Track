import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showStatus }) => {
  //create an event
  // const onClick = () =>{
  //   console.log('Click');
  // }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showStatus ? "red" : "green"}
        text={showStatus ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Ticker Track",
};

Header.propTypes = {
  title: PropTypes.string,
};

// const headingstyle={
//   color:'red',
//   background:'black',
// }

export default Header;
