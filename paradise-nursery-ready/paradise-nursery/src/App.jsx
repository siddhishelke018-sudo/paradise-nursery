import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";
function Home(){return <main className="home-page"><section className="hero"><div className="hero-overlay"><div className="hero-content"><span className="eyebrow">WELCOME TO</span><h1>Paradise Nursery</h1><p className="hero-tagline">Bring Nature Into Your Home</p><p className="hero-description">Discover beautiful indoor, outdoor and flowering plants to make every space fresh, peaceful and green.</p><Link to="/plants" className="primary-button">Get Started</Link></div></div></section><AboutUs/></main>}
export default function App(){return <BrowserRouter><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/plants" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/></Routes></BrowserRouter>}
