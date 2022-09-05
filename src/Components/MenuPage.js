import React from "react";
import Header from "./Header";
import Menu from "./Menu";

const MenuPage = ({apiData}) => {
    return(<div>
        <Header apiData={apiData}/>
        <Menu apiData={apiData}/>
    </div>)
}

export default MenuPage;