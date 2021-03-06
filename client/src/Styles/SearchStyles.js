import styled from 'styled-components';

export const SearchWrap = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
             margin: auto;

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
    font-size: 1rem;
    
    @media(min-width: 1000px) {
             width: 40%;
         }
    margin-bottom: 10px; 
}

.table-container {
    max-height: 200px;
    max-width: 100%;
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
    }

    .table-container {
        width :100%;
        height: 250px;
        display:flex;
         @media(min-width: 1000px) {
             width: 40%;
             display:flex;
             height: 400px;
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

td {
    padding-top:10px;
    padding-bottom:10px;

    @media(min-width: 1000px) {
        padding-top:5px;
        padding-bottom:5px;
    }
}

`;