export type ImageTransformModes = 'stretch' | 'pad' | 'crop' | 'max';

export type ImageTransformScales = 'down' | 'both' | 'canvas' | 'up';

export type ImageTransformFlips = 'x' | 'y' | 'xy';

export interface ImageFlowSettings {
  width: number;
  height: number;
  mode?: ImageTransformModes;
  scale?: ImageTransformScales;
  flip?: ImageTransformFlips;
  sflip?: ImageTransformFlips;
  sepia: boolean;
}
