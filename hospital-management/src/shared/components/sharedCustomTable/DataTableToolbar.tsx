import { Input } from '@/components/ui/input';

interface Props {
  search: string;

  onSearchChange: (value: string) => void;

  toolbarActions?: React.ReactNode;
}

const DataTableToolbar = ({ search, onSearchChange, toolbarActions }: Props) => {
  return (
    <div className="flex flex-row-reverse items-center justify-between p-4 border-b">
      <Input
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="max-w-2/5 xl:max-w-1/4"
      />
      {toolbarActions}
    </div>
  );
};

export { DataTableToolbar };
