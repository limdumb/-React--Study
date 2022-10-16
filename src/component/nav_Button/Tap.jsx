/*
[목적구분]
1. 3개의 탭버튼을 구현한다.
2. 클릭된 해당탭만 활성화되어 내용보여주기
   (탭의 내용은 중복금지)

[탭별요구사항]

step1 : 과제로 진행했던 Rating에 대한 기능설명이 나오도록 구현!



step2 : 버튼클릭시에 새로운 모델 컴포넌트 창이 떠야하며 해당창은 반응형이여야한다.(중앙배치요망)

step3 : Switch 와 동일하게 기능설명을 하고 Switch를 클릭시 alert 창에 스터디 1기 끝난후기

**step1 선택사항 : 스크롤로 구현할지 or 슬라이드 처리로 구현할지
**step2 선택사항 : 애니메이션을 추가 구현할지
**step3 선택사항 : 애니메이션을 추가 구현할지
 
*/



function Tap(){
    return(
        
        <div id="layout">
            <ul className="Tap_title">
                <li>step1</li>
                <li>step1</li>
                <li>step1</li>
            </ul>
            <div className="Tap_content">
                {/* 컴포넌트작성 */}
                <h1>테스트영역</h1>
            </div>
        </div>

    )
}


export default Tap;