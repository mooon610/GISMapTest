import WebScene from "@arcgis/core/WebScene.js";
import SceneView from "@arcgis/core/views/SceneView.js";
import ElevationProfile from "@arcgis/core/widgets/ElevationProfile.js";
import { useEffect } from "react";

function ElevationProfileWidget() {
  useEffect(() => {
    const webscene = new WebScene({
      portalItem: {
        id: "9a542f6755274436985617a462ffdf44",
      },
    });

    // create the scene view
    const view = new SceneView({
      container: "viewDiv",
      map: webscene,
      camera: {
        position: {
          spatialReference: { latestWkid: 3857, wkid: 102100 },
          x: -8238359,
          y: 4967229,
          z: 686,
        },
        heading: 353,
        tilt: 66,
      },
    });

    // create the elevation profile widget
    const elevationProfile = new ElevationProfile({
      view: view,
      // configure widget with desired profile lines
      profiles: [
        {
          type: "ground", // first profile line samples the ground elevation
        },
        {
          type: "view", // second profile samples the view and shows building profiles
        },
      ],
      // hide the select button
      // this button can be displayed when there are polylines in the
      // scene to select and display the elevation profile for
      visibleElements: {
        selectButton: false,
      },
    });

    // add the widget to the view
    view.ui.add(elevationProfile, "top-right");
  }, []);
  return <div id='viewDiv' style={{ height: "800px" }}></div>;
}

export default ElevationProfileWidget;
