import styled from "styled-components";
import { Button } from "../styled/Button";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

const StartGame = ()=>{
  const token = useSelector((state)=>state.auth.token)
  // console.log(token)
   return (
    <Container className="flex flex-col justify-center md:justify-start md:flex-row ">
      <div className="w-30 md:w-auto">
        <img src="/images/dices.png" />
      </div> 
      <div className="content flex flex-col gap-4 md:gap-8">
        <h1 className="text-6xl md:text-[92px]">Dice Game</h1>
        <Link to={"/playgame"}><Button>Play Now</Button></Link>
      </div>
    </Container>
  );
}
export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 80vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;
