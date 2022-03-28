import React, { FC, useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from 'theme-ui';

import Link from './NavLink';
import { fetchAPI } from '../utils/models';

import PageHeader from './PageHeader';
import { Table } from './Table';

import { EmptyForm } from './Icons';

export interface IField {
  id: string;
  title: string;
  body: string;
  serialized: string;
}

export interface IFieldItem {
  name: string;
  type: string;
}

const BlockTemplateListFrame: FC = () => {
  const [contents, setContents] = useState<Array<IField>>([]);
  const [blocks, setBlocks] = useState<Array<any>>([]);
  const loadData = () => {
    fetchAPI('block_templates')
      .then((data: any) => {
        const res: IField[] = data.block_templates;
        setContents(res);
      })
      .catch();
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (contents && contents.length > 0) {
      let row: any = [];
      contents.map((r: any) => {
        const rFormated = {
          col1: <Text></Text>,
          col2: (
            <Box>
              {r.title}
            </Box>
          ),
          col3: <Box>{r.updated_at}</Box>,
          col4: (
            <Box sx={{ px: 3, py: 2 }}>
              <Link href={`/blocks/edit/${r.id}`} variant="btnSecondary">
                Edit
              </Link>
            </Box>
          ),
        };

        row.push(rFormated);
      });

      setBlocks(row);
    }
  }, [contents]);

  return (
    <Box>
      <PageHeader title="Blocks">
        <Box sx={{ ml: 'auto' }}>
          <Link href="/blocks/new" variant="btnSecondary">
            + New Block
          </Link>
        </Box>
      </PageHeader>
      {/* <Flex>
        <Box sx={{ ml: 'auto' }}>
          <Link
            variant="button"
            href="/block_templates/new"
            icon={<Plus width={20} />}>
            <Text>New Block</Text>
          </Link>
        </Box>
      </Flex> */}
      <Box variant="layout.pageFrame">
        <Box mx={0} mb={3}>
          {blocks.length === 0 &&

          <Box>
          <Flex>
            <Box sx={{ color: 'gray.5', width: 'auto' }}>
              <EmptyForm sx={{ color: 'gray.4' }}/>
            </Box>
            <Box sx={{ m: 2, pb: 0 }}>
              <Text as="h2" sx={{ fontWeight: 300 }}>Blocks are empty</Text>
              <Text as="h3" sx={{ fontWeight: 200, color: 'gray.6' }}>You haven't created a block yet, click below to create one</Text>
              <Box sx={{ mt: 3, pb: 0 }}>
            <Button>Add First Block</Button>
          </Box>
            </Box>
          </Flex>            
          </Box>

          }
          {!blocks &&
            <Text>You do not have any blok, click here to add</Text>
          }

          {blocks && blocks.length > 0 && (
            <Table
              options={{
                columns: [
                  {
                    Header: 'Id',
                    accessor: 'col1', // accessor is the "key" in the data
                    width: '15%',
                  },
                  {
                    Header: 'Name',
                    accessor: 'col2',
                    width: '45%',
                  },
                  {
                    Header: 'Updated',
                    accessor: 'col3',
                    width: '30%',
                  },
                  {
                    Header: 'Action',
                    accessor: 'col4',
                    width: '10%',
                  },
                ],
                data: blocks,
              }}
            />
          )}
          {/* <Styles>
            {contents && contents.length > 0 && (
              <Table columns={columns} data={contents} />
            )}
          </Styles> */}

          {/* <Box>
            {contents &&
              contents.length > 0 &&
              contents.map((m: any) => <ItemField key={m.id} {...m} />)}
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};
export default BlockTemplateListFrame;
