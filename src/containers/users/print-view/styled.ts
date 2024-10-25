import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 2rem;

h1{
  padding-bottom: 2rem;
  font-weight: 600;
}

.print-container{
  background-color:var(--white);
  width: 100%;
  padding: 5rem;
}
`
export const CardContainerTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: auto;
  align-items: center;
  padding-bottom: 5rem;
  border-bottom: 2px solid rgba(128, 141, 158, 1);
  color: rgba(12, 58, 45, 1);



    h1{
  font-size: 4rem;
}

    p{
      font-size: 2.4rem;
      color: rgba(12, 58, 45, 1);
    }

`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: auto;
  border-bottom: 1px solid #0000001A;
  padding: 5rem 0;
  color: rgba(12, 58, 45, 1);


    h1{
      padding-top: 1rem;
      font-size: 2.8rem;
      color: #121212;
}


`;



export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  min-width: 40rem;
  background-color:var(--white);

  table{
    background-color:var(--white);
  }

.total{
  width: 100%;
  
  .total-cart{
    padding-top: 5rem;
    position: relative;
    float: inline-end;

    h1{
      font-weight: 700;
      font-size: 4.4rem;
      color: #0C3A2D;
    }
    h5{
      font-weight: 700;
      font-size: 2.4rem;
      color: #0C3A2D;
    }

  }
}

th {
    padding-bottom: 1rem !important;
    text-align: start;
  }

  td{
    width: 10rem;
  }

tr {
    padding: 0 !important;
  }
`;
