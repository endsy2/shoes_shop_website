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
          <aside className="hidden lg:block">
            <Category />
          </aside>
          <section className="flex flex-col">
            <section className="max-lg:flex hidden pl-14">
              <Category />
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-14 gap-16">
              {productCart.map((element, index) => (
                <ShoesCard shoesData={element} key={index} />
              ))}
            </section>
          </section>

        </div>
      </main>


    </body>
  );
};

export default Home;
