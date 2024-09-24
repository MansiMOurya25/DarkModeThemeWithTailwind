import useContext from 'react'
import Card from "./Components/Card"
import ThemeBtn from "./Components/ThemeBtn"
import { ThemeContext } from "./Context/theme"
import { useState } from 'react'
import { useEffect } from 'react'


function App(){
   const [themeMode , setThemeMode] = useState("light");
   const darkTheme =()=>{
    setThemeMode("dark");
   }
   const lightTheme =()=>{
    setThemeMode("light")
   }
   useEffect(()=>{
     document.querySelector('html').classList.remove("dark" ,"light");
     document.querySelector('html').classList.add(themeMode)
   },[themeMode])
   

  return (
    <ThemeContext.Provider  value={{themeMode , darkTheme ,lightTheme}}>
    <div className='flex flex-wrap min-h-screen item-center'>
    <div className='w-full'>
      <div className='w-full max-w-sm mx auto flex justify end mb-4'></div>
   
    </div>
<div className='w-full max-w-sm mx-auto'>
<ThemeBtn/>
<Card/>
</div>

    </div>


  
      
    </ThemeContext.Provider>
  )


}

export default App
