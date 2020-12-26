import React from "react";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

export function useScreenSize() {
  const theme = useTheme();
  const isMedium = !useMediaQuery(theme.breakpoints.up("md"));
  const isSmall = !useMediaQuery(theme.breakpoints.up("sm"));
  const isExtraSmall = !useMediaQuery(theme.breakpoints.up("xs"));

  return { isMedium, isSmall, isExtraSmall };
}
