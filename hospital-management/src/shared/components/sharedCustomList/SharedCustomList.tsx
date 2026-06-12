import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import React from 'react';

const DataList = () => {
  return (
    <Card className="max-md:m-2 md:m-5">
      <CardHeader>
        <div className="flex items-center justify-between gap-5">
          <Input className="max-w-[300px]" />
          <ToggleGroup variant="outline" type="single" defaultValue="all">
            <ToggleGroupItem value="all" aria-label="Toggle all">
              All
            </ToggleGroupItem>
            <ToggleGroupItem value="missed" aria-label="Toggle missed">
              Missed
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardHeader>
      <CardContent>
        {/* Holdings List */}
        <div className=" border-0 overflow-hidden">
          {[
            {
              symbol: 'VOO',

              name: 'Vanguard S&P 500 ETF',

              details: '112 Shares · Jan 2021',

              type: 'ETF',

              value: '$48,230.40',
            },

            {
              symbol: 'VIG',

              name: 'Vanguard Dividend Appreciation',

              details: '450 Shares · Mar 2022',

              type: 'ETF',

              value: '$26,033.79',
            },

            {
              symbol: 'AAPL',

              name: 'Apple Inc.',

              details: '85 Shares · Nov 2020',

              type: 'Stock',

              value: '$18,488.90',
            },

            {
              symbol: 'O',

              name: 'Realty Income Corp',

              details: '320 Shares · Jun 2023',

              type: 'REIT',

              value: '$15,136.59',
            },
          ].map((item) => (
            <div key={item.symbol} className="mb-3">
              <div className="flex items-center justify-between px-4 py-4 bg-muted/60 hover:bg-accent/70 transition-colors rounded-xl">
                <div className="flex items-center gap-4">
                  {/* Symbol Box */}

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background text-sm font-semibold">
                    {item.symbol}
                  </div>

                  {/* Company Info */}

                  <div>
                    <p className="font-medium leading-none">{item.name}</p>

                    <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                      {item.details}
                    </p>
                  </div>
                </div>

                {/* Type + Value */}

                <div className="flex items-center gap-8">
                  <Badge variant="secondary">{item.type}</Badge>

                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Value
                    </p>

                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DataList;
