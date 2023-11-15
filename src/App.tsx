import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import React, {Suspense, useContext, useState} from "react";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={"/about"}>Главная</Link>
            <Link to={"/"}>About</Link>

            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                     <Route path={"/about"} element={<AboutPageAsync />}/>
                     <Route path={"/"} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
};