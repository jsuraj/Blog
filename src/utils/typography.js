import Typography from "typography";
import deYoungTheme from 'typography-theme-de-young';

delete deYoungTheme.googleFonts;

deYoungTheme.headerColor = 'hsla(0,0%,0%,1)';
deYoungTheme.bodyColor = 'hsla(0,0%,0%,0.8)';
deYoungTheme.baseLineHeight = 1.65;

deYoungTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    color: 'hsla(0,0%,0%,1)',
  },
  'a': {
    textDecoration: 'none'
  }
})

const typography = new Typography(deYoungTheme);

export default typography;
