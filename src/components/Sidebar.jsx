//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";


const Header = () => {

    const [menuCollapse] = useState(false)

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                Inicio
                            </MenuItem>
                            <MenuItem icon={<FaList />}>Categorias</MenuItem>
                            <MenuItem icon={<FaRegHeart />}>Carrito</MenuItem>
                            <MenuItem icon={<BiCog />}>Ayuda</MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;