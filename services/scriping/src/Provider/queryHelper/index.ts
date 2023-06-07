import { default as loblawsWebsites } from "./loblaws/selectWebsite";
import { default as loblawsButton } from "./loblaws/selectButton";
import { default as loblawsData } from './loblaws/selectData';

import { default as costcoWebsites } from './costco/selectWebsite';
import { default as costcoProducts} from './costco/selectProduct';
import { default as costcoData } from './costco/selectData';

const queryHelper = {
  loblaws: {
    loblawsWebsites,
    loblawsButton,
    loblawsData
  },
  costco: {
    costcoWebsites,
    costcoProducts,
    costcoData
  }
}

export default queryHelper;