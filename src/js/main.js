import "../scss/style.scss";

import {dom, library} from '@fortawesome/fontawesome-svg-core';
import {faDog, faCat,faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {faComments} from '@fortawesome/free-regular-svg-icons';


// 使いたいFontAwesomeアイコンをimport文 => {} 中に記述してください。
// その後,library.add内にも記述し、htmlに<i>タグで記述してください。
library.add(faDog,faComments,faCat,faChevronUp);

dom.i2svg();
