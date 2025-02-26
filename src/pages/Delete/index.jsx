import { Sidebar } from "../../components/Sidebar/index";
import { Main } from "../../components/Main/index";
import { Header } from "../../components/Header/index";
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../index.css";
import { SendDeleteCode } from "../../components/Http/SendDeleteCode";
import { CodeContext } from "../../contexts/CodeContext";
import { RoomIdContext } from "../../contexts/RoomId";
import { PlayerContext } from "../../contexts/Player";
import { SendStatus } from "../../components/Http/SendStatus";

export const Delete = () => {
  const navigate = useNavigate();
  const [pageState, setPageState] = useState("delete");
  const [isFinish, setIsFinish] = useState(false);
  const { code } = useContext(CodeContext);
  const { roomId } = useContext(RoomIdContext);
  const { player } = useContext(PlayerContext);
  const location = useLocation();
  const showSidebar = location.pathname !== "/"; // "/" では Sidebar を非表示
  const sendStatus = "answer";

  useEffect(() => {
    if (isFinish) {
      //編集したコードを送るhttp通信のコンポーネント
      SendDeleteCode({ code, roomId, player });
      SendStatus({ roomId, player, sendStatus });
      navigate("/fix");
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
