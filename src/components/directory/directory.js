import React from 'react';
import  MenuIteam from '../menu-item/menu-item';
import './directory.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import  {selectDirectorySections} from '../../redux/directory/directory-selectors';

const Directory = ({sections}) => (
        <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps}) => (
            <MenuIteam key={id} {...otherSectionProps}  />
          ))}
        </div>
       )

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);