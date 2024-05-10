import { css } from "@emotion/react";
import COLOR_PALETTE from "../../colorPalette";
import { MainButtonStyleType } from "./constants";

export const MainButtonPropsStyle = (isHighlight: boolean, theme: ThemeType, buttonType: MainButtonStyleType) =>
  css({
    width: buttonType === MainButtonStyleType.Short ? "25%" : "100%",
    color: isHighlight ? COLOR_PALETTE[theme].colorReverse : COLOR_PALETTE[theme].color,
    fontSize: "15px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: isHighlight ? COLOR_PALETTE[theme].backgroundReverse : COLOR_PALETTE[theme].background,
    border: `1px solid ${isHighlight ? COLOR_PALETTE[theme].colorReverse : COLOR_PALETTE[theme].color}`,
    borderRadius: "5px",
    padding: "5px",
    height: "44px",
  });

export const ButtonTextStyle = css({
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
});