import React from "react";
import icon from "../assets/modal-image.png";
import useUserContext from "../hooks/useUserContext";
import axios from "axios";
import { api_endpoint } from "../config/url";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FarmAddedModal = ({ setShow }) => {
  const { data } = useUserContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const body = {
    userDetails: {
      firstName: data.firstName,
      lastName: data.lastName,
      credential: data.credential,
      email: data.email,
      password: data.password,
      roleName: data.roleName,
      gender: data.gender,
      resAddress: data.resAddress,
      ageGroup: data.ageGroup,
      hasBankAccount: true,
      hasSmartphone: true,
      profilePic: {
        url: "https://***",
      },
    },
    idUpload: {
      idType: data.idType,
      url: "https://***",
    },
    siteId: "fws-rjcszynq",
    bankDetails: data.bankDetails,
    farmDetails: data.farmDetails,
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(api_endpoint + "/users/signup", body);
      const user = response.data.data.newUser;
      const accessToken = response.data.data.newUser.verificationToken;
      dispatch(setCredentials({ accessToken, user }));
      console.log(response.data);
      setShow(false);
      navigate("/verification");
      toast.success("Account created");
    } catch (error) {
      toast.error("an error occured while creating account");
      console.log(error);
    }
  };
  return (
    <div className="farm-modal">
      <ToastContainer />
      <div className="farm-modal_body">
        <div className="farm-modal_body-icon">
          <img src={icon} height={60} alt="icon" />
        </div>
        <div className="farm-modal_body-text">
          <h1>Farm added!</h1>
          <p>Would you like to add another farm?</p>
        </div>
        <div className="farm-modal_body-buttons">
          <button
            onClick={handleSubmit}
            className="farm-modal_body-buttons_pri"
          >
            No, create my account
          </button>
          <button
            onClick={() => setShow(false)}
            className="farm-modal_body-buttons_sec"
          >
            Yes, i have another farm
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmAddedModal;
