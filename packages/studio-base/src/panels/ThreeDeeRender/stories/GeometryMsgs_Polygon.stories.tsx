// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { MessageEvent, Topic } from "@foxglove/studio";
import useDelayedFixture from "@foxglove/studio-base/panels/ThreeDimensionalViz/stories/useDelayedFixture";
import PanelSetup from "@foxglove/studio-base/stories/PanelSetup";

import ThreeDeeRender from "../index";
import { PolygonStamped, TF } from "../ros";
import { QUAT_IDENTITY } from "./common";

export default {
  title: "panels/ThreeDeeRender",
  component: ThreeDeeRender,
};

GeometryMsgs_Polygon.parameters = { colorScheme: "dark" };
export function GeometryMsgs_Polygon(): JSX.Element {
  const topics: Topic[] = [
    { name: "/polygon", datatype: "geometry_msgs/PolygonStamped" },
    { name: "/tf", datatype: "geometry_msgs/TransformStamped" },
  ];
  const tf1: MessageEvent<TF> = {
    topic: "/tf",
    receiveTime: { sec: 10, nsec: 0 },
    message: {
      header: { seq: 0, stamp: { sec: 0, nsec: 0 }, frame_id: "map" },
      child_frame_id: "base_link",
      transform: {
        translation: { x: 1e7, y: 0, z: 0 },
        rotation: QUAT_IDENTITY,
      },
    },
    sizeInBytes: 0,
  };
  const tf2: MessageEvent<TF> = {
    topic: "/tf",
    receiveTime: { sec: 10, nsec: 0 },
    message: {
      header: { seq: 0, stamp: { sec: 0, nsec: 0 }, frame_id: "base_link" },
      child_frame_id: "sensor",
      transform: {
        translation: { x: 0, y: 0, z: 1 },
        rotation: QUAT_IDENTITY,
      },
    },
    sizeInBytes: 0,
  };

  const polygon: MessageEvent<PolygonStamped> = {
    topic: "/polygon",
    receiveTime: { sec: 10, nsec: 0 },
    message: {
      header: { seq: 0, stamp: { sec: 0, nsec: 0 }, frame_id: "sensor" },
      polygon: {
        points: [
          { x: -1, y: -1, z: 0 },
          { x: 0, y: 0, z: 2 },
          { x: 1, y: 1, z: 0 },
        ],
      },
    },
    sizeInBytes: 0,
  };

  const fixture = useDelayedFixture({
    topics,
    frame: {
      "/polygon": [polygon],
      "/tf": [tf1, tf2],
    },
    capabilities: [],
    activeData: {
      currentTime: { sec: 0, nsec: 0 },
    },
  });

  return (
    <PanelSetup fixture={fixture}>
      <ThreeDeeRender
        overrideConfig={{
          ...ThreeDeeRender.defaultConfig,
          followTf: "base_link",
          scene: { enableStats: false },
          cameraState: {
            distance: 8.25,
            perspective: true,
            phi: 1,
            targetOffset: [-0.7, 2.1, 0],
            thetaOffset: -0.25,
            fovy: 0.75,
            near: 0.01,
            far: 5000,
            target: [0, 0, 0],
            targetOrientation: [0, 0, 0, 1],
          },
        }}
      />
    </PanelSetup>
  );
}
