import React from 'react';
import { withNamespaces } from 'react-i18next';
import '@styles/LoadingSpinner.css';

const LoadingSpinner = ({t}) => {
  return (
    <div className='container-spinner'>
        <div className="loading-spinner">
            <div className="spinner"></div>
            <div>{t('LOADING')}</div>
        </div>
    </div>
  );
};

export default withNamespaces()(LoadingSpinner);
