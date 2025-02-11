import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
     config,
     color:{
        gray:{
            50:'#f9f9f9',
            100:'#f3f3f3',
            200:'#e5e5e5',
            300:'#d4d4d4',
            400:'#a3a3a3',
            500:'#73737' ,
            600:'#525252',
            700 : '#404040',
            800:'#262626',
            900:'#171717'
        }
     }
    
    
    });

export default theme;
