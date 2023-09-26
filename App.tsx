import './App.css'
import {Routes, Route} from "react-router-dom"
import Nav from "./navbar"
import Body from "./body"
// import 'http://wa.link/rdk2xd'


function App() {
 

  return (
    <>
<Nav/>

<Body/>
 <Routes>
  <Route path='/'></Route>
  <Route path='#home'></Route>
  <Route path='#about'></Route>
  <Route path='#works'></Route>
  <Route path='#contact'></Route>
  {/* <Route path=''></Route> */}
 </Routes>
 

 
    </>
  )
}

export default App
