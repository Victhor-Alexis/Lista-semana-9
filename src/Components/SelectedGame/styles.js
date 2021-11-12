import styled from "styled-components"

export const Container = styled.div`
    display: inline-block;
    max-width: 39.75rem;
    width: 100%;
    height: 31rem;
    margin-left: 8%;
    background-color: #2A2A2A;

    img {
        width: 100%;
        height: 47%;
        background-color: #ccc;
    }

    div.holder {
        padding: 1.5rem 8%;
        display: flex;
        justify-content: space-between;
        
        svg {
            display: inline-block;
            margin-right: 0.5rem;
        }

        h1 {
            display: inline-block;
            font-size: 24px;
            color: white;          
        }

        p {
            color: #A9A9A9;
            font-size: 18px;
        }

        .block1 p {
            margin-left: 1.5rem;
        }
    }

    .line {
        width: 45%;
        border: 2px solid #7CA431;
        position: relative;
        top: 15%;
    }

    button {
        margin: 5% 0 0 45%;
    }

    @media screen and (max-width: 1800px) {
        display: block;
        margin: 0 auto 4rem auto;
    }

    @media screen and (max-width: 700px) {
        button {
            margin: 2rem auto 0 auto;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            z-index: 999;
        }

        .line {
            display: none;
        }
    }

    @media screen and (max-width: 500px) {
        div.holder {
            h1 {
                font-size: 18px;
            }

            p {
                font-size: 12px;
            }
        }

        button {
            font-size: 18px;
        }
    }
`;
