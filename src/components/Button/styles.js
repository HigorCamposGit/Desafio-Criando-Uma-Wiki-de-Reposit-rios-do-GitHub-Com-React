import styled from "styled-components";

export const ButtonContainer = styled.button`

    background-color: #2D3748; /* Cinza no estado normal */
    border: 1px solid #FAFAFA;
    border-radius: 20px;

    height: 62px;
    width: 80%;

    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF; /* Letras brancas para destacar */

    margin: 20px;

    &:hover {
        background-color: #000000; /* Preto ao passar o mouse */
        cursor: pointer;
    }

`;