const { Link } = require("react-router-dom");
const { clx } = require("shared/configs");

const BtnSecondary = ({ label, onClick, className, link }) => {
  return (
    <>
      {link ? (
        <button onClick={onClick} className={clx("btnSecondary", className)}>
          <Link
            to={link}
            className="flex items-center justify-center w-full h-full"
          >
            {label}
          </Link>
        </button>
      ) : (
        <button onClick={onClick} className={clx("btnSecondary", className)}>
          {label}
        </button>
      )}
    </>
  );
};
export default BtnSecondary;
