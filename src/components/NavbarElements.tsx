import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: #f0ebe4;
    height: 185px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 12;
    align-items: center;
    position: sticky;
    top: 0px;
`;
 
export const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: white;
        background-color: #656d75;
        padding-top: 3px;
        padding-bottom: 3px;
        border-radius: 5px;

    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
 
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;