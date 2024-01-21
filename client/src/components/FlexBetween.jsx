import { Box } from "@mui/material";
import { styled } from "@mui/system"; // helps to create styled components with css-in-js syntax

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
