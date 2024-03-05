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
        <section className="MapSection">
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
  useEffect(() => {
    esriConfig.apiKey =
      "AAPK3010c89f450141c280e54513102608bagL2MJqyCtoc8UMYXm7Ra9EJDXP-m92zkAypGdJI3lERXpluHe5ANRSqslstCFLX-";

    const map = new Map({
      basemap: "arcgis/topographic"
    })

    const view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv", // Div element
    });
  }, []);
  return <div id='viewDiv'></div>;
}

export default App;
