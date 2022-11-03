import nodeContains from '@ungap/node-contains';
import 'core-js/es/array/find';
import 'core-js/es/array/find-index';
import 'core-js/es/array/flat';
import 'core-js/es/array/includes';
import 'core-js/es/map';
import 'core-js/es/object/assign';
import 'core-js/es/object/values';
import 'core-js/es/promise';
import 'core-js/es/set';
import 'core-js/es/symbol';
import 'core-js/es/typed-array/slice';
import 'core-js/features/url';

Node.prototype.contains = nodeContains;
