import styled from 'styled-components';

export const FormWrap = styled.div`
    display:flex;
    margin:auto;
    max-width:350px;
    margin-top: 20px;
    padding:10px;

    .Names {
        display:inline-block;
        width: 95%;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 4px;
        border: .5px solid;
        margin: 10px 0;
        font-size: 1.5rem;
    }
    input[type=submit] {
        width: 95%;
        padding: 10px;
        margin:10px 0;
        border-radius: 4px;
        border: none;
        background: lightgreen;
        font-size:20px
    }
    .insurance {
        padding: 10px;
        box-sizing: border-box;
        border-radius: 4px;
        border: .5px solid;
        margin: 10px 0;
        font-size:1.5rem;
    }
    #pin {
        width:38%;
    }
    #bday {
        width:57%;
    }

    textarea {
        width: 95%;
        resize:none;
        font-size: 1.25rem;
        font-family: sans-serif
    }
`;
