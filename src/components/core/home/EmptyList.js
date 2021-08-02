import styled from "styled-components"
import noData from "./../../images/no_data.svg";

const StyledEmptyList = styled.div`
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;

    img {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
    }
`;

export const EmptyList = () => {


    return (
        <StyledEmptyList>
            <img src={noData} alt="" />
            <p>No invoices to display</p>
        </StyledEmptyList>
    )
}