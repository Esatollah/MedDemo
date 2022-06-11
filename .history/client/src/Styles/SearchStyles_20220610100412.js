import styled from 'styled-components';

export const SearchWrap = styled.div`

    justify-content: center;
    display: flex;
    flex-direction: row;

    #search {
    width:80%;
    height: 2rem;
    outline:none;
    border-top: hidden;
    border-right: hidden;
    border-left: hidden;
    font-size: 2rem;
}

.table-container {
    max-height: 200px;
    max-width: 80%;
    min-width:80%;
    overflow-y: auto;
}


.search-container {
    max-width:40%;
}

.drug-row:hover {
    background-color: beige;
}

.search-container {
    width: 90%;
    .table-container {
        width :100%;
        height: 150px;
        background-color:gray;
        
    }

}

`;