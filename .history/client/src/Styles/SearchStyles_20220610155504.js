import styled from 'styled-components';

export const SearchWrap = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1000px) {
             width: 1000px;
             margin:auto;
         }

    #search {
    width:50%;
    height: 2rem;
    outline:none;
    border-top: hidden;
    border-right: hidden;
    border-left: hidden;
    font-size: 1rem;@media(min-width: 1000px) {
             width: 40%;
         }
    margin-bottom: 10px; 
}

.table-container {
    max-height: 400px;
    max-width: 80%;
    overflow-y: auto;
}


.drug-row:hover {
    background-color: beige;
}

.drugtable tbody tr {
border: 1px;
}

.search-container {
    width: 90%;

    @media(min-width: 1000px) {
        display:flex;
        flex-direction: row;
        justify-content: center;
        gap: 28px;
    }

    .table-container {
        width :100%;
        height: 150px;
        display:flex;
         @media(min-width: 1000px) {
             width: 40%;
             display:flex;
         }
    }

    .cart-container {
        width: 100%;
        display:flex;
        @media(min-width: 1000px) {
             width: 40%;
             display:flex;
         }
    }
}

`;