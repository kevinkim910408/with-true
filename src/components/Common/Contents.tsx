import styled from "styled-components";
import { colors } from "@/utils/YoontilColors";
const Contents = () => {
  return (
    <ContentsWrapper>
      <ContentsHeader>
        <HeaderDotsWrapper>
          {[colors.miffy.red, colors.miffy.yellow, colors.miffy.green].map(
            (value) => {
              return (
                <div
                  className="dots"
                  key={`dots-${value}`}
                  style={{ backgroundColor: `${value}` }}
                />
              );
            }
          )}
        </HeaderDotsWrapper>
        <span>Dynamic Cards</span>
      </ContentsHeader>
    </ContentsWrapper>
  );
};

export default Contents;

const ContentsWrapper = styled.div`
  width: 400px;
  height: 280px;
  border-radius: 10px;
  background-color: white;
`;

const ContentsHeader = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  span {
    color: #0c0c0c3a;
    font-size: 14px;
  }
`;

const HeaderDotsWrapper = styled.div`
  display: flex;
  gap: 5px;
  .dots {
    width: 10px;
    height: 10px;
    border-radius: 7px;
  }
  /* border: 1px solid blue; */
`;
