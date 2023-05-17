/* eslint-disable no-console */
import Settings from './js/Settings';

const settings = new Settings('music', 'off');
const defaultSettings = new Settings();

console.log(settings);
console.log(defaultSettings);
console.log(settings.settings);
