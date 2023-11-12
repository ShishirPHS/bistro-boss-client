import Banner from "../../../components/Home/Banner/Banner";
import Category from "../../../components/Home/Category/Category";
import ChefService from "../../../components/Home/ChefService/ChefService";
import PopularMenu from "../../../components/Home/PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
