import { useState } from "react";
import styled from "styled-components";
// import axios from "axios";

const Container = styled.div`
	margin: 0 auto;
	width: 550px;
	font-weight: 700;
	text-align: left;
	transform: translateY(20%);
	border: 2px solid #ffba34;
	background-color: white;
	border-radius: 20px;
`;
const ContentContainer = styled.div`
	padding: 10px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	text-align: center;
`;
const Title = styled.div`
	font-size: 20px;
	font-weight: bolder;
	margin-bottom: 5px;
	text-align: center;
`;
const ContentText = styled.div`
	font-size: 15px;
	line-height: 25px;
`;
const CheckboxContainer = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	width: 70%;
	margin: 20px;
	margin-bottom: 10px;
	.checkbox-input-check {
		margin-right: 15px;
	}
	.checkbox-agree-text {
		font-size: 12px;
		color: #fd5d5d;
	}
`;
const MiddleContainer = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	.fill-text {
		margin-bottom: 10px;
		color: #fd5d5d;
	}
	.fill-input {
		border: 2px solid white;
		-webkit-box-shadow: gray 3px 3px 3px 3px;
		box-shadow: gray 3px 3px 3px 3px;
		border-radius: 5px;
		-webkit-transition: 120ms ease all;
		transition: 120ms ease all;
	}
	.fill-input:focus {
		outline: none;
		-webkit-box-shadow: gray 2px 2px 2px 2px;
		box-shadow: gray 2px 2px 2px 2px;
		border: black solid 2px;
	}
`;
const SubmitBtnDiv = styled.div`
	margin-top: 30px;
	width: 100%;
	height: 100px;
	margin-right: 10px;
	display: flex;
	& > button {
		padding: 6px 6px;
		background-color: #ffba34;
		border-radius: 4px;
		border: none;
		color: white;
		cursor: pointer;
		height: 50px;
	}
	.cancel {
		margin-left: auto;
		margin-right: 5px;
	}
`;

function SignoutForm({ close }) {
	// const accessToken = localStorage.getItem("accessToken");

	const [agreeChecked, setAgreeChecked] = useState(false);
	const [fillText, setFillText] = useState("");

	const agreeCheckHandler = () => {
		setAgreeChecked(!agreeChecked);
	};
	const fillCheckHandler = e => {
		setFillText(e.target.value);
	};

	const signoutSubmitHandler = () => {
		if (!accessToken) {
			return;
		}
		axios
			.delete(`${process.env.REACT_APP_API_URL}/users`, {
				headers: { authorization: `Bearer ${accessToken}` },
				"Content-Type": "application/json",
			})
			.then(res => {
				console.log("회원탈퇴성공");
				localStorage.removeItem("accessToken");
				localStorage.removeItem("email");
				alert("회원 탈퇴가 완료되었습니다.");
				// openAlertHandler();
				window.location.replace("/");
			})
			.catch(err => {
				alert("잘못된 요청입니다");
				// openWarningAlertHandler();
				console.log("회원탈퇴실패", err);
			});
	};
	return (
		<>
			<Container>
				<ContentContainer>
					<Title>탈퇴 안내</Title>
					<ContentText>
						회원탈퇴를 신청하기 전에 안내사항입니다. <br />
						오늘 뭐먹지에서 등록하셨던 개인정보는 모두 삭제되며, 다시 복구 할 수
						없습니다.
					</ContentText>
					<br />

					<ContentText>회원탈퇴 전에 안내사항을 확인해주세요.</ContentText>
					<CheckboxContainer>
						<input
							className="checkbox-input-check"
							type="checkbox"
							onClick={agreeCheckHandler}
						/>
						<div className="checkbox-agree-text">
							안내사항에 동의하면 체크해주세요.
						</div>
					</CheckboxContainer>
					<MiddleContainer>
						<div className="fill-text">[회원탈퇴]를 입력해주세요.</div>
						<input className="fill-input" onChange={fillCheckHandler} />
					</MiddleContainer>
					<div>
						<SubmitBtnDiv>
							{agreeChecked === true && fillText === "회원탈퇴" ? (
								<button
									className="submit"
									disabled={false}
									onClick={signoutSubmitHandler}
								>
									탈퇴하기
								</button>
							) : (
								<button className="submit" disabled={true}>
									탈퇴하기
								</button>
							)}
							<button
								className="cancel"
								onClick={() => window.location.replace("/")}
							>
								취소 (홈으로)
							</button>
						</SubmitBtnDiv>
					</div>
				</ContentContainer>
			</Container>
		</>
	);
}

export default SignoutForm;
