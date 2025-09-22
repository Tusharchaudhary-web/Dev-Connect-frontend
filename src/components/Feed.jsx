import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addfeed } from "../utils/feedSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserCard from "./userCard";
import React from "react";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed.length > 0) return;
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addfeed(res.data));
    } catch (err) {}
  };

  useEffect(() => {
    getFeed();
  }, []);

if (feed.length <= 0) {
  return (
    <div className="no-requests">
      <p>📭 No more posts available!</p>
      <p>Looks like you’ve seen all available content for now.</p>
    </div>
  );
}


  return (
    feed.length > 0 && (
      <div>
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
