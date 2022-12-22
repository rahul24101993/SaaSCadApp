import React from 'react';
import myJson from 'D:/shortcutData.json'
import '../css/App.css';

let sidebarItems = Object.keys(myJson);

let sideBarItemsValue = Object.values(myJson);

function nameFunction(name, body) {
    return {[name](...args) {return body(...args)}}[name]
}


 sidebarItems.map((item, index)=>{
    sidebarItems[index] = nameFunction(sidebarItems[index], () => sideBarItemsValue[index].map(item=>
        <div>
        <div className='spaced-para'>
        {item.isLiveLink==="true"? <a className = "navigator" target="_blank" href={item.link}>{item.Title}</a>: <a className = "navigator" target="_blank">{item.Title}</a>}
        <h3 >{item.Description}</h3>
        </div>
        </div>))
 })

export default sidebarItems;