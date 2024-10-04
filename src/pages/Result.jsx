import React, {useState, useEffect} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from 'react-bootstrap';
import { ResultData } from '../assets/resultdata';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #fff;
`;

const Header = styled.div`
  font-size: 40px;
  color: #fff;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
`;

const LogoImg = styled.div`
  & > img {
    width: 200px;
    height: 200px;
    border: 4px solid #fff;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 20px;
  text-align: center;
`;


const Result = () => {
  const [resultData, setResultData] = useState({});
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate("/Question");
  };

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  console.log(resultData)

  return (
    <Wrapper>
    <Header>예비집사 판별기</Header>
    <Contents>
      <Title>결과 보기</Title>
      <LogoImg>
        <img className='rounded-circle' src={resultData.image} />
      </LogoImg>
      <Desc>😽예비집사님과 찰떡궁합인 고양이는😽 <br/> {resultData.best}형 {resultData.name}</Desc>
      <Button onClick={handleClickBtn}>테스트 다시하기</Button>
    </Contents>
  </Wrapper>
  )
}

export default Result