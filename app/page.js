import Filter from "./component/filter/filter";
import Hero from "./component/herobanner/herbanner";
import MyPage from "./component/productos/page";


export default function Home() {
  return (
    <div>
      <Hero/> 
      <Filter/>    
    </div>
  );
}
