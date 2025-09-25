import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import React from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = (props) => {
  const { user } = props;

  const [fullName, setfullName] = useState(user.fullName);
  const [About, setAbout] = useState(user.About);
  const [PhotoURL, setPhotoURL] = useState(user.PhotoURL);
  const [showtoast, setshowtoast] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveProfileHandler = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { fullName, About, PhotoURL },
        { withCredentials: true }
      );
      setshowtoast(true);
      setTimeout(() => {
        setshowtoast(false);
        navigate("/feed");
      }, 2000);
      dispatch(addUser(res.data.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="EditProfileWrapper">
      <div>
        <form
          onSubmit={saveProfileHandler}
          className="editprofile-form"
          required
        >
          <p className="heading">Edit your Profile</p>
          <label>fullName*</label>
          <input
            type="text"
            value={fullName}
            required
            onChange={(e) => setfullName(e.target.value)}
          />
          <label>About*</label>
          <textarea
            value={About}
            required
            onChange={(e) => {
              const words = e.target.value.trim().split(/\s+/);
              if (words.length <= 50) setAbout(e.target.value);
            }}
          />
         
          <label>PhotoURL*</label>
          <input
            type="text"
            value={PhotoURL}
            required
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <button>Save Profile</button>
        </form>
      </div>

      <UserCard user={{ fullName, About, PhotoURL }} />

      {showtoast && (
       <div className="toast toast-top toast-center">
          <div className="toast-text alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
