import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useNavigate, Link } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { removerequests } from "../utils/requests";
import { removeConnections } from "../utils/connectionSlice";
import React from "react";
import {
  FaUser,
  FaSignOutAlt,
  FaEnvelopeOpenText,
  FaUserFriends,
  FaHome,
} from "react-icons/fa";
import { clearFeed } from "../utils/feedSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Logout = async () => {
    await axios.post(BASE_URL + "/logout", { withCredentials: true });
    dispatch(removeUser());
    dispatch(removerequests());
    dispatch(removeConnections());
    dispatch(clearFeed());
    navigate("/");
  };

  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link className="DevConnect">
            DevConnect👨‍💻
          </Link>
        </li>

        {user && (
          <li>
            <div className="dropdown-wrapper">
              <span className="fullName">Hello, {user.fullName}</span>
              <img
                className="navbarimg"
                src={user.PhotoURL}
                alt="User"
                onClick={() => {
                  setOpen(!open);
                  if (!open && window.innerWidth <= 600) {
                    setTimeout(() => {
                      setOpen(false);
                    }, 7000);
                  }
                }}
              />
              {open && (
                <div className="dropdown">
                  <button>
                    <FaUser />
                    <Link to="/profile">Profile</Link>
                  </button>
                  <button onClick={Logout}>
                    <FaSignOutAlt />
                    <Link to="/">Logout</Link>
                  </button>
                  <button>
                    <FaEnvelopeOpenText />
                    <Link to="/requests">Requests</Link>
                  </button>
                  <button>
                    <FaUserFriends />
                    <Link to="/connections">Connections</Link>
                  </button>
                  <button>
                    <FaHome />
                    <Link to="/feed">Feed</Link>
                  </button>
                </div>
              )}
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
