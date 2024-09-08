import { useState } from 'react'


import './App.css'

function App() {
  const [hide,setHide]=useState(false)
  const hideIt=()=>{
    setHide(true)
  }
  const showIt=()=>{
    setHide(false)
  }
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
};


  return (
    <>
     <input
                id="numberInput"
                type="number"
                value={value}
                onChange={handleChange}
                placeholder="Enter a number"
            />
             <p className='text-white'>The number you entered is: {value}</p>
    
    <div className={`mainBox  flex flex-wrap gap-3 justify-between`}  id='mainBox'>
    <div className={`smallBoxes ${hide ? "hidden" : ""} h-24 w-24 bg-blue-800 rounded-xl  `}onClick={()=>hideIt()} id="0"></div>
    <div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="1"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="2"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="3"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="4"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="5"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="6"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="7"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="8"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="9"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="10"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="11"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="12"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="13"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="14"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="15"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="16"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="17"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="18"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="19"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="20"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="21"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="22"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="23"></div>
<div className='smallBoxes h-24 w-24 bg-blue-800 rounded-xl ' id="24"></div>
</div>
    
    
   
    </>
  )
}

export default App
