export function toRiapiQueryString(imageFlowSettings: {[key: string]: any}) {
  const settings = Object.entries(imageFlowSettings);

  const riapiSettings = new Map<string, string>();
  riapiSettings.set('width', 'w');
  riapiSettings.set('height', 'h');
  riapiSettings.set('mode', 'mode');
  riapiSettings.set('scale', 'scale');
  riapiSettings.set('sepia', 's.sepia');

  const riapiQueryString = settings.reduce((acc, curr, currIndex, sourceArray) => {
    let queryString;
    if (!Boolean(curr[1])) {
      queryString = '';
    } else {
      queryString = `${riapiSettings.get(curr[0])}=${curr[1]}&`;
    }

    return acc + queryString;
  }, '?');

  return riapiQueryString.substring(0, riapiQueryString.length - 1);
}
