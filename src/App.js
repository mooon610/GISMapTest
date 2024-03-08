import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import esriConfig from "@arcgis/core/config.js";
import PolygonGraphics from "./page/PolygonGraphics"
import MyLocation from "./page/MyLocation";
import SearchAddress from "./page/SearchAddress";
import ElevationProfileWidget from "./page/ElevationProfileWidget";
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
            <li><Link to={"/searchAddress"}>SearchAddress</Link></li>
            <li><Link to={"/elevationProfileWidget"}>ElevationProfileWidget</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='MapSection'>
          <Routes>
            <Route exact path="/" element={<MainPage/>}></Route>
            <Route path="/polygonGrapics" element={<PolygonGraphics/>}></Route>
            <Route path="/myLocation" element={<MyLocation/>}></Route>
            <Route path="/searchAddress" element={<SearchAddress/>}></Route>
            <Route path="/elevationProfileWidget" element={<ElevationProfileWidget/>}></Route>
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

function MainPage() {
  return (
    <>
      <h1>GISMap 테스트 입니다.</h1>
      <p>ArcGIS, 오픈소스, 타사 API를 사용하여 ArcGIS 위치 서비스에 접근하는 방법을 알아보세요.</p>
      <p>API 키를 사용하여 ArcGIS 위치 서비스 및 비공개 콘텐츠 항목에 접근하세요.</p>
    </>
  )
}


export default App;
