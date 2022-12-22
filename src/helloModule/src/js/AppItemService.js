import React from 'react';
import '../css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from 'viewmodel/SideBarViewModel';
import sidebarItems from './LiveLink.js';
import myJson from 'D:/shortcutData.json'


let l ="/";
const sidebarItem = Object.keys(myJson);
function test(index){
  let Comp = sidebarItems[index];
  return <Comp/>
}

export const appItemRenderFunction = () => {
  return (
    <>
    <h1 className='hello' align="center">SaaS CAD</h1>
 <BrowserRouter>
      <SideBar>
        <Routes>
       { sidebarItem.map((item, index)=>(
          <Route path={l.concat(item)} element={test(index)}/>
                   ))
       }
        </Routes>
      </SideBar>
    </BrowserRouter>
    </>
  );
};
