import { createGlobalStyle } from "styled-components";

export const TableStyles = createGlobalStyle`
    .data-table{
        width: 100%;
        overflow-x: auto;

        table{
            width: 100%;
            background-color: var(--light-gray);
    display: flex;
    flex-direction: column;
    background-color: var(--light-gray);
    gap: 1.5rem;
}

tbody{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

th{
    background-color: #fff;
    font-weight: 600;
    font-size: 1.4rem;
    padding: 1rem 0;
    width: 10rem;
    text-align: start;
}

tr{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 1rem 2rem;
    align-items: center;
    border-radius: 1rem;
    gap: 1rem;
}

td{
    padding: 0.5rem 0;
    cursor: pointer;
    font-size: 1.4rem;
    color: #585562;
    display: flex;
    align-items: center;
    gap: 1.5rem;

}
    }
`;