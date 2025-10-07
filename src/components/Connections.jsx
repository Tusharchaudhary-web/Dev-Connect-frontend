import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections || connections.length === 0) {
    return (
      <div className="no-requests">
        <p>🚀 No connections yet.</p>
        <p>Start connecting with people and grow your network! 🌐</p>
      </div>
    );
  }

  return (
    <div className="connections">
      <p className="connections-title">Connections</p>
      {connections.map((connection) => {
        
        if (!connection || !connection._id) return null;

        const { _id, PhotoURL, fullName, About } = connection;

        return (
          <div className="connection-item" key={_id}>
            <img className="connection-image" src={PhotoURL} alt={fullName} />
            <div className="connection-meta">
              <p className="connection-name">{fullName}</p>
              <p className="connection-about">{About}</p>
            </div>
            <Link to={/chat/ + _id}>
              <button className="chat">💬 Chat</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
