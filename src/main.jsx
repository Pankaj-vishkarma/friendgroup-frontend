import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './componets/Layout'
import Home from './componets/Home'
import Image from './componets/Image'
import Video from './componets/Video'
import Signin from './componets/Signin'
import Signup from './componets/Signup'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import UserContextProvider from './contex/UserContextProvider'
import Logout from './componets/Logout'
import Addfile from './componets/Addfile'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/image' element={<Image/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/addfile' element={<Addfile/>}/>
        <Route path='/logout' element={<Logout/>}/>
        
      </Route>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      
    </Routes>
    </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
  
)
