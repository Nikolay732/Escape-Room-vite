import { PageNameValue } from '../const';

export type PageName = typeof PageNameValue[keyof typeof PageNameValue];
