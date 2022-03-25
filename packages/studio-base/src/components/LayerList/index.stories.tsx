// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import MockMessagePipelineProvider from "@foxglove/studio-base/components/MessagePipeline/MockMessagePipelineProvider";
import ModalHost from "@foxglove/studio-base/context/ModalHost";
import { PlayerPresence } from "@foxglove/studio-base/players/types";

import { LayerList } from ".";

export default {
  title: "components/LayerList",
  component: LayerList,
};

const TOPICS = [
  { datatype: "nav_msgs/OccupancyGrid", name: "/map" },
  { datatype: "visualization_msgs/MarkerArray", name: "/semantic_map" },
  { datatype: "tf2_msgs/TFMessage", name: "/tf" },
  { datatype: "nav_msgs/OccupancyGrid", name: "/drivable_area" },
  { datatype: "sensor_msgs/PointCloud2", name: "/RADAR_FRONT" },
  { datatype: "sensor_msgs/PointCloud2", name: "/RADAR_FRONT_LEFT" },
  { datatype: "sensor_msgs/PointCloud2", name: "/RADAR_FRONT_RIGHT" },
  { datatype: "sensor_msgs/PointCloud2", name: "/RADAR_BACK_LEFT" },
  { datatype: "sensor_msgs/PointCloud2", name: "/RADAR_BACK_RIGHT" },
  { datatype: "sensor_msgs/PointCloud2", name: "/LIDAR_TOP" },
  { datatype: "sensor_msgs/CompressedImage", name: "/CAM_FRONT/image_rect_compressed" },
  { datatype: "sensor_msgs/CameraInfo", name: "/CAM_FRONT/camera_info" },
  { datatype: "visualization_msgs/ImageMarker", name: "/CAM_FRONT/image_markers_lidar" },
  { datatype: "foxglove_msgs/ImageMarkerArray", name: "/CAM_FRONT/image_markers_annotations" },
  { datatype: "sensor_msgs/CompressedImage", name: "/CAM_FRONT_RIGHT/image_rect_compressed" },
  { datatype: "sensor_msgs/CameraInfo", name: "/CAM_FRONT_RIGHT/camera_info" },
  { datatype: "visualization_msgs/ImageMarker", name: "/CAM_FRONT_RIGHT/image_markers_lidar" },
  { datatype: "sensor_msgs/CompressedImage", name: "/CAM_BACK_RIGHT/image_rect_compressed" },
  { datatype: "sensor_msgs/CameraInfo", name: "/CAM_BACK_RIGHT/camera_info" },
  { datatype: "visualization_msgs/ImageMarker", name: "/CAM_BACK_RIGHT/image_markers_lidar" },
  { datatype: "foxglove_msgs/ImageMarkerArray", name: "/CAM_BACK_RIGHT/image_markers_annotations" },
  { datatype: "sensor_msgs/CompressedImage", name: "/CAM_BACK/image_rect_compressed" },
  { datatype: "sensor_msgs/CameraInfo", name: "/CAM_BACK/camera_info" },
  { datatype: "visualization_msgs/ImageMarker", name: "/CAM_BACK/image_markers_lidar" },
  { datatype: "foxglove_msgs/ImageMarkerArray", name: "/CAM_BACK/image_markers_annotations" },
  { datatype: "sensor_msgs/CompressedImage", name: "/CAM_BACK_LEFT/image_rect_compressed" },
  { datatype: "sensor_msgs/CameraInfo", name: "/CAM_BACK_LEFT/camera_info" },
  { datatype: "visualization_msgs/ImageMarker", name: "/CAM_BACK_LEFT/image_markers_lidar" },
  { datatype: "foxglove_msgs/ImageMarkerArray", name: "/CAM_BACK_LEFT/image_markers_annotations" },
  { datatype: "sensor_msgs/CompressedImage", name: "/CAM_FRONT_LEFT/image_rect_compressed" },
  { datatype: "sensor_msgs/CameraInfo", name: "/CAM_FRONT_LEFT/camera_info" },
  { datatype: "visualization_msgs/ImageMarker", name: "/CAM_FRONT_LEFT/image_markers_lidar" },
  { datatype: "foxglove_msgs/ImageMarkerArray", name: "/CAM_FRONT_LEFT/image_markers_annotations" },
  { datatype: "geometry_msgs/PoseStamped", name: "/pose" },
  { datatype: "sensor_msgs/NavSatFix", name: "/gps" },
  { datatype: "visualization_msgs/MarkerArray", name: "/markers/annotations" },
  { datatype: "sensor_msgs/Imu", name: "/imu" },
  { datatype: "diagnostic_msgs/DiagnosticArray", name: "/diagnostics" },
  { datatype: "nav_msgs/Odometry", name: "/odom" },
  {
    datatype: "foxglove_msgs/ImageMarkerArray",
    name: "/CAM_FRONT_RIGHT/image_markers_annotations",
  },
];

export const PlayerNotPresent = (): JSX.Element => {
  return (
    <ModalHost>
      <MockMessagePipelineProvider noActiveData presence={PlayerPresence.NOT_PRESENT}>
        <LayerList />
      </MockMessagePipelineProvider>
    </ModalHost>
  );
};

export const PlayerIntializing = (): JSX.Element => {
  return (
    <ModalHost>
      <MockMessagePipelineProvider presence={PlayerPresence.INITIALIZING}>
        <LayerList />
      </MockMessagePipelineProvider>
    </ModalHost>
  );
};

export const PlayerPresent = (): JSX.Element => {
  return (
    <ModalHost>
      <MockMessagePipelineProvider topics={TOPICS} presence={PlayerPresence.PRESENT}>
        <LayerList />
      </MockMessagePipelineProvider>
    </ModalHost>
  );
};

export const PlayerWithError = (): JSX.Element => {
  return (
    <ModalHost>
      <MockMessagePipelineProvider presence={PlayerPresence.ERROR}>
        <LayerList />
      </MockMessagePipelineProvider>
    </ModalHost>
  );
};
