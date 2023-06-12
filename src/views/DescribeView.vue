<template>
    <div>
        <h2>정찬희 20202289</h2>
        <br>
        <hr>
        <h2>간단한 기능 설명</h2>
        <hr>
        <br>
        <h3>메뉴</h3>
        <ul>
            <li>Home: 운동과 프로그램의 몇가지만을 보여주기 위한 페이지</li>
            <li>Exercises: 운동 자세들을 그리드 형태로 나열/ 페이지의 크기에 반응해 열과 행 변환</li>
            <li>Programs: 운동 프로그램 나열</li>
            <li>Log In: 로그인 모달창을 여는 버튼</li>
            <li>Sign Up: 회원가입 페이지로 이동</li>
            <li>MyPage: to list 가 있는 페이지로 이동 /자기소개 페이지 이동 버튼</li>
            <li>Log out: 로그인 상태를 해제 -> login, sign up 버튼이 보이도록 바꿈</li>
            <li>화면크기가 줄어들면 그에 맞게 위치가 바뀌다가 햄버거 버튼으로 메뉴 보기로 바꿈. 버튼 클릭 이벤트에 의해 슬라이드가 나왔다가 들어가는 애니메이션 작동</li>
        </ul>
        <br>
        <h3>로그인 모달 창</h3>
        <ul>
            <li>로그인 창에서 로그인 하면 상태를 바꿔서 Mypage와 Log out 버튼이 보이도록 바꿈</li>
            <li>이벤트 전달을 위해서 $emit 사용</li>
            <li>password 입력칸의 눈 아이콘을 누르면 비밀번호 보이기와 안보이기 가능</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>
