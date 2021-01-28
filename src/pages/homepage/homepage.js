import React from 'react';
import Directory from '../../components/directory/directory';
import MenuIteam  from '../../components/menu-item/menu-item';
import './homepage.styles.scss';

 const HomePage = ({history}) => {
  return (
    <div className='homepage'>
   <Directory history={history} />
</div>
  );

}

export default HomePage;