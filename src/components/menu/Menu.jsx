import React, { useContext } from 'react';
import './Menu.css';
import { TemaContexto } from '../../App';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
	const {dark, setDark} = useContext(TemaContexto);
	const navigate = useNavigate();

	const navegar = (pagina)=>{
		navigate(pagina);
	}

	
  return (
    <div className={`menu ${dark?'dark':'light'}`}>
      <ul>
        <li onClick={()=>navegar("/")}>Home</li>
		<li onClick={() => navegar("/produtos")}>Produtos</li>
        <li onClick={()=>setDark(!dark)}>Mudar Tema</li>		
      </ul>
    </div>
  );
};

export default Menu;