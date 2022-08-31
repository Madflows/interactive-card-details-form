import FormSection from "../components/FormSection";

import mobileBg from "../assets/images/bg-main-mobile.png";
import CardSection from "../components/CardSection";

const Home = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full  min-h-screen">
        <aside className="h-full w-full md:w-[80%] flex items-center justify-center bg-[url('/images/bg-main-mobile.png')] md:bg-[url('/images/bg-main-desktop.png')] bg-cover bg-no-repeat flex-[2] p-3 ">
          <CardSection />
        </aside>
        <main className="h-full flex items-center flex-[4] justify-center p-3">
          <FormSection />
        </main>
      </div>
    </div>
  );
};

export default Home;
