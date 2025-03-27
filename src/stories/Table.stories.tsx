import { mdiOpenInNew } from '@mdi/js';
import Icon from '@mdi/react';
import { Meta } from '@storybook/react';
import { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from '@tanstack/react-table';
import Table from '../components/Table/Table';

export default {
  title: 'Example/Table',
  component: Table,
} as Meta;

type Post = {
  id: number;
  title: string;
  views: number;
  author: {
    name: string;
    avatar: string;
  };
  conversions: {
    thoushands: number;
    percentage: number;
  };
};

export function Default() {
  const data = useMemo<Post[]>(() => [
    {
      author: {
        name: 'Daniel Bonifacio',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU',
      },
      id: 1,
      conversions: { percentage: 64.35, thoushands: 607 },
      title: 'Como dobrei meu salário aprendendo somente React',
      views: 985415,
    },
    {
      author: {
        name: 'Daniel Bonifacio',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU',
      },
      id: 2,
      conversions: { percentage: 64.35, thoushands: 607 },
      title: 'React.js vs. React Native: a REAL diferença entre os dois',
      views: 985415,
    },
    {
      author: {
        name: 'Daniel Bonifacio',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU',
      },
      id: 3,
      conversions: { percentage: 95.35, thoushands: 845 },
      title: 'Como dobrei meu salário aprendendo somente React',
      views: 985415,
    },
  ], []);

  const columns = useMemo<ColumnDef<Post>[]>(() => [
    {
      header: '',
      accessorKey: 'id',
      cell: () => <Icon path={mdiOpenInNew} size={'14px'} color={'#09f'} />,
    },
    {
      header: 'Artigo',
      accessorKey: 'title',
      cell: ({ row, getValue }) => {
        return (
          <div style={{ textAlign: 'left', display: 'flex', gap: 8, alignItems: 'center' }}>
            <img
              width={24}
              height={24}
              src={row.original.author.avatar}
              alt={row.original.author.name}
            />
            {getValue() as string}
          </div>
        );
      },
    },
      
    {
      header: 'Views',
      accessorKey: 'views',
      cell: ({ getValue }) => (
        <div style={{ textAlign: 'right', fontWeight: 700, fontFamily: '"Roboto mono", monospace' }}>
          {(getValue() as number).toLocaleString('pt-br')}
        </div>
      )      
    },
    {
      header: 'Conversões',
      accessorKey: 'conversions',
      cell: ({ getValue }) => {
        const conversion = getValue() as Post['conversions'];
        return (
          <div style={{ display: 'flex', gap: 8, fontWeight: 700, fontFamily: '"Roboto mono", monospace' }}>
            <span>{conversion.thoushands}k</span>
            <span style={{ color: '#09f' }}>{conversion.percentage}%</span>
          </div>
        );
      },
    },
    {
      id: 'actions',
      header: 'Ações',
      cell: () => <div style={{ textAlign: 'right' }}>todo: actions</div>,
    },
  ], []);

  const instance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <Table instance={instance} />;
}

export function WithoutData() {
  const data = useMemo<Post[]>(() => [], []);

  const columns = useMemo<ColumnDef<Post>[]>(() => [
    {
      header: '',
      accessorKey: 'id',
      cell: () => <Icon path={mdiOpenInNew} size={'14px'} color={'#09f'} />,
    },
    {
      header: 'Artigo',
      accessorKey: 'title',
      cell: ({ row, getValue }) => (
        <div style={{ textAlign: 'left', display: 'flex', gap: 8, alignItems: 'center' }}>
          <img width={24} height={24} src={row.original.author.avatar} alt={row.original.author.name} />
          {(getValue() as string)}
        </div>
      ),
    },
    {
      header: 'Views',
      accessorKey: 'views',
      cell: ({ getValue }) => (
        <div style={{ textAlign: 'right', fontWeight: 700, fontFamily: '"Roboto mono", monospace' }}>
          {(getValue() as number)?.toLocaleString('pt-br') || 0}
        </div>
      ),
    },
    {
      header: 'Conversões',
      accessorKey: 'conversions',
      cell: ({ getValue }) => {
        const conversion = getValue() as Post['conversions'];
        return (
          <div style={{ display: 'flex', gap: 8, fontWeight: 700, fontFamily: '"Roboto mono", monospace' }}>
            <span>{conversion?.thoushands || 0}k</span>
            <span style={{ color: '#09f' }}>{conversion?.percentage || 0}%</span>
          </div>
        );
      },
    },
    {
      id: 'actions',
      header: 'Ações',
      cell: () => <div style={{ textAlign: 'right' }}>todo: actions</div>,
    },
  ], []);

  const instance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <Table instance={instance} />;
}
