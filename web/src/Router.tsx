import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Inicio } from "./components/pages/Inicio";

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>} />
        </Routes>
        </BrowserRouter>
    )
}