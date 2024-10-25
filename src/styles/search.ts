import { createGlobalStyle } from "styled-components";
import calender from 'assets/images/calender.svg'

export const SearchStyles = createGlobalStyle`
.search-container{
    width: 100%;
    background-color:var(--white);
    display: flex;
    gap: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    justify-content: center;
}

.input-fields{
    width: 80%;
    display: flex;
    gap: 1.5rem;
}

select{
    width: 100%;
    font-size: 1.8rem;
    color: var(--text);
}

option{
    font-size: 1.6rem;
}

.search-cart{
    width: 100%;
    display: flex;
    gap: .5rem;
    align-items: center;
    background-color:#FFFFFF1A;
    border-radius: 1rem;
    border: 1px solid #E2E8F0;
    padding: 1rem;
}

.custom-date-input-container {
    position: relative;
    width: 100%; /* Adjust the width as needed */
}

.custom-date-input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 100%;
}

.custom-date-input::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    pointer-events: none;
}

.custom-date-input-container::after {
    content: url(${calender});
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
}
`;