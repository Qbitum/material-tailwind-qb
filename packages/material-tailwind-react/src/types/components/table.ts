import PropTypes from 'prop-types';

// typescript types
export type className = string;
export type headers = string[];
export type data = any[];

// javascript prop-types
export const propTypesClassName: any = PropTypes.string;
export const propTypesHeaders: any = PropTypes.arrayOf(PropTypes.string).isRequired;
export const propTypesData: any = PropTypes.arrayOf(PropTypes.object).isRequired;
