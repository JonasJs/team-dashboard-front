import { Icon } from '@components/index';
import { TableCell, TableRow } from '@/components/Table';
import stylesTable from '../TableEmployees.module.css';
import { ExpandedRow } from './ExpandedRow';
import type { MobileRowProps } from './MobileRow.types';
import { MobileRowVariants } from './MobileRow.variants';
import { AnimatePresence } from 'framer-motion';

export function MobileRow({ employee, isExpanded, onExpand }: MobileRowProps) {
  function handleExpand(id: number) {
    onExpand(id);
  }

  return (
    <>
      <TableRow
        key={employee.id}
        onClick={() => {
          handleExpand(employee.id);
        }}
        className={MobileRowVariants.row({ hideBorder: isExpanded })}
      >
        <TableCell align="left" width="120px">
          <div className={stylesTable.alignCenter}>
            <img
              width={34}
              height={34}
              className={stylesTable.photo}
              src={employee.image}
              alt={employee.name}
              loading="lazy"
            />
          </div>
        </TableCell>
        <TableCell align="left">{employee.name}</TableCell>
        <TableCell align="center" width="48px">
          <Icon name={isExpanded ? 'chevron-up' : 'chevrons-down'} size={20} />
        </TableCell>
      </TableRow>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <ExpandedRow key={String(employee.id) + '-expanded'} {...employee} />
        )}
      </AnimatePresence>
    </>
  );
}
