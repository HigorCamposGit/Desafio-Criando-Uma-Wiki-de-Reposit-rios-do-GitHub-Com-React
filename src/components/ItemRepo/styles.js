import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    /* Estilo geral para transformar os links em botões */
    a {
        display: inline-block;
        background-color: #2D3748; /* Fundo cinza */
        padding: 8px 16px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        margin-right: 12px;
        margin-bottom: 20px;
        transition: background-color 0.2s;
    }

    /* Link "Ver repositório" (Letra azul) */
    a:not(.remover) {
        color: #3182CE;
    }

    a:not(.remover):hover {
        background-color: #3A4A60;
    }

    /* Botão "Remover" (Letra vermelha) */
    a.remover {
        color: #FF0000;
        margin-top: 0; /* Removemos o margin-top antigo para ficarem alinhados */
    }

    a.remover:hover {
        background-color: #4A2828;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`;