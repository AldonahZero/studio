import { $ReadOnly } from "utility-types";

//
//  Copyright (c) 2019-present, Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

import { RosObject } from "@foxglove-studio/app/players/types";
import { Marker } from "@foxglove-studio/app/types/Messages";

export type InteractionData = $ReadOnly<{
  topic: string;
  highlighted?: boolean;
  originalMessage: $ReadOnly<RosObject>;
}>;
export type Interactive<T> = T & { interactionData: InteractionData };
export type SelectedObject = { object: Marker; instanceIndex: number | null | undefined };
