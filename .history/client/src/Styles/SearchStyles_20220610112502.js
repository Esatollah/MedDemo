import styled from 'styled-components';

export const SearchWrap = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1000px) {
             width: 1000px;
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
}

.table-container {
    max-height: 200px;
    max-width: 80%;
    min-width:80%;
    overflow-y: auto;
}


.drug-row:hover {
    background-color: beige;
}

.drugtable tr {
border: 1px;
}

.search-container {
    width: 90%;
    min-width: 90%;

    @media(min-width: 1000px) {
        display:flex;
        flex-flow: row ;
        align-items: center;
    }
    .table-container {
        width :100%;
        height: 150px;

         @media(min-width: 1000px) {
             width: 40%;
         }
    }

    .cart-container {
        width: 100%;
        @media(min-width: 1000px) {
             width: 60%;
         }

    }

}

`;