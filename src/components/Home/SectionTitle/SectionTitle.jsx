import PropTypes from "prop-types";

const SectionTitle = ({ header, subHeader }) => {
  return (
    <div>
      <h6 className="text-center text-xl font-Inter text-[#D99904]">
        ---{subHeader}---
      </h6>
      <h3 className="mt-4 border-y-[4px] mx-auto w-[424px] text-center uppercase text-[40px] font-Inter ">
        {header}
      </h3>
    </div>
  );
};

SectionTitle.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
};

export default SectionTitle;
