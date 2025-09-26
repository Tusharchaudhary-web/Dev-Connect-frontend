import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux"; // ✅ useSelector import
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addUser } from "../utils/userSlice"; // ✅ single import
import { useEffect } from "react";
import React from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (user) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data.user)); // Redux update
    } catch (err) {
      navigate("/");
      console.error(err);
    }
  };

  // useEffect(() => {
  //   if (window.location.pathname === "/") return;
  //   fetchUser();
  // }, []);

  useEffect(() => {
    const publicPages = ["/privacy", "/terms", "/refund", "/about", "/contact"];
    if (
      window.location.pathname === "/" ||
      publicPages.includes(window.location.pathname)
    )
      return;
    fetchUser();
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
