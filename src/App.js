import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import PolygonGraphics from "./page/PolygonGraphics"

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <strong><Link to={"/"}>GIS Map Test</Link></strong>
            </li>
            <li><Link to={"/polygonGrapics"}>PolygonGrapics</Link></li>
            <li>awt</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='MapSection'>
          <Routes>
            <Route exact path="/" element={<div>GISMap 테스트입니다.</div>}></Route>
            <Route path="/polygonGrapics" element={<PolygonGraphics/>}></Route>
          </Routes>
        </section>
      </main>
      <footer>
        <section className='footerSection'>
          <p>이메일 : junsuk817@naver.com</p>
          <p>깃허브 : https://github.com/mooon610</p>
          <p>전화번호 : 010-6514-6445</p>
        </section>
      </footer>
    </>
  );
}


export default App;
