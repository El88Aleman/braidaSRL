import { Link, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import "./Navbar.css";
import { useRef, useState } from "react";

const Navbar = () => {
  const itemsRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - -itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
  };
  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemsRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    itemsRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="container">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1712446049/Braida%20SRL/r7pnlwmayqmwwxpfptsb.png"
          alt="braidaSRL"
          width="700"
          height="250"
        />
      </Link>
      <div
        className="containerMenu"
        ref={itemsRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="slider">
          <FaChevronLeft
            className="left"
            style={{ fontSize: "24px", color: "black" }}
          />
        </div>
        <ul className="menu">
          <li>
            <Link className="producto">ACEITE </Link>
          </li>
          <li>
            <Link className="producto active">LLERVA</Link>
          </li>
          <li>
            <Link className="producto">PAPEL HIGIENICO </Link>
          </li>
          <li>
            <Link className="producto">SERVILLETAS</Link>
          </li>
          <li>
            <Link className="producto">BOLSAS</Link>
          </li>
          <li>
            <Link className="producto">BALANCEADO</Link>
          </li>
          <li>
            <Link className="producto">VINAGRE</Link>
          </li>
          <li>
            <Link className="producto">UTENSILLOS</Link>
          </li>
          <li>
            <Link className="producto">UTENSILLOS</Link>
          </li>
          <li>
            <Link className="producto">PRODUCTOS ENLATADOS</Link>
          </li>
        </ul>
        <div className="slider">
          <FaChevronRight
            className="right"
            style={{ fontSize: "24px", color: "black" }}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
