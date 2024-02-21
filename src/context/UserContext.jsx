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
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    age: "",
    gender: "",
    site: "",
    id_type: "",
    id_number: "",
    id_file: null,
    password: "",
    confirm_password: "",
    profile_image: null,
    smart_phone: false,
    bank_account: false,
    bank_name: "",
    bank_acc_number: "",
    security: false,
    farm: [],
    farm_crops: [],
    farm_documents: [],
  });

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
  };

  return (
    <UserContext.Provider
      value={{ data, setData, page, setPage, title, handleChange }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
