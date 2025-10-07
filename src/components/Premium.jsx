import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const Premium = () => {
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  useEffect(() => {
    verifyPremiumUser();
  }, []);


const verifyPremiumUser = async () => {
  try {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });
    console.log("Verify response:", res.data); // debug
    if (res.data.isPremium) {
      setIsPremiumUser(true);
    }
  } catch (err) {
    console.error("VerifyPremiumUser error:", err);
  }
};



  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      { membershipType: type },
      { withCredentials: true }
    );

    // it should open the razorpay dialogue box
    console.log(order);

    const { amount, keyId, currency, notes, orderId } = order.data;

    // Open Razorpay Checkout
    const options = {
      key: keyId,
      amount,
      currency,
      name: "Dev connect",
      description: "Test Transaction",
      order_id: orderId,
      prefill: {
        name: notes.fullName,
        email: notes.Email,
        contact: "6397XXXXXX",
      },
      theme: {
        color: "#F37254",
      },
      handler: function (response) {
        verifyPremiumUser(); // manually trigger again after payment success
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return isPremiumUser ? (
    "You are already a Premium user"
  ) : (
    <div className="premium-container">
      {/* Silver Plan */}
      <div className="plan-card silver">
        <h2>🥈 Silver Plan</h2>
        <p className="price">₹400/month</p>
        <ul>
          <li>✔️ Basic access to all public posts</li>
          <li>✔️ 50 connections requests per day</li>
          <li>✔️ Blue Tick</li>
          <li>✔️ 3 months</li>
          <li>✔️ chat with other people</li>
        </ul>
        <button onClick={() => handleBuyClick("silver")} className="silver">
          Buy Silver
        </button>
      </div>

      {/* Gold Plan */}
      <div className="plan-card gold">
        <h2>🏆 Gold Plan</h2>
        <p className="price">₹700/month</p>
        <ul>
          <li>✨ Unlimited connections</li>
          <li>✨ Blue Tick</li>
          <li>✨ Access to premium projects & resources</li>
          <li>✨ chat with other people</li>
          <li>✨ 6 months</li>
        </ul>
        <button onClick={() => handleBuyClick("gold")} className="gold">
          Buy Gold
        </button>
      </div>
    </div>
  );
};

export default Premium;
