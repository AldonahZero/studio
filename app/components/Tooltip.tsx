//
//  Copyright (c) 2018-present, Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

import * as React from "react";

import BaseTooltip from "@foxglove-studio/app/components/TooltipBase";
import styles from "./Tooltip.module.scss";

type BaseProps = React.ComponentProps<typeof BaseTooltip>;
type Props = Omit<BaseProps, "offset" | "fixed" | "contents"> & {
  fixed?: BaseProps["fixed"];
  offset?: BaseProps["offset"];
  contents?: BaseProps["contents"];
};

// Wrapper around BaseTooltip for consistent styling and behavior.
export default class Tooltip extends React.Component<Props> {
  render() {
    const {
      children,
      contents,
      placement = "auto",
      fixed = true,
      delay = 300,
      offset = { x: 0, y: 0 },
      ...otherProps
    } = this.props;

    if (!contents) {
      return children || null;
    }

    return (
      <BaseTooltip
        {...otherProps}
        placement={placement}
        fixed={fixed}
        delay={delay}
        offset={offset}
        contents={
          <div className={styles.tooltip}>
            {typeof contents === "function" ? contents() : contents}
          </div>
        }
        arrow={<div className={styles.arrow} />}
      >
        {children}
      </BaseTooltip>
    );
  }
}
