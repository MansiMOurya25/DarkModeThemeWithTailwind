import { useContext } from "react";
import { ThemeContext } from "../Context/theme";

function ThemeBtn() {
    const {themeMode, lightTheme, darkTheme} = useContext(ThemeContext);
  const onChangeBtn =(e)=>{
    const darkModeStatus = e.currentTarget.checked
    if(darkModeStatus) {
        darkTheme()
    }
    else{
        lightTheme()
    }
  }
    return (  
        <>
        <label htmlFor="toggle" className="item-center">
            ThemeMode</label>
        <input type="checkbox" 
        className="sr-only-peer"
        checked= {themeMode==="dark"}
        value=""
        onChange={onChangeBtn}/>
        </>
    );
}

export default ThemeBtn;