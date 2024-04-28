import React from 'react';
import '../style/Notfoundpage.scss'

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p className="link"><a href="/">Retourner sur la page d'accueil</a></p>
      {/* Vous pouvez personnaliser davantage cette page d'erreur selon vos besoins */}
    </div>
  );
}

export default NotFoundPage;
