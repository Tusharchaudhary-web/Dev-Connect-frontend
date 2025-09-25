import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addrequests } from "../utils/requests";

const Requests = () => {
  const dispatch = useDispatch();

  const requests = useSelector((store) => store.requests);

  const reviewrequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        {
          withCredentials: true,
        }
      );

      const filteredrequests = requests.filter((req) => req._id !== _id);
      dispatch(addrequests(filteredrequests));
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addrequests(res.data.data));
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests || requests.length === 0) {
    return (
      <div className="no-requests">
        <p> 🎯 No requests found.</p>
        <p>Send some requests and start connecting!🤝</p>
      </div>
    );
  }

  return (
    <div className="requests-container">
 
      <p className="request-heading">Requests</p>

      <div className="requests-list">
        {requests.map((request) => {
          const { PhotoURL, fullName, About } = request.fromUserId;
          return (
            <div key={request._id} className="request-item">
              <img src={PhotoURL} alt={fullName} className="request-image" />
              <div className="request-meta">
                <p className="request-name">{fullName}</p>
                <p className="request-about">{About}</p>
              </div>
              <div className="request-buttons">
                <button
                  className="accept-btn"
                  onClick={() => reviewrequest("accepted", request._id)}
                >
                  Accept
                </button>
                <button
                  className="reject-btn"
                  onClick={() => reviewrequest("rejected", request._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
