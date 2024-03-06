import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import esriConfig from "@arcgis/core/config.js";
import PolygonGraphics from "./page/PolygonGraphics"
import MyLocation from "./page/MyLocation";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    // GISMap apiKey
    esriConfig.apiKey =
    "AAPK3010c89f450141c280e54513102608bagL2MJqyCtoc8UMYXm7Ra9EJDXP-m92zkAypGdJI3lERXpluHe5ANRSqslstCFLX-";
  },[])

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <strong><Link to={"/"}>GIS Map Test</Link></strong>
            </li>
            <li><Link to={"/polygonGrapics"}>PolygonGrapics</Link></li>
            <li><Link to={"/myLocation"}>MyLocation</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='MapSection'>
          <Routes>
            <Route exact path="/" element={<div>GISMap 테스트입니다.</div>}></Route>
            <Route path="/polygonGrapics" element={<PolygonGraphics/>}></Route>
            <Route path="/myLocation" element={<MyLocation/>}></Route>
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
