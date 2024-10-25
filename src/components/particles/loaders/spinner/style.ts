import styled from "styled-components";

export const SpinnerContainer = styled.div`
.sm-primary-loader{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border-top: 3px solid transparent;
    border-left: 3px solid var(--white);
    border-right: 3px solid var(--white);
    border-bottom: 3px solid var(--white);
    animation: loader 2s linear infinite;
}
@keyframes loader{
0%{
    rotate: -360deg;
}100%{
    rotate: 360deg;
}
}
`