import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import myJson from 'D:/shortcutData.json'
import '../css/App.css';

const sidebarItems = Object.keys(myJson);
let p ="/"
export const sideBarRenderFunction = ({children}) => {
    return (
        <div className="container">
           <div style={{width: "200px"}} className="sidebar">
               {
                sidebarItems.map((item, index)=>(
                       <NavLink to={p.concat(item)} key={index} className="link" activeclassName="active">
                           <div  style={{display:"block"}} className="link_text">{item}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main className='trial'>{children}</main>
        </div>
    );
};