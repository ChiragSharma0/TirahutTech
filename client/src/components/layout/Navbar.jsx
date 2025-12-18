import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HiOutlineCode, HiOutlineDeviceMobile } from "react-icons/hi";
import { BsCart, BsGear } from "react-icons/bs";
import { FaUsers, FaBullhorn } from "react-icons/fa";
import {
  AiOutlineShoppingCart,
  AiOutlineTeam,
  AiOutlineUsergroupAdd,
  AiOutlineAppstore,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const navigate = useNavigate();

  const desktopServicesRef = useRef(null);
  const mobileServicesRef = useRef(null);
  const desktopProductsRef = useRef(null);
  const mobileProductsRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Header shadow on scroll
  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopServicesRef.current && !desktopServicesRef.current.contains(e.target))
        setServicesOpen(false);

      if (mobileServicesRef.current && !mobileServicesRef.current.contains(e.target))
        setMobileServicesOpen(false);

      if (desktopProductsRef.current && !desktopProductsRef.current.contains(e.target))
        setProductsOpen(false);

      if (mobileProductsRef.current && !mobileProductsRef.current.contains(e.target))
        setMobileProductsOpen(false);

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        if (open) {
          setOpen(false);
          setMobileServicesOpen(false);
          setMobileProductsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // NAV ITEMS
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service", dropdown: "services" },
    { name: "Products", path: "/product", dropdown: "products" },
    { name: "About", path: "/about" },
    { name: "Our Package", path: "/our-package" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // SERVICES DROPDOWN
  const servicesDropdown = [
    { name: "Web Development", icon: <HiOutlineCode />, path: "/service/web-development" },
    { name: "App Development", icon: <HiOutlineDeviceMobile />, path: "/service/app-development" },
    { name: "Ecommerce Development", icon: <BsCart />, path: "/service/ecommerce-development" },
    { name: "Automation", icon: <BsGear />, path: "/service/automation" },
    { name: "Marketing", icon: <FaBullhorn />, path: "/service/marketing" },
    { name: "Customer Software", icon: <FaUsers className="text-3xl" />, path: "/service/customer-software" },
  ];

  // PRODUCTS DROPDOWN
  const productsDropdown = [
    { name: "CRM", icon: <AiOutlineTeam className="text-2xl" />, path: "/products/crm" },
    { name: "HRM", icon: <AiOutlineUsergroupAdd className="text-2xl" />, path: "/products/hrm" },
    { name: "ERP", icon: <AiOutlineAppstore className="text-2xl" />, path: "/products/erp" },
    { name: "POS", icon: <AiOutlineShoppingCart className="text-2xl" />, path: "/products/pos" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 bg-white px-6 md:px-12 py-4 flex items-center justify-between border-b border-gray-200 transition-all duration-300 ${
        shadow ? "shadow-md" : ""
      }`}
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-1">
        <img src="/img/logo.png" alt="Logo" className="w-11 h-11 object-contain" />
        <div className="flex flex-col leading-tight">
          <span className="text-[22px] font-extrabold text-[#003C3F] tracking-wide">TIRAHUT</span>
          <span className="text-[13px] font-semibold text-[#003C3F] -mt-[1px] tracking-wide m-2">
            TECH
          </span>
        </div>
      </Link>

      {/* DESKTOP NAVIGATION */}
      <ul className="hidden md:flex items-center gap-6 text-[15px] font-medium text-black">
        {navItems.map((item) => {
          if (item.dropdown === "services") {
            return (
              <li key={item.name} className="relative flex items-center" ref={desktopServicesRef}>
                <button
                  onClick={() => {
                    navigate("/service");
                    setServicesOpen(false);
                  }}
                  className="hover:text-[#01686d] transition"
                >
                  {item.name}
                </button>
                <button className="ml-1 text-sm" onClick={() => setServicesOpen((p) => !p)}>
                  <FiChevronDown />
                </button>

                {servicesOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-56 py-2 border border-gray-200 z-50 text-[14px]">
                    {servicesDropdown.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.path}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="text-[#01686d]">{service.icon}</span>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }

          if (item.dropdown === "products") {
            return (
              <li key={item.name} className="relative flex items-center" ref={desktopProductsRef}>
                <button
                  onClick={() => {
                    navigate("/product");
                    setProductsOpen(false);
                  }}
                  className="hover:text-[#01686d] transition"
                >
                  {item.name}
                </button>
                <button className="ml-1 text-sm" onClick={() => setProductsOpen((p) => !p)}>
                  <FiChevronDown />
                </button>

                {productsOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-56 py-2 border border-gray-200 z-50 text-[14px]">
                    {productsDropdown.map((product) => (
                      <li key={product.name}>
                        <Link
                          to={product.path}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                          onClick={() => setProductsOpen(false)}
                        >
                          <span className="text-[#01686d]">{product.icon}</span>
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }

          return (
            <li key={item.name}>
              <Link to={item.path} className="hover:text-[#01686d] transition">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* DESKTOP BUTTONS */}
      <div className="hidden md:flex items-center gap-3">
        <Link
          to="/demo"
          className="px-6 py-2 bg-[#01686d] hover:bg-[#00444b] text-white font-semibold rounded-lg transition text-sm"
        >
          Request Demo
        </Link>
        <Link
          to="/signup"
          className="px-6 py-2 bg-[#f27b22] hover:bg-[#d86818] text-white font-semibold rounded-lg transition shadow-md text-sm"
        >
          Sign Up
        </Link>
      </div>

      {/* MOBILE MENU BTN */}
      <button className="md:hidden text-black" onClick={() => setOpen(true)}>
        <FiMenu size={26} />
      </button>

      {/* MOBILE MENU PANEL */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 p-6 flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-1">
            <img src="/img/logo.png" className="w-10 h-10" alt="Logo" />
            <div className="flex flex-col leading-tight">
              <span className="text-[20px] font-extrabold text-black">TIRAHUT</span>
              <span className="text-[12px] font-semibold text-black -mt-1">TECH</span>
            </div>
          </Link>
          <button onClick={() => setOpen(false)}>
            <FiX size={28} />
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <ul className="flex flex-col gap-3 text-[16px] font-medium text-black">
          <li>
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-[#01686d]">
              Home
            </Link>
          </li>

          {/* SERVICES - MOBILE */}
          <li ref={mobileServicesRef}>
            <div className="flex items-center justify-between w-full">
              <button
                onClick={() => {
                  navigate("/service");
                  setOpen(false);
                }}
              >
                Services
              </button>
              <button onClick={() => setMobileServicesOpen((p) => !p)}>
                <FiChevronDown />
              </button>
            </div>

            {mobileServicesOpen && (
              <ul className="pl-4 mt-2 flex flex-col gap-1 text-[15px]">
                {servicesDropdown.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 hover:text-[#01686d]"
                    >
                      <span className="text-[#01686d]">{service.icon}</span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* PRODUCTS - MOBILE */}
          <li ref={mobileProductsRef}>
            <div className="flex items-center justify-between w-full">
              <button
                onClick={() => {
                  navigate("/product");
                  setOpen(false);
                }}
              >
                Products
              </button>
              <button onClick={() => setMobileProductsOpen((p) => !p)}>
                <FiChevronDown />
              </button>
            </div>

            {mobileProductsOpen && (
              <ul className="pl-4 mt-2 flex flex-col gap-1 text-[15px]">
                {productsDropdown.map((product) => (
                  <li key={product.name}>
                    <Link
                      to={product.path}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 hover:text-[#01686d]"
                    >
                      <span className="text-[#01686d]">{product.icon}</span>
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-[#01686d]">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setOpen(false)} className="hover:text-[#01686d]">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-[#01686d]">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTAs */}
        <Link
          to="/demo"
          onClick={() => setOpen(false)}
          className="mt-8 w-full py-3 bg-[#01686d] text-white font-semibold rounded-xl text-center"
        >
          Request Demo
        </Link>
        <Link
          to="/signup"
          onClick={() => setOpen(false)}
          className="mt-4 w-full py-3 bg-[#f27b22] text-white font-semibold rounded-xl text-center"
        >
          Sign Up
        </Link>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
