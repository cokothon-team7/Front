import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./solve-puzzle.css";

export default function SolvePuzzle() {
  const { puzzleId } = useParams();

  const [puzzle, setPuzzle] = useState([]);
  const [emptyIndex, setEmptyIndex] = useState(0);

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
    // 이미지 URL 또는 이미지 파일을 사용할 수 있습니다.
    const imageUrl = `/api/puzzles/${puzzleId}/image`; // 이미지 URL을 업데이트하세요.

    const pieces = [];
    for (let i = 0; i < 16; i++) {
      pieces.push({
        id: i,
        style: {
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: `-${(i % 4) * 100}px -${
            Math.floor(i / 4) * 100
          }px`,
        },
      });
    }

    // 마지막 조각을 빈 조각으로 설정
    pieces[15].style.backgroundImage = "none";

    const shuffledArr = shufflePuzzle(pieces);

    setPuzzle(shuffledArr);

    const emptyIndex = shuffledArr.findIndex((piece) => piece.id === 15);
    setEmptyIndex(emptyIndex);
  };

  const handlePieceClick = (clickedIndex) => {
    // 클릭한 조각과 빈 조각을 교환
    if (isAdjacent(clickedIndex, emptyIndex)) {
      const updatedPuzzle = [...puzzle];
      [updatedPuzzle[clickedIndex], updatedPuzzle[emptyIndex]] = [
        updatedPuzzle[emptyIndex],
        updatedPuzzle[clickedIndex],
      ];
      setPuzzle(updatedPuzzle);
      setEmptyIndex(clickedIndex);
    }
  };

  const isAdjacent = (index1, index2) => {
    // 두 조각이 서로 인접한지 확인
    const diff = Math.abs(index1 - index2);
    return (
      (diff === 1 && Math.floor(index1 / 4) === Math.floor(index2 / 4)) ||
      diff === 4
    );
  };

  return (
    <div className="slide-puzzle">
      {puzzle.map((piece, index) => (
        <div
          key={piece.id}
          className="puzzle-piece"
          style={piece.style}
          onClick={() => handlePieceClick(index)}
        />
      ))}
    </div>
  );
}
