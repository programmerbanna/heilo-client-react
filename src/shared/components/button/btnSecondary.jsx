const { Link } = require("react-router-dom");
const { clx } = require("shared/configs");

const BtnSecondary = ({ label, onClick, className, link }) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <button onClick={onClick} className={clx("btnSecondary", className)}>
            {label}
          </button>
        </Link>
      ) : (
        <button onClick={onClick} className={clx("btnSecondary", className)}>
          {label}
        </button>
      )}
    </>
  );
};
export default BtnSecondary;
