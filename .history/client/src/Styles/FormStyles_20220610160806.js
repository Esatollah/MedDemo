import styled from 'styled-components';

export const FormWrap = styled.div`
    display:flex;
    margin:auto;
    max-width:350px;
    margin-top: 20px;
    padding:10px;

    input[type=text] {
        display:inline-block;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 4px;
        border: .5px solid;
        margin: 10px 0;
    }
    .Names {
        width: 100%;
        padding: 10px;
        margin:10px 0;
        border-radius: 4px;
        border: none;
        background: lightgreen;
        font-size:20px
    }
`;