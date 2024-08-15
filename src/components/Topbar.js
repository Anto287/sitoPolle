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
        <div className={`topbar-mobile ${showTopBarScrolling ? "visible" : "hidden"}`}>
          <div className='topbar-content-mobile'>
            <div className='container-logo-mobile'>
              <ImgLoader 
                src={myIcon} 
                style={{minWidth: '40px', width: '40%', height: '90%'}} 
                styleImg={{width: 'auto', height: '100%'}}
                alt={t('THE_POLLE')}
              />
            </div>
            <div className='container-topbar-mobile'>
              <div className='container-element-mobile' title={t('MENU')}>
                <i class="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      }
      {breakpoint === 1 && 
        <div className={`topbar-tablet ${showTopBarScrolling ? "visible" : "hidden"}`}>
          <div className='topbar-content-tablet'>
            <div className='container-logo-tablet'>
              <ImgLoader 
                src={myIcon} 
                style={{minWidth: '40px', width: '40%', height: '90%'}} 
                styleImg={{width: 'auto', height: '100%'}}
                alt={t('THE_POLLE')}
              />
            </div>
            <div className='container-topbar-tablet'>
              <div className='element-primary element-secondary element-third'>
                <div className='container-element-tablet' title={t('HOME')}>
                  <i class="fa-solid fa-house"></i>
                  <b>{t('HOME')}</b>
                </div>
              </div>
              
              <div className='element-primary element-secondary element-third'>
                <div className='container-element-tablet' title={t('TANA_DEL_LUPO')}>
                  <i class="fa-solid fa-utensils"></i>
                  <b>{t('TANA_DEL_LUPO')}</b>
                </div>
              </div>

              <div className='element-primary element-secondary'>
                <div className='container-element-tablet' title={t('AREA_CAMPING')}>
                  <i class="fa-solid fa-campground"></i>
                  <b>{t('AREA_CAMPING')}</b>
                </div>
              </div>

              <div className='element-primary'>
                <div className='container-element-tablet' title={t('AREA_CAMPER')}>
                  <i className="fa-solid fa-caravan"></i>
                  <b>{t('AREA_CAMPER')}</b>
                </div>
              </div>

              <div className='element-primary element-secondary element-third'>
                <div className='container-element-tablet' title={t('LAGHETTO')}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon-topbar-tablet" viewBox="0 -960 960 960">
                    <path style={{height: '20px', width: '20px'}} d="M440-120q-100 0-170-70t-70-170v-192q0-14 12-19t22 5l138 138q11 11 11 27.5T372-372q-12 12-28.5 12T315-372l-35-35v47q0 66 47 113t113 47q66 0 113-47t47-113v-127q-36-14-58-44.5T520-600q0-38 22-68.5t58-44.5v-127q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v127q36 14 58 44.5t22 68.5q0 38-22 69t-58 44v127q0 100-70 170t-170 70Zm200-440q17 0 28.5-11.5T680-600q0-17-11.5-28.5T640-640q-17 0-28.5 11.5T600-600q0 17 11.5 28.5T640-560Zm0-40Z"/>
                  </svg>
                  <b>{t('LAGHETTO')}</b>
                </div>
              </div>
              
              <div className='container-element-tablet' title={t('MENU')}>
                <i class="fa-solid fa-bars"></i>
                <b>{t('MENU')}</b>
              </div>
            </div>
          </div>
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
                <i class="fa-solid fa-house"></i>
                <b>{t('HOME')}</b>
              </div>

              <div className='container-element' title={t('TANA_DEL_LUPO')}>
                <i class="fa-solid fa-utensils"></i>
                <b>{t('TANA_DEL_LUPO')}</b>
              </div>

              <div className='container-element' title={t('AREA_CAMPING')}>
                <i class="fa-solid fa-campground"></i>
                <b>{t('AREA_CAMPING')}</b>
              </div>
              
              <div className='container-element' title={t('AREA_CAMPER')}>
                <i className="fa-solid fa-caravan"></i>
                <b>{t('AREA_CAMPER')}</b>
              </div>

              <div className='container-element' title={t('LAGHETTO')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-topbar" viewBox="0 -960 960 960">
                  <path d="M440-120q-100 0-170-70t-70-170v-192q0-14 12-19t22 5l138 138q11 11 11 27.5T372-372q-12 12-28.5 12T315-372l-35-35v47q0 66 47 113t113 47q66 0 113-47t47-113v-127q-36-14-58-44.5T520-600q0-38 22-68.5t58-44.5v-127q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v127q36 14 58 44.5t22 68.5q0 38-22 69t-58 44v127q0 100-70 170t-170 70Zm200-440q17 0 28.5-11.5T680-600q0-17-11.5-28.5T640-640q-17 0-28.5 11.5T600-600q0 17 11.5 28.5T640-560Zm0-40Z"/>
                </svg>
                <b>{t('LAGHETTO')}</b>
              </div>

              <div className='container-element' title={t('MENU')}>
                <i class="fa-solid fa-bars"></i>
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