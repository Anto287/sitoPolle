import React from 'react';
import { useTranslation } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import ImgLoader from '@components/ImgLoader';
import '@styles/Topbar.css';
import myIcon from '@images/img_topbar/icon.webp';

const ParalaxHome = ({ showTopBarScrolling }) => {
  const { t } = useTranslation();
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]); 

  return (
    <nav>
      {breakpoint === 0 && 
        <div className='topbar-mobile'>
        
        </div>
      }
      {breakpoint === 1 && 
        <div className='topbar-tablet'>
        
        </div>
      }
      {(breakpoint === 2 || breakpoint === 3) &&
        <div className={`topbar-pc ${showTopBarScrolling ? "visible" : "hidden"}`}>
          <div className='topbar-content'>
            <div className='container-logo'>
              <ImgLoader 
                src={myIcon} 
                style={{minWidth: '40px', width: '40%', height: '90%'}} 
                styleImg={{width: 'auto', height: '100%'}}
                alt={t('THE_POLLE')}
              />
            </div>
            <div className='container-topbar'>
              <div className='container-element' title={t('HOME')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-topbar" viewBox="0 -960 960 960">
                  <path d="M160-200v-295l-40 31q-14 10-30 8t-26-16q-10-14-8-30t15-26l89-68v-84q0-17 11.5-28.5T200-720q17 0 28.5 11.5T240-680v23l191-146q22-17 49-17t49 17l360 275q13 10 15 26t-8 30q-10 13-26 15t-29-8l-41-30v295q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200Zm80 0h200v-120q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320v120h200v-356L480-739 240-556v356Zm0 0h480-480Zm-28-560q-23 0-35.5-19t-1.5-39q17-29 44.5-45.5T280-880q11 0 21-5.5t15-15.5q5-9 13.5-14t19.5-5q23 0 35 19t1 39q-17 29-44.5 45.5T280-800q-11 0-21 5t-15 16q-5 9-13 14t-19 5Z"/>
                </svg>
                <b>{t('HOME')}</b>
              </div>
              

              <div className='container-element' title={t('TANA_DEL_LUPO')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-topbar" viewBox="0 -960 960 960">
                  <path d="M350-200q13 0 21.5-8.5T380-230v-240q26-8 43-28.5t17-49.5v-152q0-8-6-14t-14-6q-8 0-14 6t-6 14v100h-30v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v100h-30v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v152q0 29 17 49.5t43 28.5v240q0 13 8.5 21.5T350-200Zm240 0q13 0 21.5-8.5T620-230v-224q33-16 51.5-51t18.5-82q0-57-28.5-95T590-720q-43 0-71.5 38T490-587q0 47 18.5 82t51.5 51v224q0 13 8.5 21.5T590-200ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-80h640v-640H160v640Zm0 0v-640 640Z"/>
                </svg>
                <b>{t('TANA_DEL_LUPO')}</b>
              </div>
              

              <div className='container-element' title={t('AREA_CAMPING')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-topbar" viewBox="0 -960 960 960">
                  <path d="M80-120v-120q0-13 4-25t12-23l334-450-46-62q-5-7-7-14.5t-1-15q1-7.5 5-14.5t11-12q14-10 30-8t26 16l32 43 32-43q10-14 26-16t30 8q14 10 16 26t-8 30l-46 62 334 450q8 11 12 23t4 25v120q0 17-11.5 28.5T840-80H120q-17 0-28.5-11.5T80-120Zm400-551L160-240v80h120l167-234q12-17 33-17t33 17l167 234h120v-80L480-671ZM378-160h204L480-302 378-160Zm135-234 167 234-167-234q-12-17-33-17t-33 17L280-160l167-234q12-17 33-17t33 17Z"/>
                </svg>
                <b>{t('AREA_CAMPING')}</b>
              </div>
              

              <div className='container-element' title={t('LAGHETTO')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-topbar" viewBox="0 -960 960 960">
                  <path d="M440-120q-100 0-170-70t-70-170v-192q0-14 12-19t22 5l138 138q11 11 11 27.5T372-372q-12 12-28.5 12T315-372l-35-35v47q0 66 47 113t113 47q66 0 113-47t47-113v-127q-36-14-58-44.5T520-600q0-38 22-68.5t58-44.5v-127q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v127q36 14 58 44.5t22 68.5q0 38-22 69t-58 44v127q0 100-70 170t-170 70Zm200-440q17 0 28.5-11.5T680-600q0-17-11.5-28.5T640-640q-17 0-28.5 11.5T600-600q0 17 11.5 28.5T640-560Zm0-40Z"/>
                </svg>
                <b>{t('LAGHETTO')}</b>
              </div>

              <div className='container-element' title={t('MENU')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-topbar" viewBox="0 -960 960 960">
                  <path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/>
                </svg>
                <b>{t('MENU')}</b>
              </div>
            </div>
          </div>
        </div>
      }
    </nav >
  );
};

export default ParalaxHome;