import { useEffect } from "react";

import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import Search from "@arcgis/core/widgets/Search.js";

function SearchAddress() {
  useEffect(() => {
    const map = new Map({
      basemap: "arcgis/navigation",
    });

    const view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-122.3321, 47.6062],
      zoom: 12,
    });

    const search = new Search({
      //Add Search widget
      view: view,
    });
    view.ui.add(search, "top-right"); //Add to the map
  }, []);

  return <div id='viewDiv' style={{ height: "800px" }}></div>;
}

export default SearchAddress;
