import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type { DataTableProps } from './Types';
import { useState } from 'react';
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

  const filteredData = data.filter((row) =>
    JSON.stringify(row).toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="rounded-xl border bg-card overflow-hidden">
      <DataTableToolbar
        search={search}
        onSearchChange={setSearch}
        toolbarActions={toolbarActions}
      />
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/40 hover:bg-muted/40">
            {columns.map((column) => (
              <TableHead key={String(column.key)} className="h-14 font-semibold text-foreground">
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
              {filteredData.map((row, index) => (
                <TableRow
                  key={row.id ?? index}
                  className="h-16 hover:bg-muted/30 transition-colors"
                >
                  {columns.map((column) => {
                    const value = row[column.key];

                    return (
                      <>
                        <TableCell key={String(column.key)} className="py-4">
                          {column.render ? column.render(value, row) : String(value ?? '')}
                        </TableCell>
                      </>
                    );
                  })}
                  {rowActions && <TableCell className="py-4">{rowActions(row)}</TableCell>}
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
      <DataTableFooter totalRows={filteredData.length} />
    </div>
  );
};

export { DataTable };
