import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type { DataTableProps } from './Types';
import { useEffect, useState } from 'react';
import { DataTableToolbar } from './DataTableToolbar';
import { DataTableFooter } from './DataTableFooter';

const DataTable = <T extends { id?: string | number }>({
  columns,
  data,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loading,
  toolbarActions,
  rowActions,
}: DataTableProps<T>) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const pageSize = 10;

  const filteredData = data.filter((row) =>
    JSON.stringify(row).toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));

  const paginatedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    setPage(1);
  }, [search]);
  return (
    <div className="rounded-xl border bg-card shadow-lg overflow-hidden">
      <DataTableToolbar
        search={search}
        onSearchChange={setSearch}
        toolbarActions={toolbarActions}
        dataLength={filteredData.length}
      />
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/40 hover:bg-accent/40">
            {columns.map((column, index) => (
              <TableHead
                key={String(column.key)}
                className={`h-14 font-semibold text-foreground ${column.onlyBigScreen ? 'max-md:hidden' : ''} ${column.position === 'center' ? 'text-center' : column.position === 'right' ? 'text-right' : ''} ${index === 0 ? 'pl-5' : ''}`}
              >
                {column.label}
              </TableHead>
            ))}
            {rowActions && (
              <TableHead className="w-[60px] h-14 font-semibold text-foreground"></TableHead>
            )}
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredData.length === 0 ? (
            <>
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No data found
                </TableCell>
              </TableRow>
            </>
          ) : (
            <>
              {paginatedData.map((row, index) => (
                <TableRow
                  key={row.id ?? index}
                  className="h-16 hover:bg-muted/90 transition-colors border-0"
                >
                  {columns.map((column, index) => {
                    const value = row[column.key];

                    return (
                      <TableCell
                        key={String(column.key)}
                        className={`py-4 ${column.onlyBigScreen ? 'max-md:hidden' : ''} ${column.position === 'center' ? 'text-center' : column.position === 'right' ? 'text-right' : ''} ${index === 0 ? 'pl-5' : ''}`}
                      >
                        {column.render ? column.render(value, row) : String(value ?? '')}
                      </TableCell>
                    );
                  })}
                  {rowActions && <TableCell className="py-4">{rowActions(row)}</TableCell>}
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
      <DataTableFooter
        totalRows={filteredData.length}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export { DataTable };
