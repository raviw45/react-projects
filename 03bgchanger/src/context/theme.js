import React, { useContext } from "react"
const ThemeContext=React.createContext({
    themeMode:"light",
    lightTheme:()=>{},
    darkTheme:()=>{}
})

export const ThemeProvider=ThemeContext.Provider;
//custom hooks 
export default function useTheme(){
    return useContext(ThemeContext);
}