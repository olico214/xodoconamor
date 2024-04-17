import Filter from "./component/filter/filter";
import Footer from "./component/footer/footer";
import Hero from "./component/herobanner/herbanner";

export default function Home() {
  return (
    <div>
      <Hero/> 
      <Filter/>    
      <Footer/>
    </div>
  );
}
