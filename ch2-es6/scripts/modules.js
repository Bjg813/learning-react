// Modules
// Javascript modules are a piece of reusable code that can be incorporated into other JavaScript files
// JavaScript modules are stored in separate files, one file per module
// You can export multiple JavaScript objects from a single module or one JavaScript object per module

export const print(message) => log(message, new Date());
export const log(message, timestamp) =>
    console.log(`${timestamp.toString()}: ${message}`)

// If you want to export only one variable from a odule you use the export default function
const freel = new Expedition('Mt. Freel', 2, ['water', 'snack']);

export default freel;

// Modules can be consumed in other JavaScript files by using the 'import' statement
import { print, log } from './text-helpers';
import freel from './mt-freel';

// You can also change the scope of module variables to local scope
import { print as p, log as l} from './text-helpers';

// You can also impoort everything from a module using the * variable
import * as fns from './text-helpers';