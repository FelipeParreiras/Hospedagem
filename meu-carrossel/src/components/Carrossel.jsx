import { useEffect, useState } from 'react';
import './Carrossel.css'; // Vamos criar esse CSS depois
import img1 from '../assets/Imagem Carrosesl(1).jpg';
import img2 from '../assets/Imagem Carrosesl(2).jpg';
import img3 from '../assets/Imagem Carrosesl(3).jpg';
import img4 from '../assets/Imagem Carrosesl(4).jpg';
import img5 from '../assets/Imagem Carrosesl(5).jpg';

const imagens = [img1, img2, img3, img4, img5];

const Carrossel = () => {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % imagens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carrossel-container">
      <img src={imagens[indice]} alt={`Imagem ${indice + 1}`} className="carrossel-imagem" />
    </div>
  );
};

export default Carrossel;
