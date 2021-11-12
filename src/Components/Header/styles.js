import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    width: 100%;
    height: 4.5rem;
    align-items: center;
    padding: 0 4%;
    margin-top: 3.75rem;
    margin-bottom: 7.2rem;

    ul.desktop {
        list-style-type: none;
        margin: 0 auto;
        
        li {
            display: inline-block;
            margin: 0 2rem;

            a {
                font-size: 18px;
                color: #747474;
                text-decoration: none;
            }
        }
    }

    ul.mobile {
        display: none;
    }

    div {
        cursor: pointer;
    }

    div.sp_cart {
        margin-left: 1.5rem;
    }

    @media screen and (max-width: 700px) {
        ul.desktop {
            display: none;
        }

        ul.mobile {
            display: block;
            margin: 0 auto;
            cursor: pointer;
            text-align: center;

            span {
                display: block;
                width: 3rem;
                border: 2px solid #7CA431;
                margin-bottom: 0.5rem;
                margin-left: 3rem;
            }

            li {
                display: none;
            }
        }
    }
`;