import { useEffect } from "react";

import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import Locate from "@arcgis/core/widgets/Locate.js";
import Track from "@arcgis/core/widgets/Track.js";
import Graphic from "@arcgis/core/Graphic.js";

function MyLocation() {
  useEffect(() => {
    const map = new Map({
      basemap: "arcgis/navigation",
    });

    const view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-40, 28],
      zoom: 2,
    });

    // const locate = new Locate({
    //   view: view,
    //   useHeadingEnabled: false,
    //   goToOverride: function (view, options) {
    //     options.target.scale = 1500;
    //     return view.goTo(options.target);
    //   },
    // });
    // view.ui.add(locate, "top-left");

    const track = new Track({
      view: view,
      graphic: new Graphic({
        symbol: {
          type: "simple-marker",
          size: "12px",
          color: "green",
          outline: {
            color: "#efefef",
            width: "1.5px",
          },
        },
      }),
      useHeadingEnabled: false,
    });
    view.ui.add(track, "top-left");
  }, []);
  return <div id='viewDiv' style={{ height: "500px" }}></div>;
}

export default MyLocation;
