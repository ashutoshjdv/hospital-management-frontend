import { Button } from '@/components/ui/button';

interface Props {
  totalRows: number;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const DataTableFooter = ({ totalRows, page, totalPages, onPageChange }: Props) => {
  return (
    <div className="flex items-center justify-between border-t p-4">
      <div className="text-sm text-muted-foreground">{totalRows} records</div>

      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          Previous
        </Button>

        <span className="text-sm">
          Page {page} of {totalPages}
        </span>

        <Button
          size="sm"
          variant="outline"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export { DataTableFooter };
