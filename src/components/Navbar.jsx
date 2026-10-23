import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar(){const items=useSelector(s=>s.cart.items);const count=items.reduce((t,i)=>t+i.quantity,0);return <nav className="navbar"><div className="logo">🌿 Paradise Nursery</div><div className="nav-links"><Link className="nav-link" to="/">Home</Link><Link className="nav-link" to="/plants">Plants</Link><Link className="nav-link cart-link" to="/cart">🛒 Cart <span className="cart-count">{count}</span></Link></div></nav>}
