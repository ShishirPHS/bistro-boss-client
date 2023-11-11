import chefServiceImg from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div
      style={{ backgroundImage: `url(${chefServiceImg})` }}
      className="mb-24 px-28 py-[120px]"
    >
      <div className="container mx-auto bg-white text-black py-24">
        <h3 className="font-Cinzel text-[#151515] text-[45px] text-center">
          Bistro Boss
        </h3>
        <p className="w-[762px] mx-auto font-Inter text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
