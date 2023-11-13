import PropTypes from "prop-types";

const Cover = ({ img, heading, subHeading }) => {
  return (
    <div
      className="hero pt-[240px] pb-[110px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 container mx-auto"></div>
      <div className="hero-content text-center text-neutral-content py-[145px] container mx-auto">
        <div>
          <h1 className="mb-5 text-[88px] font-Cinzel font-bold">{heading}</h1>
          <p className="font-Cinzel font-semibold text-2xl">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

Cover.propTypes = {
  img: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default Cover;
