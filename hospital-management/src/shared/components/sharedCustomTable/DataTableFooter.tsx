interface Props {
  totalRows: number;
}

const DataTableFooter = ({ totalRows }: Props) => {
  return (
    <div className="flex items-center justify-between border-t p-4 text-sm text-muted-foreground">
      <div>{totalRows} records</div>

      <div>Page 1 of 1</div>
    </div>
  );
};

export { DataTableFooter };
