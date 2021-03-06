import { useState, useEffect } from "react";
import styled from "styled-components";
// import axios from "axios";
import ChangeName from "./ChangeName";
import ChangePassword from "./ChangePassword";

const MypageMyinfoName = styled.div`
	z-index: 10;
	font-size: 2rem;
	font-weight: bolder;
	margin-top: 20px;
	margin-bottom: 5px;
`;
const MypageFixMyinfoToggleBtn = styled.span`
	margin: 5px 0 5px 0;
	opacity: 0.5;
	cursor: pointer;
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
`;
const MypageFixToggleContainer = styled.form`
	padding: 5px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
`;

function ChangeMyinfo() {
	// const accessToken = localStorage.getItem("accessToken");
	// const Oauth = localStorage.getItem("Oauth");
	// console.log(Oauth);

	const [userInfo, setUserInfo] = useState("");
	const [fixNameToggle, setFixNameToggle] = useState(false);
	const [fixPasswordToggle, setFixPasswordToggle] = useState(false);
	const [loading, setLoading] = useState(true);
	const fixNameToggleHandler = () => {
		setFixNameToggle(!fixNameToggle);
	};
	const fixPasswordToggleHandler = () => {
		setFixPasswordToggle(!fixPasswordToggle);
	};

	// const userInfoHandler = () => {
	// 	if (!accessToken) {
	// 		window.location.replace("/");
	// 	} else {
	// 		setLoading(true);
	// 		axios
	// 			.get(`${process.env.REACT_APP_API_URL}/users`, {
	// 				headers: { authorization: `Bearer ${accessToken}` },
	// 				"Content-Type": "application/json",
	// 			})
	// 			.then(res => {
	// 				console.log(res);
	// 				console.log(res.data.data);
	// 				setUserInfo(res);
	// 				setLoading(false);
	// 				console.log("개인정보가져오기 성공");
	// 			})
	// 			.catch(err => {
	// 				console.log("개인가져오기 에러", err);
	// 			});
	// 	}
	// };
	// useEffect(() => {
	// 	userInfoHandler();
	// }, []);

	return (
		<>
			<div>
				{/* <FontAwesomeIcon icon={faUserCircle} className="photo-icon" /> */}
			</div>
			{/* <My.MypageMyinfoNickname>오늘 뭐먹지?</My.MypageMyinfoNickname> */}
			<MypageMyinfoName>
				{/* 닉네임: {userInfo && userInfo.data.data.userInfo.nickname} 님 */}
				닉네임: 정윤혁 님
			</MypageMyinfoName>
			<MypageMyinfoName>
				{/* 이메일: {userInfo && userInfo.data.data.userInfo.email} */}
				이메일: richard@naver.com
			</MypageMyinfoName>
			<MypageFixMyinfoToggleBtn onClick={fixNameToggleHandler}>
				닉네임 수정
			</MypageFixMyinfoToggleBtn>
			{fixNameToggle ? (
				<MypageFixToggleContainer onSubmit={e => e.preventDefault()}>
					<div className="nickname-container">
						<ChangeName />
					</div>
				</MypageFixToggleContainer>
			) : null}
			{/* {Oauth === "true" ? (
				<MypageFixMyinfoToggleBtn disabled={true}>
					소셜 계정은 비밀번호 수정을 하실 수 없습니다.
				</MypageFixMyinfoToggleBtn>
			) : ( */}
			<MypageFixMyinfoToggleBtn onClick={fixPasswordToggleHandler}>
				비밀번호 수정
			</MypageFixMyinfoToggleBtn>
			{/* )} */}
			{fixPasswordToggle ? (
				<MypageFixToggleContainer onSubmit={e => e.preventDefault()}>
					<div className="password-container">
						<ChangePassword />
					</div>
				</MypageFixToggleContainer>
			) : null}
			<div>
				<button
					className="submit"
					onClick={() => {
						window.location.replace("/signout");
					}}
				>
					회원탈퇴
				</button>
			</div>
		</>
	);
}
export default ChangeMyinfo;
