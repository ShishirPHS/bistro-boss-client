import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${featuredImg})` }}
      className="bg-fixed"
    >
      <div className="mt-[50px] mb-32 py-32 bg-[#151515b3]">
        <div className="section-title">
          <SectionTitle
            subHeader={"Check it Out"}
            header={"From Our Menu"}
          ></SectionTitle>
        </div>
        <div className="mt-12 flex gap-6 items-center justify-center">
          <div>
            <img className="h-[350px]" src={featuredImg} alt="" />
          </div>
          <div className="ml-11 max-w-[604px] text-white">
            <h6 className="font-Inter text-2xl">March 20, 2023</h6>
            <h5 className="font-Inter text-2xl">WHERE CAN I GET SOME?</h5>
            <p className="text-xl font-Inter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-6 text-white border-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
