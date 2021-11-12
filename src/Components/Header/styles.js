import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    width: 100%;
    height: 4.5rem;
    align-items: center;
    padding: 0 8%;
    position: relative;
    top: 3.75rem;
    margin-bottom: 7.2rem;

    ul {
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

    div {
        cursor: pointer;
    }

    div.sp_cart {
        margin-left: 1.5rem;
    }
`;