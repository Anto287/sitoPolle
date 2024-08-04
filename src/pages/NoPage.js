import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import { useTranslation } from 'react-i18next';
import Button from '@components/Button';
import '@styles/NoPage.css';

const NoPage = () => {
  const { t } = useTranslation();
  const [widthDevice, setWidthDevice] = useState('-small');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const breakpoint = UseResponsiveJSX([600, 1200, 2000]); 
  
  useEffect(() => {
    switch (breakpoint) {
      case 0:
        setWidthDevice('-small');
        break;
      case 1:
        setWidthDevice('-mind');
        break;
      case 2:
        setWidthDevice('-large');
        break;
      case 3:
        setWidthDevice('-extra-large');
        break;
      default:
        setWidthDevice('-small');
        break;
    }
  }, [breakpoint]);

  const handleClick = () => {
    navigate(from, { replace: true }); 
  }
  
  return (
    <>
      <div className={"wrapper" + widthDevice}>
        <div className={"landing-page" + widthDevice}>
          <div className={"container-svg" + widthDevice}>
            <svg xmlns="http://www.w3.org/2000/svg" id="b599d709-684a-4b18-9cac-f9c979cf5115" data-name="Layer 1" width="977.71631" height="782.41658" viewBox="0 0 977.71631 782.41658" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/imagination_ok71.svg" alt="Imagination">
              <path d="M1088.85815,416.70662c0,45.97-13.23,89.54-36.9,128.54q-6.135,10.125-13.19995,19.82c-20.04,27.54-45.5,52.39-75.25,73.69q-2.73,1.95-5.5,3.86c-.7.48-1.39.96-2.09,1.44q-4.365,2.955-8.83,5.82c-.94.6-1.88,1.19-2.82,1.78-.8.51-1.61,1.01-2.42,1.51q-13.005,8.04006-26.9,15.21c-1.01.52-2.03,1.04-3.05,1.56-.88.44-1.76.89-2.65,1.33-.62.31-1.25.62-1.87.92-1.04.52-2.09,1.03-3.14,1.53q-4.095,1.965-8.25,3.85c-1.27.58-2.55,1.16-3.84,1.72a.07552.07552,0,0,1-.04.02c-1.28.57-2.56,1.13-3.85,1.68-1.18006.51-2.37,1.02-3.56,1.51q-5.37,2.265-10.83,4.38c-.75.3-1.51.59-2.27.88-1.05.4-2.09.8-3.15,1.19-1.35.5-2.69,1-4.04,1.49-1.26.46-2.52.91-3.79,1.36l-.27.09c-1.27.45-2.54.89-3.82,1.32q-9.86994,3.39-20.03,6.34c-.85.25-1.7.49-2.55.73-.38.12-.77.23-1.16.33-.99.28-1.98.56-2.98.83-1.22.35-2.45.68-3.69,1q-5.175,1.38-10.4,2.64c-1.18.29-2.35.57-3.53.84a.14463.14463,0,0,1-.07.02q-1.77.405-3.54.81c-1.65.38-3.31994.75-4.99,1.09-1.93.42-3.87.82-5.82,1.22-1.21.24-2.42.48-3.63.71-1.21.24-2.43005.47-3.64.69q-9.135,1.695-18.42,3.05c-2.3.33-4.6.65-6.92.96-1.42.19-2.85.37-4.28.54-1.25.15-2.51.3-3.76.44-1.25.15-2.5.28-3.76.42h-.01c-.12.02-.24.03-.36.04-2.05.22-4.11.42-6.17.62-1.21.12-2.42.22-3.64.32-1.09.1-2.19.18994-3.29.27q-4.93506.405-9.9.69-1.605.105-3.21.18c-2.28.13-4.56.23005-6.85.32-.95.04-1.91.08-2.86.11-2.56.09-5.13.15-7.7.2q-2.175.045-4.35.06-2.58.03-5.16.03c-83.21,0-178.85-28.5-257.63-69.93a553.716,553.716,0,0,1-57.37-34.57c-10.66-7.37-20.72-14.95-30.06-22.71-69.61-57.7-99.74-124.19-43.94-174.79q10.8-9.795,23.27-20.39,9.435-8.025,19.7-16.46c97.47-80.06,246.86005-185.08,346.03-265.15C867.01813-20.25341,1088.85815,249.91658,1088.85815,416.70662Z" transform="translate(-111.14185 -58.79171)" fill="#62ad9b"></path>
              <path d="M731.85815,569.20662l-41.03,5.32-2.09.27-54.61,7.08-249.27,32.33c-10.66-7.37-20.72-14.95-30.06-22.71l285.26-16.86,49.34-2.92,2.07-.12Z" transform="translate(-111.14185 -58.79171)" fill="#f2f2f2"></path>
              <path d="M550.85815,368.20662l-216.73,28.11q9.435-8.025,19.7-16.46Z" transform="translate(-111.14185 -58.79171)" fill="#f2f2f2"></path>
              <path d="M1051.95813,545.24659q-6.135,10.125-13.19995,19.82l-188.30005-24.42-103.6-13.44,101.91,6.03Z" transform="translate(-111.14185 -58.79171)" fill="#f2f2f2"></path>
              <path d="M963.50818,638.7566c-69.31,49.64-161.92005,79.95-263.65,79.95-83.21,0-178.85-28.5-257.63-69.93,6.23-16.15,14.91-29.24,26.98-35.87.3-.17.61-.34.92-.49a38.14439,38.14439,0,0,1,16.64-4.21c71-2,63,78,152-32,55.35-68.41,118.05-91.95,160.91-84.34.79.14,1.57.29,2.35.45,24.84,5.16,42.61,21.06,47.74,44.89,14,65-27,117,48,101A155.12159,155.12159,0,0,1,963.50818,638.7566Z" transform="translate(-111.14185 -58.79171)" fill="#3f3d56"></path>
              <path d="M753.24836,716.05355c-34.87988-19.44434-56.59375-45.99121-64.53906-78.90235-5.89941-24.43554-4.2041-51.93261,5.03809-81.72753a218.888,218.888,0,0,1,30.439-61.48438C794.82453,393.953,801.2,328.80159,794.10969,291.75277c-7.77393-40.62305-33.03125-57.49414-33.28564-57.65967l1.09033-1.67676c.26074.16943,26.18359,17.43262,34.14453,58.87988,4.58935,23.89453,2.43017,51.14063-6.41748,80.981-11.01172,37.1377-32.48438,78.459-63.82129,122.81641a216.90415,216.90415,0,0,0-30.1626,60.92187c-15.1582,48.86719-17.30273,115.99707,58.56445,158.292Z" transform="translate(-111.14185 -58.79171)" fill="#d0cde1"></path>
              <path d="M691.54426,526.912c-27.49805-15.32813-26.73242-39.6211-21.24805-57.30078a77.68749,77.68749,0,0,1,10.8042-21.8252c24.74658-35.02832,26.98291-57.7832,24.50147-70.7041-2.69531-14.03076-11.34131-19.791-11.42822-19.84766l1.08984-1.67676c.38428.24952,9.44824,6.28858,12.30224,21.14747,3.71631,19.34814-4.63818,43.65136-24.83154,72.23535A75.6765,75.6765,0,0,0,672.20637,470.203c-5.26514,16.97363-6.01514,40.28711,20.31152,54.96289Z" transform="translate(-111.14185 -58.79171)" fill="#d0cde1"></path>
              <path d="M815.26106,312.91292l-.97364-1.74707c26.32666-14.67627,25.57666-37.98974,20.31153-54.9624a75.67946,75.67946,0,0,0-10.52783-21.26318c-20.19336-28.5835-28.54786-52.88721-24.83155-72.23535,2.854-14.85889,11.918-20.89795,12.30225-21.14747l1.09131,1.67579c-.0874.05761-8.77735,5.89355-11.44483,19.92773-2.4541,12.91357-.19336,35.64893,24.51661,70.625a77.69728,77.69728,0,0,1,10.80419,21.82471C841.99348,273.29036,842.7591,297.58333,815.26106,312.91292Z" transform="translate(-111.14185 -58.79171)" fill="#d0cde1"></path>
              <path d="M873.97145,213.41a30,30,0,1,1-50.25129-32.78427c9.05313-13.87651,54.63149-28.834,54.63149-28.834S883.02457,199.53349,873.97145,213.41Z" transform="translate(-111.14185 -58.79171)" fill="#3f3d56"></path>
              <path d="M862.97145,120.41a30,30,0,1,1-50.25129-32.78427c9.05313-13.87651,54.63149-28.834,54.63149-28.834S872.02457,106.53349,862.97145,120.41Z" transform="translate(-111.14185 -58.79171)" fill="#3f3d56"></path>
              <path d="M861.54815,401.92659c-1.92-.45-47.21-10.98-62.31-3.79a31.00068,31.00068,0,0,0,13.38,58.99,30.5018,30.5018,0,0,0,6.7-.74,31.09548,31.09548,0,0,0,6.58-2.27c15.1-7.2,35.46-49,36.32-50.78l.55-1.12Zm-36.51,50.38a28.99815,28.99815,0,0,1-24.94-52.36c3.52-1.68,8.9-2.31,15.04-2.31,16.8,0,39.26,4.75,44.72,5.96C856.44818,410.4366,838.17816,446.04658,825.03815,452.30659Z" transform="translate(-111.14185 -58.79171)" fill="#d0cde1"></path>
              <path d="M725.25561,232.03846a30.87582,30.87582,0,0,1-20.873-8.07861c-12.36035-11.27051-19.69727-57.18652-20.00391-59.13574l-.19336-1.23242,1.24512.0791c1.96875.12549,48.36621,3.20459,60.72656,14.4751h0a30.98626,30.98626,0,0,1-20.90137,53.89257ZM686.56128,165.7577c1.27929,7.5293,8.416,46.91992,19.16894,56.72461a29.00026,29.00026,0,0,0,39.0791-42.85888h0C734.05639,169.81971,694.17651,166.33876,686.56128,165.7577Z" transform="translate(-111.14185 -58.79171)" fill="#d0cde1"></path>
              <path d="M683.48314,303.8848A30,30,0,0,1,643.05666,348.221c-12.24311-11.16347-19.68934-58.55194-19.68934-58.55194S671.24,292.72134,683.48314,303.8848Z" transform="translate(-111.14185 -58.79171)" fill="#3f3d56"></path>
              <path d="M775.42816,304.98658a17.15039,17.15039,0,0,0-16.69-13.51,17.53009,17.53009,0,0,0-3.66.4c-8.93994,1.94-24.83,21.41-25.5,22.23l-.79.97,1.12.56c.88.44,20.02,9.92,30.04,9.92a11.05066,11.05066,0,0,0,2.37994-.23,17.11671,17.11671,0,0,0,13.1-20.34Zm-4.02,11.8a14.9573,14.9573,0,0,1-9.51,6.59c-7.18,1.56-25.24-6.73-29.96-8.98,3.36-4,16.38-19.01,23.57-20.57a15.11325,15.11325,0,0,1,15.9,22.96Z" transform="translate(-111.14185 -58.79171)" fill="#d0cde1"></path>
              <ellipse cx="422.21631" cy="715.77222" rx="417.5" ry="9.69734" fill="#3f3d56"></ellipse>
              <ellipse cx="422.21631" cy="747.84803" rx="289.03846" ry="6.71354" fill="#3f3d56"></ellipse>
              <ellipse cx="422.34837" cy="776.94004" rx="235.78148" ry="5.47653" fill="#3f3d56"></ellipse>
              <path d="M118.35815,469.36659s-14,33-3,36,16-36,16-36Z" transform="translate(-111.14185 -58.79171)" fill="#ffb8b8"></path>
              <polygon points="48.716 229.075 12.216 338.575 4.216 397.575 4.216 416.575 25.216 414.575 25.216 398.575 58.216 297.575 48.716 229.075" fill="#575a89"></polygon>
              <path d="M186.35815,377.36659l-2,22,64,4v-49C248.35815,348.36659,186.35815,377.36659,186.35815,377.36659Z" transform="translate(-111.14185 -58.79171)" fill="#ffb8b8"></path>
              <path d="M153.35815,716.36659l-3,28,33-3s-9-22-10-25S153.35815,716.36659,153.35815,716.36659Z" transform="translate(-111.14185 -58.79171)" fill="#ffb8b8"></path>
              <polygon points="152.216 606.575 148.216 633.575 169.216 648.575 167.216 612.575 152.216 606.575" fill="#ffb8b8"></polygon>
              <path d="M202.35815,385.36659h-18l-6,11s-39,28-39,86v128s-1,91,10,101l1.09842,6.59049.90158,5.40951,24-4s-2-8,1-15-2-46-2-46l6-61,36-89,45,64s-5,89-3,92-1,12-1,12h26l17-119-38-107s4-49-10-54S202.35815,385.36659,202.35815,385.36659Z" transform="translate(-111.14185 -58.79171)" fill="#2f2e41"></path>
              <path d="M273.35815,694.36659s-3.27559-15-9.13779-18-14.86221,5-14.86221,5-24,5-14,30l4,6s7-3,7,12,23,29,31,29,11-7,9-19-6-43.3189-6-43.3189Z" transform="translate(-111.14185 -58.79171)" fill="#2f2e41"></path>
              <path d="M172.28316,732.94392s-14.11335-6.04508-19.96016-3.01519-4.56127,15.00267-4.56127,15.00267-9.86827,22.44142,16.29109,28.82014l7.20749.22839s1.62322-7.44078,13.83419,1.27084,36.96568-1.881,41.61188-8.39353.69007-13.02014-10.24025-18.3613-38.749-20.27413-38.749-20.27413Z" transform="translate(-111.14185 -58.79171)" fill="#2f2e41"></path>
              <circle cx="100.71631" cy="162.07488" r="34" fill="#ffb8b8"></circle>
              <polygon points="81.216 175.575 75.216 213.575 111.216 216.575 115.216 178.575 81.216 175.575" fill="#ffb8b8"></polygon>
              <path d="M252.58271,293.80823a83.423,83.423,0,0,0-43.50914-35.15149c-2.79007-.969-15.60449-.79081-23.3391-.902a23.71078,23.71078,0,0,0-22.785,16.10629c-9.25964,27.236-21.5091,80.67079,15.40865,101.50556l8,7,71-20s-5-12-2-16,13-28,2-45C255.6436,298.71683,254.05052,296.18854,252.58271,293.80823Z" transform="translate(-111.14185 -58.79171)" fill="#575a89"></path>
              <path d="M255.85815,205.86659s7.11653-48.06537-43.70451-33.23456c0,0-35.95295-7.3129-48.65151,37.59055l-12.88906,47.078,5.89984-3.06592,2.60784,6.00245,9.4156,2.57781,4.20315-7.95848,1.77128,9.79659,77.34737,9.21358s-34.31466-21.19294-34.15871-57.992l6.47715,7.11336Z" transform="translate(-111.14185 -58.79171)" fill="#2f2e41"></path>
              <path d="M205.17488,169.41528H211.949a4.2634,4.2634,0,0,1,4.2634,4.2634v47.7366a0,0,0,0,1,0,0H200.91148a0,0,0,0,1,0,0v-47.7366a4.2634,4.2634,0,0,1,4.2634-4.2634Z" transform="translate(-144.86665 -14.97574) rotate(-11.10178)" fill="#62ad9b"></path>
              <circle cx="106.71631" cy="165.07488" r="18" fill="#d0cde1"></circle>
              <circle cx="106.71631" cy="165.07488" r="10" fill="#62ad9b"></circle>
              <path d="M294.32622,498.14l4.849-6.363-.79538-.60612,3.26924-4.29005a9.60622,9.60622,0,0,0-1.8182-13.46321l-11.76129-8.96273a9.60622,9.60622,0,0,0-13.46325,1.81794L246.85372,502.691a9.60627,9.60627,0,0,0,1.81816,13.46326l11.7613,8.96273a9.60628,9.60628,0,0,0,13.46329-1.818l12.96708-17.016.79538.60612,4.84894-6.363-.79537-.60612,1.81835-2.38612Z" transform="translate(-111.14185 -58.79171)" fill="#3f3d56"></path>
              <circle cx="173.71657" cy="422.07514" r="5" fill="#d0cde1"></circle>
              <path d="M245.35815,477.36659s5,41,14,39,7-43,0-43S245.35815,477.36659,245.35815,477.36659Z" transform="translate(-111.14185 -58.79171)" fill="#ffb8b8"></path>
              <path d="M214.35815,280.36659s-4,12-2,31,7,83,7,83,8,69,20,74l3,14,23-4-3-17a17.31349,17.31349,0,0,0,0-11c-2-6-18-161-18-161S240.35815,265.36659,214.35815,280.36659Z" transform="translate(-111.14185 -58.79171)" fill="#575a89"></path>
            </svg>
          </div>
          <div className={"container-text" + widthDevice}>
            <h1>{t('404_ERROR')}</h1>
            <p>{t('IMPOSSIBLE_LOAD_PAGE')}</p>
            <Button 
              className="btn-default" 
              style={{width: '25vw', minWidth: breakpoint === 3 ? '220px' : '120px', maxWidth: breakpoint === 3 ? '350px' : '250px'}}
              icon="fa-solid fa-house" 
              text={t('BACK_TO_HOME')}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;