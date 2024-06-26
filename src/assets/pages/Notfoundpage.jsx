import React from 'react';
import '../style/Notfoundpage.scss'

const NotFoundPage = () => {
  return (
    <div>
      <h1 className="not-found-title">404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p className="link"><a href="/">Retourner sur la page d'accueil</a></p>
    </div>
  );
}

export default NotFoundPage;
