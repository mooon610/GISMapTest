import { useEffect } from "react";

import esriConfig from "@arcgis/core/config.js";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <strong>GIS Map Test</strong>
            </li>
            <li>main</li>
            <li>awt</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <MappingApp></MappingApp> 
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

function MappingApp() {
  useEffect(()=>{

  },[])
  return <div id="viewDiv"></div>
}

export default App;
