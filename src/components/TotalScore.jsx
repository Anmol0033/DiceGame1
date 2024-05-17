import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <div className="flex items-center justify-center flex-col mb-4">
      <h1 className="text-[60px] md:text-[80px]">{score}</h1>
      <p className="text-[18px] md:text-[24px] font-bold">Total Score</p>
    </div>
  );
};

export default TotalScore;

// const ScoreContainer = styled.div`
//   max-width: 200px;
//   text-align: center;
//   h1 {
//     font-size: 100px;
//     line-height: 100px;
//   }
//   p {
//     font-size: 24px;
//     font-weight: 500px;
//   }
// `;
