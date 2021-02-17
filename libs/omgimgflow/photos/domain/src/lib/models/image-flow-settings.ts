// 'stretch' | 'pad' | 'crop' | 'max';
export enum ImageTransformModes {
  crop = 'crop',
  max = 'max',
  pad = 'pad',
  stretch = 'stretch',
}

// 'down' | 'both' | 'canvas' | 'up';
export enum ImageTransformScales {
  both = 'both',
  canvas = 'canvas',
  down = 'down',
  up = 'up'
}

// 'x' | 'y' | 'xy';
export enum ImageTransformFlips {
  x = 'x',
  y = 'y',
  xy = 'xy'
}

export interface ImageFlowSettings {
  width: number;
  height: number;
  mode: ImageTransformModes;
  scale: ImageTransformScales;
  flip?: ImageTransformFlips;
  sflip?: ImageTransformFlips;
  sepia: boolean;
}
