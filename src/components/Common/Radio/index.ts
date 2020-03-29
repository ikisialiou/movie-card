import { withPrefix } from './withPrefix';
import { Radio } from './Radio';
import { radioGroup } from './radioGroup';

export const RadioButton = withPrefix(Radio, 'radio__button');
export const RadioLink = withPrefix(Radio, 'radio__link');
export const RadioLinkGroup = radioGroup(RadioLink);
