import { useLocation } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import PageImage from "./PageImage";

const PageLeft = () => {
  const { page } = useUserContext();
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <div className="page-left">
      <div className="page-left_image">
        <PageImage image={page} page_type={path} />
      </div>
    </div>
  );
};

export default PageLeft;
