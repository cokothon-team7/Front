import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./solve-puzzle.css";
import axios from "axios";

const SolvePuzzle = () => {
  const { puzzleId } = useParams();

  const [puzzle, setPuzzle] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const [hint, setHint] = useState();
  const [category, setCategory] = useState();
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    initializePuzzle();
  }, []);

  const shufflePuzzle = (arr) => {
    const shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
  };

  const initializePuzzle = () => {
    const infoUrl = `/api/puzzles/${puzzleId}`; // 이미지 URL을 업데이트하세요.
    axios.get(infoUrl).then((res) => {
      const { hint, category, message } = res.data;
      setHint(hint);
      setCategory(category);
      setMessage(message);
    });
    // 이미지 URL 또는 이미지 파일을 사용할 수 있습니다.
    const imageUrl = `/api/puzzles/${puzzleId}/image`; // 이미지 URL을 업데이트하세요.

    const pieces = [];
    for (let i = 0; i < 9; i++) {
      pieces.push({
        id: i,
        style: {
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: `-${(i % 3) * 100}px -${
            Math.floor(i / 3) * 100
          }px`,
        },
      });
    }

    // 마지막 조각을 빈 조각으로 설정
    // pieces[8].style.backgroundImage = "none";
    var shuffledArr = shufflePuzzle(pieces);

    setPuzzle(shuffledArr);
  };

  const handlePieceClick = (clickedIndex) => {
    // 클릭한 조각과 빈 조각을 교환

    // 선택이 안됨
    if (selectedIndex == -1) {
      setSelectedIndex(clickedIndex);
    } else if (selectedIndex == clickedIndex) {
      setSelectedIndex(-1);
    } else {
      swapPuzzle(clickedIndex, selectedIndex);
      setSelectedIndex(-1);
    }

    // 퍼즐이 완성되었는지 확인
    const isFinished = puzzle.every((piece, index) => {
      return piece.id === index;
    });

    if (isFinished) {
      navigate("/celebrate", { state: { message: message } });
    }
  };

  const swapPuzzle = (index1, index2) => {
    const updatedPuzzle = [...puzzle];
    [updatedPuzzle[index1], updatedPuzzle[index2]] = [
      updatedPuzzle[index2],
      updatedPuzzle[index1],
    ];
    setPuzzle(updatedPuzzle);
  };

  return (
    <div className="puzzle-container">
      <div className="slide-puzzle">
        {puzzle.map((piece, index) => (
          <div
            key={piece.id}
            className={`puzzle-piece ${
              index === selectedIndex ? "selected" : ""
            }`}
            style={piece.style}
            onClick={() => handlePieceClick(index)}
          />
        ))}
      </div>
      <div className="puzzle-info-container">
        <div className="puzzle-info">
          <div className="category">
            <span>카테고리: </span>
            {category}
          </div>
        </div>
        <div className="puzzle-info">
          <div className="hint">
            <span>힌트: </span>
            {hint}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SolvePuzzle;
