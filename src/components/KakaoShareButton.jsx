import React, {useEffect} from 'react';
import { Button } from 'react-bootstrap';

const {Kakao} = window;

const KakaoShareButton = ({data}) => {
  const url = "https://catmbtiyz02.netlify.app/";
  const resultURL = window.location.href;
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("4f55ea4cea549a63970ad8c7999b17a7");
  }, []);


const shareKakao = () => {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '예비집사 판별기 결과',
      description: `예비집사님이 고양이를 키운다면 가장 잘 어울리는 고양이는 ${data.name} 입니다.`,
      imageUrl:
        `${url}${data.image}`,
      link: {
        mobileWebUrl: resultURL,
        webUrl: resultURL,
      },
    },
    buttons: [
      {
        title: '나도 테스트 하러가기',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
}

return <Button onClick={shareKakao}>카카오톡 공유하기</Button>

}

export default KakaoShareButton