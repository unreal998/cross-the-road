import {grassMap ,asphaltMap, oceanMap} from "./level";
import { addTrees } from './trees'
export function levelSettings(){
  grassMap(1);
  oceanMap(1);
  asphaltMap(1);
  oceanMap(2);
  oceanMap(1);
  asphaltMap(2);
  grassMap(1);
  asphaltMap(1);
};
// export function treesSettings(){
//   addTrees(10);
// }