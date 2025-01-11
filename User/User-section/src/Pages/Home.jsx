import Category from "../Components/Category";
import ShoesCard from "../Components/ShoesCard";
import Slider from "../Components/Slider.jsx";


import { detailpic, productCart } from "../Constants";

const Home = () => {
  return (
    <body>
      <main className="flex flex-col flex-1 pt-10">
        <Slider images={detailpic} />
        <div className="flex">
          <aside>
            <Category />
          </aside>
          <section className="flex flex-wrap pl-14 gap-16">
            <ShoesCard shoesData={productCart} />
          </section>

        </div>
      </main>


    </body>
  );
};

export default Home;
