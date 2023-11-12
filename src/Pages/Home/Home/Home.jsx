import Banner from "../../../components/Home/Banner/Banner";
import Category from "../../../components/Home/Category/Category";
import ChefService from "../../../components/Home/ChefService/ChefService";
import Featured from "../../../components/Home/Featured/Featured";
import PopularMenu from "../../../components/Home/PopularMenu/PopularMenu";
import Testimonials from "../../../components/Home/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
