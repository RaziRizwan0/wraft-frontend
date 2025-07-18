import React, { useState } from "react";

import { useIsomorphicLayoutEffect } from "@/utils";
import { useViewportSize } from "@/utils";

import * as S from "./styles";
import { getParentScale } from "./utils";

import { UseTabState } from ".";

export interface ActiveBarReturn {
  offset?: number;
  orientation?: UseTabState["orientation"];
  size?: number;
}

function useActiveBar(
  listRef: React.MutableRefObject<HTMLElement>,
  activeTab: HTMLElement,
  orientation: UseTabState["orientation"],
): ActiveBarReturn {
  const [state, setState] = useState({});
  const { height: viewportHeight, width: viewportWidth } = useViewportSize();

  useIsomorphicLayoutEffect(() => {
    const list = listRef.current;
    if (!list || !activeTab) return;

    const listRect = list.getBoundingClientRect();
    const activeTabRect = activeTab.getBoundingClientRect();
    const scale = getParentScale(list);

    if (orientation === "vertical") {
      const top = activeTabRect.top - listRect.top;
      const height = activeTabRect.height;
      setState({
        size: height,
        offset: top,
        orientation,
      });
    } else {
      const left =
        (activeTabRect.left - listRect.left + list.scrollLeft) / scale;
      const width = activeTabRect.width / scale;

      setState({
        size: isNaN(width) ? 0 : width,
        offset: isNaN(left) ? 0 : left,
        orientation,
      });
    }
  }, [listRef, activeTab, viewportWidth, viewportHeight, orientation]);

  return state;
}

export interface ActiveBarOptions {
  activeTab: HTMLElement;
  listRef: React.MutableRefObject<undefined>;
}

export type ActiveBarProps = Pick<UseTabState, "orientation"> &
  ActiveBarOptions;

export const ActiveBar: React.FC<ActiveBarProps> = ({
  activeTab,
  listRef,
  orientation,
}) => {
  const activeBar = useActiveBar(listRef, activeTab, orientation);
  return <S.ActiveBar {...activeBar} />;
};

ActiveBar.displayName = "ActiveBar";
