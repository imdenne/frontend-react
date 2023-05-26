import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Cadastrar } from "./Cadastrar";
import { Login } from "./Login";
import { MaisInfo } from "./MaisInfo";
import { Menu } from "./Menu";
import { TabelaProfessor } from "./TelaProfessor/pages/TabelaProfessor";

export const Nav = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{ color: "#9370DB" }}>
          <a className="navbar-brand" href="/">
            Menu
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/cadastro">
                  Cadastrar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/info">
                  Mais Info
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/professor/:id/" element={<TabelaProfessor />} />
        <Route path="/cadastro" element={<Cadastrar />} />
        <Route path="/info" element={<MaisInfo />} />
      </Routes>
    </BrowserRouter>
  );
};












