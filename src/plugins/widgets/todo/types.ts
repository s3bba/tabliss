import { API } from '../../types';
import { State } from './reducer';
import { Action } from './actions';

export type Dispatch = (action: Action) => void;

export type Data = {
  integration: {
    provider: 'tabliss' | 'asana';
    data?: any;
  };
  items: State;
  show: number;
};

export type Props = API<Data>;

export const defaultData: Data = {
  integration: {
    provider: 'asana',
  },
  items: [],
  show: 3,
};