# MakeUpWeb✨
💡 사용자 맞춤 화장품 주문 제작 및 추천 웹 사이트   
💡 OpenAPI Text generation 활용
***
## 🔍 기능 설명
### 📍 AI 추천 페이지   
- 입력창   
![image1](https://github.com/gitseoyeon/MakeUpWeb/assets/126096318/3163d8d7-2ed2-4e2f-b13a-a8d537424c1f)
- 출력창   
![image2](https://github.com/gitseoyeon/MakeUpWeb/assets/126096318/9b3fb9a1-a534-4a53-bdbb-b3fbd63cbf64)
- 사용자가 원하는 옵션을 입력하면 그에 맞는 화장품을 추천해줌   
- javascript와 ajax를 활용해서 API 호출   
```
npm install openai; 
```
```
const api_key = "발급 받은 API 키";
```    
- 입력 프롬프트를 미리 생성해서 명령을 하도록 함   
```
const messages = [
            { role: 'system', content: 'You are a helpful assistant.' },
            {
                role: 'user',
                content: `화장품을 추천받고 싶어. 추천받고 싶은 화장품 종류는 ${cosmeticType} 야.
                                내가 선호하는 컬러는 ${favoriteColor}고, 비선호하는 컬러는 ${dislikedColor}야.
                                ${favoriteTexture} 같은 텍스쳐였으면 좋겠어. 몇 개 추천해줘 `
            },
        ];
```    
### 📍 맞춤 주문 서비스
- 화장품 선택에 따라 제공되는 세부 사항에 따라 원하는 데이터를 넣고 그것을 기반으로 한 화장품을 주문할 수 있음   
- 이때, 선택하는 화장품마다 세부 사항은 다름   
![image](https://github.com/gitseoyeon/MakeUpWeb/assets/126096318/e0780c99-f247-44d0-87d6-17c80c66c655)
### 📍 마이페이지
- 주문 내역 및 사용자 정보 확인
### 📍 게시판 페이지
- 사용자 간 소통 페이지
