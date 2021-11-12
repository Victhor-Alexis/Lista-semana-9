import styled from "styled-components"

export const Container = styled.div`
    max-width: 20rem;
    width: 100%;
    height: 14.5rem;

    img {
        width: 100%;
        height: 12rem;
        background-color: #ccc;
    }

    div.text {
        display: flex;
        align-items: center;
        color: white;
        font-size: 18px;
        
        svg {
            margin-right: 0.4rem;
        }
    }
`;
