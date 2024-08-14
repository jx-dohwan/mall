import { useCallback } from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {
  const { tno } = useParams();

  return (
    <div className="text-3xl font-extrabold">
      Todo Read Page Component {tno}
      <div></div>
      <ReadComponent tno={tno} />
    </div>
  );
};

export default ReadPage;
