import styled from "styled-components";

export const HeaderNavWrapper = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    line-height: 2;
    li {
        display: flex;
        a,
        a:visited,
        a:hover,
        a:focus,
        a:active {
            align-items: center;
            display: flex;
            padding: 0 2rem;
            color: #000;
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: none;
            &.is-active {
                background-color: #d4d4d4; /* $light-gray */
            }
        }
    }
`;

export const HeaderWrapper = styled.div`
    position: relative;
    display: flex;
    flex: none;
    width: 100%;
    height: ${(props) => props.theme.headerHeight};
    box-shadow: 0 10px 12px -8px rgba(0, 0, 0, 0.1); /* $box-shadow--bottom */
    z-index: 3; /* $z-index--header */
    > div {
        display: flex;
    }
`;
