import { Typography, useTheme } from "@mui/material";
import WidgetWrapper from "../../components/WidgetWrapper";
import FlexBetween from "../../components/FlexBetween";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Nike Sports Wear</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        src={`${process.env.REACT_APP_SERVER_URL}/assets/nike-adv.jpg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        alt="advert"
      />
      <FlexBetween>
        <Typography color={main}>Find Your Feel</Typography>
        <Typography color={medium}>mike.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Hit the gym with locked-in support and next-level confidence. Enjoy your rest day or simply chill 
        in the softest flexible imaginable.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
