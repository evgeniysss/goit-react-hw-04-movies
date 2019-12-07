import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const NotFoundPage = () => {
  return (
    <>
      <div>
        <span>
          Запрошенная по ссылке страница не найдена, попробуйте обратиться к
          разработчику!
        </span>
        <h3>
          Ссылка на Домашнюю страницу:
          <NavLink to={routes.HOME}> КЛИК-КЛИК-КЛИК!</NavLink>
        </h3>
      </div>
    </>
  );
};

export default NotFoundPage;
