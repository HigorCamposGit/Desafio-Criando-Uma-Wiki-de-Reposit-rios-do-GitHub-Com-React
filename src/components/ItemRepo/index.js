import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {

  const handleRemove = (e) => {
    e.preventDefault(); // Evita comportamentos indesejados de links
    handleRemoveRepo(repo.id);
  }

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        
        {/* Link para abrir o repositório numa nova aba */}
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a>
        <br />
        
        {/* Botão de remover que chama a função apenas ao ser clicado */}
        <a href="#" onClick={handleRemove} rel="noreferrer" className="remover">Remover</a>
        
        <hr />
    </ItemContainer>
  );
}

export default ItemRepo;