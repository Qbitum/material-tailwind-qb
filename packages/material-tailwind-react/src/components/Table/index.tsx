import React, { FC } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../context/theme';
import objectsToString from '../../utils/objectsToString';

export interface TableProps {
  headers: string[];
  data: any[];
  className?: string;
}

const Table: FC<TableProps> = ({ headers, data, className }) => {
  // 1. init
  const { table } = useTheme();
  const { defaultProps, styles } = table;
  const { base, header, cell } = styles;

  // 2. set default props
  className = twMerge(defaultProps.className || '', className);

  // 3. set styles
  const tableClasses = twMerge(classnames(objectsToString(base)), className);
  const headerClasses = objectsToString(header);
  const cellClasses = objectsToString(cell);

  // 4. return
  return (
    <table className={tableClasses}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className={headerClasses}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <td key={colIndex} className={cellClasses}>
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

Table.defaultProps = {
  className: '',
};

export default Table;
