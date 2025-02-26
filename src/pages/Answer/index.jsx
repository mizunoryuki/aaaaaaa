import { Sidebar } from "../../components/Sidebar/index";
import { Main } from "../../components/Main/index";
import { Header } from "../../components/Header/index";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../index.css";

export const Answer = () => {
  const [pageState, setPageState] = useState("answer");
  const navigate = useNavigate();
  const [isFinish, setIsFinish] = useState(false);
  const location = useLocation();
  const showSidebar = location.pathname !== "/"; // "/" では Sidebar を非表示

  useEffect(() => {
    if (isFinish) {
      navigate("/");
    }
  }, [isFinish, navigate]);

  return (
    <div className="layout">
      <Header />
      {showSidebar && (
        <div className="layout-main">
          <Sidebar setIsFinish={setIsFinish} phase={pageState} />
          <Main editFlag={true} phase={pageState} />
        </div>
      )}
    </div>
  );
};
