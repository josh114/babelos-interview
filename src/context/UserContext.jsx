import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const title = {
    0: "Personal Info",
    1: "Bank Info",
    2: "Security Info",
    3: "Farm Info",
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    credential: "",
    resAddress: "",
    ageGroup: "", // 18- 25, 26-35, 36-45, 46-55, 56-65, 66+
    gender: "",
    siteId: "fws-rjcszynq",
    idNumber: "",
    roleName: "Farmer",

    idUpload: {
      idType: "International Passport",
      url: "https://url",
    },

    profilePic: {
      url: "https://url",
    },

    hasSmartPhone: false,
    hasBankAccount: false,

    bankDetails: {
      accountNumber: "",
      bankName: "",
    },

    security: false,
    farmDetails: [],
  });

  const handleFarm = (farmData) => {
    setData((prevData) => ({
      ...prevData,
      farmDetails: prevData.farmDetails.concat(farmData),
    }));
    // console.log(data);
  };
  const handlePhone = (phone) => {
    setData((prevData) => ({
      ...prevData,
      credential: phone,
    }));
  };
  const addFarm = () => {};
  // "cropId": "fwc-do3o3xlz" Onion
  // "cropId": "fwc-354bssp7" Tomato

  const handleBank = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "bankName") {
      setData((prevData) => ({
        ...prevData,
        bankDetails: {
          ...prevData.bankDetails,
          bankName: value,
        },
      }));
    } else if (name === "accountNumber") {
      setData((prevData) => ({
        ...prevData,
        bankDetails: {
          ...prevData.bankDetails,
          accountNumber: value,
        },
      }));
    }
  };
  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;
    // console.log(value);

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(data);
  };
  const handlePassword = (password) => {
    setData((prevData) => ({
      ...prevData,
      password: password,
    }));
    // console.log("this is password", password);
  };
  const handleRadio = (e) => {
    const name = e.target.name;
    const value = e.target.defaultValue;
    const checked = e.target.checked;

    name === "hasSmartPhone"
      ? value === "yes"
        ? setData((prevData) => ({
            ...prevData,
            [name]: true,
          }))
        : setData((prevData) => ({
            ...prevData,
            [name]: false,
          }))
      : name === "hasBankAccount"
      ? value === "yes"
        ? setData((prevData) => ({
            ...prevData,
            [name]: true,
          }))
        : setData((prevData) => ({
            ...prevData,
            [name]: false,
          }))
      : setData((prevData) => ({
          ...prevData,
          [name]: false,
        }));
    if (name === "gender") {
      if (value === "Male") {
        setData((prevData) => ({
          ...prevData,
          gender: "Male",
        }));
      } else {
        setData((prevData) => ({
          ...prevData,
          gender: "Female",
        }));
      }
    }
  };
  const canNextPage1 = () => {
    const personal = [
      data.firstName,
      data.lastName,
      data.credential,
      data.resAddress,
      data.ageGroup,
      data.gender,
      data.idUpload.idType,
      data.idUpload.url,
      data.password,
      data.confirm_password,
    ];
    // console.log(personal.every(Boolean));
    return personal.every(Boolean);
  };
  const canNextPage2 = () => {
    const bank_data = [data.hasSmartPhone, data.bankDetails];
    return bank_data.every(Boolean);
  };

  const canNextPage3 = () => {
    if (data.security) return true;
    return false;
  };
  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2) ||
    (page === 2 && !canNextPage3);

  const farmHide = page === 3 ? false : true;
  const continueHide = page === 3 ? true : false;
  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        page,
        setPage,
        title,
        handleChange,
        handleRadio,
        handleBank,
        handleFarm,
        handlePhone,
        handlePassword,
        canNextPage1,
        canNextPage2,
        canNextPage3,
        disableNext,
        farmHide,
        continueHide,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
