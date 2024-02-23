import useUserContext from "../hooks/useUserContext";
import Personal from "./Personal";
import Bank from "./Bank";
import Security from "./Security";
import Farm from "./Farm";

const UserInputs = () => {
  const { page } = useUserContext();

  const display = {
    0: <Personal />,
    1: <Bank />,
    2: <Security />,
    3: <Farm />,
  };

  return <div className="page-body">{display[page]}</div>;
};

export default UserInputs;
