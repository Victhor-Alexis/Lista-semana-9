import styled from "styled-components"

export const Container = styled.div`
    width: 20rem;
    height: 14rem;
    margin-bottom: 2rem;
    border: 1px solid green;

    img {
        width: 100%;
        height: 80%;
        background-color: #ccc;
        max-height: 12rem;
    }

    div.text {
        display: flex;
        color: white;
        font-size: 18px;
        margin: 1% 0 0 7%;

        svg {
            margin-right: 0.4rem;
        }
    }

    @media screen and (max-width: 1800px) {
    }
`;
