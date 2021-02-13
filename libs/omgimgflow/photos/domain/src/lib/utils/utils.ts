import { ImageFlowSettings } from '../models';

export function toRiapiQueryString(imageFlowSettings: ImageFlowSettings) {
  const settings = Object.entries(imageFlowSettings);

  const riapiSettings = new Map<string, string>();
  riapiSettings.set('width', 'w');
  riapiSettings.set('height', 'h');
  riapiSettings.set('mode', 'mode');
  riapiSettings.set('scale', 'scale');
  riapiSettings.set('sepia', 's.sepia');

  console.log(JSON.stringify(settings));
  const riapiQueryString = settings.reduce((acc, curr, currIndex, sourceArray) => {
    let queryString;
    if ('' === curr[1]) {
      queryString = '';
    } else {
      queryString = `${riapiSettings.get(curr[0])}=${curr[1]}&`;
    }

    return acc + queryString;
  }, '?');

  return riapiQueryString.substring(0, riapiQueryString.length - 1);
}
