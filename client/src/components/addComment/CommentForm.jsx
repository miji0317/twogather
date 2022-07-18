import styled from "styled-components";

// 이용후기 작성, QnA 작성, QnA 답변 과 같은 페이지 타이틀
export const CommentTitle = styled.h1`
  color: #bbd3f2;
`;

// 게시물 정보
export const CommentInfo = () => {
  return (
    <CommentInfoContainer>
      <table className="comment-info">
        <tbody>
          <tr>
            <td style={{ fontWeight: "bold" }}> 공간명: </td>
            <td> 딘어게인성수 - 브라이덜 샤워 생일파티 </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}> 작성자: </td>
            <td> 닉네임 </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}> 작성일 </td>
            <td> 2022-02-02 </td>
          </tr>
        </tbody>
      </table>
    </CommentInfoContainer>
  );
};

// 입력란
export const CommentInput = ({ commentType, placeholder }) => {
  return (
    <div>
      <h4 style={{ color: "#BBD3F2" }}>{commentType}</h4>
      <CommentTextArea placeholder={placeholder}></CommentTextArea>
    </div>
  );
};

export const StarDiv = () => {
  return (
    <div>
      <span>별점: </span>
    </div>
  );
};

export const AddCommentBtnDiv = () => {
  return (
    <BtnContainer>
      <button>취소</button>
      <button style={{ backgroundColor: "#8DAEF2" }}>작성 완료</button>
    </BtnContainer>
  );
};

const CommentInfoContainer = styled.div`
  width: 20rem;
  margin: 3rem;
  background-color: ;
`;
const CommentTextArea = styled.textarea`
    width: 60vw;
    height: 10rem;
    placeholder: {props => props.value}
    padding: 1rem;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  button {
    border: none;
    width: 50%;
    height: 2rem;
    margin: 2rem 1rem;

    :hover {
    }
  }
`;
