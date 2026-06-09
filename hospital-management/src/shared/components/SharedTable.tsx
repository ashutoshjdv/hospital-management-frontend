import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';

const SharedTable = ({ ...props }) => {
  return (
    <>
      <Table>
        <TableCaption>{props.title}</TableCaption>
        <TableHeader>
          <TableRow>
            {
              //@ts-expect-error columns can vary based on the parent component, so we can't type it here
              props.headers.map((column) => (
                <TableHead key={column.id} className={column.className ? column.className : ''}>
                  {column.name}
                </TableHead>
              ))
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            //@ts-expect-error data can vary based on the parent component, so we can't type it here
            props.data.map((cell, index) => (
              <TableRow key={cell.id ? cell.id : index}>
                {Object.values(cell).map((value, cellIndex) => (
                  <TableCell key={cellIndex}>{String(value)}</TableCell>
                ))}
              </TableRow>
            ))
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

const SkeletonTable = ({ ...props }) => {
  return (
    <>
      <div className="flex w-full flex-col gap-2 p-4">
        {Array.from({ length: props.length }).map((_, index) => (
          <div className="flex gap-4" key={index}>
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10" />
            <Skeleton className="h-10" />
          </div>
        ))}
      </div>
    </>
  );
};

export { SharedTable, SkeletonTable };
