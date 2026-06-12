import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Search } from 'lucide-react';
import type { TableFilter } from './Types';

interface Props {
  search: string;

  onSearchChange: (value: string) => void;

  toolbarActions?: React.ReactNode;

  dataLength?: number;

  filters?: TableFilter[];
}

const DataTableToolbar = ({ search, onSearchChange, toolbarActions, dataLength }: Props) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      {/* <Input
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="max-w-2/5 xl:max-w-1/4"
      /> */}
      <div className="flex items-center gap-3">
        <InputGroup className="max-w-md">
          <InputGroupAddon>
            <Search className="size-4" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <InputGroupAddon align="inline-end">
            {search !== '' && dataLength ? `${dataLength} results` : ''}
          </InputGroupAddon>
        </InputGroup>
      </div>
      {toolbarActions}
    </div>
  );
};

export { DataTableToolbar };
