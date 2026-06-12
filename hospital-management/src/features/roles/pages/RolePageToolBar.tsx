import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Plus, Search } from 'lucide-react';
import React from 'react';

interface RolePageToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  dataLength: number;
  onAddRole: () => void;
}
const RolePageToolBar = ({
  search,
  onSearchChange,
  dataLength,
  onAddRole,
}: RolePageToolbarProps) => {
  return (
    <div className="md:m-5">
      <Card className="m-3">
        <CardContent>
          <div className="flex flex-wrap justify-between max-md:gap-5">
            <InputGroup className="max-w-md">
              <InputGroupAddon>
                <Search className=" size-4" />
              </InputGroupAddon>
              <InputGroupInput
                placeholder="Search..."
                value={search}
                onChange={(e) => {
                  // console.log(JSON.stringify(e.target.value));
                  onSearchChange(e.target.value);
                }}
                // className="size-4"
              />
              <InputGroupAddon align="inline-end">
                {search !== '' && dataLength ? `${dataLength} results` : ''}
              </InputGroupAddon>
            </InputGroup>
            <Button variant={'default'} onClick={onAddRole}>
              <Plus />
              Add Role
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RolePageToolBar;
