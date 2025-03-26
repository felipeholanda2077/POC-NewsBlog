import { flexRender, Table as TanstackTable } from '@tanstack/react-table';
import * as T from './Table.styles';

export default function Table<T>({ instance }: { instance: TanstackTable<T> }) {
  return (
    <T.Wrapper cellPadding={0} cellSpacing={0}>
      <T.Heading>
        {instance.getHeaderGroups().map(headerGroup => (
          <T.HeadingRow key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <T.HeadingCell
                key={header.id}
                style={{
                  textAlign: ['views', 'actions'].includes(header.column.id) ? 'right' : 'left',
                }}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </T.HeadingCell>
            ))}
          </T.HeadingRow>
        ))}
      </T.Heading>

      <T.Body>
        {instance.getRowModel().rows.map(row => (
          <T.BodyRow key={row.id}>
            {row.getVisibleCells().map(cell => (
              <T.BodyCell
                key={cell.id}
                style={{
                  textAlign: ['views', 'actions'].includes(cell.column.id) ? 'right' : 'left',
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </T.BodyCell>
            ))}
          </T.BodyRow>
        ))}
      </T.Body>
    </T.Wrapper>
  );
}
