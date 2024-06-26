import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Diary/Button";
import Header from "../../components/Diary/Header";
import useDiary from "../../hooks/useDiary";
import New from "./New";
import { getFormattedDate } from "../../util";
import Viewer from "../../components/Diary/Viewer";
import { useEffect } from "react";
import { setPageTitle } from "../../util";
const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);

  useEffect(() => {
    setPageTitle(`${id}번 일기`);
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const goNew = () => {
    navigate(`Diary/new`);
  };
  const goEdit = () => {
    navigate(`Diary/Edit/${id}`);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`;
    return (
        <div>
          <Header
              title={title}
              leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
              rightChild={<Button text={"수정하기"} onClick={goEdit} />}
          />
          <Viewer content={content} emotionId={emotionId} />
        </div>
    );
  }
};
export default Diary;