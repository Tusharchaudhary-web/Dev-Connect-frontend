import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";
import { useDispatch } from "react-redux";

const UserCard = (props) => {
  const { user } = props;
  const { PhotoURL, fullName, About ,_id} = user;

  const dispatch = useDispatch();

  const sendrequest = async (status, userId) => {
    try{
      const res=await axios.post(
      BASE_URL + "/request/send/" + status + "/" + userId,
      {},
      { withCredentials: true }
    );
    console.log(res);
    dispatch(removeUserFromFeed(userId));
    }
    catch(err){
      console.log(err.message);
    }
  };


  return (
    <div className="usercard usercard-edit">
      <img className="usercard-img" src={PhotoURL} />
      <p className="usercard-heading">{fullName}</p>
      <p className="usercard-about">{About}</p>
      <div>
        <button
          className="interested"
          onClick={() => sendrequest("interested",_id)}
        >
          Interested
        </button>
        <button className="ignored" onClick={() => sendrequest("ignored",_id)}>
          Ignored
        </button>
      </div>
    </div>
  );
};

export default UserCard;
