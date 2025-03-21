import React, { FC } from 'react';
import Head from 'next/head';
import { Flex } from '@wraft/ui';

import { workspaceLinks } from '@constants/menuLinks';
import PermissionsList from 'components/manage/PermissionsList';
import DescriptionLinker from 'common/DescriptionLinker';
import ManageSidebar from 'common/ManageSidebar';
import Page from 'common/PageFrame';
import PageHeader from 'common/PageHeader';
import { useAuth } from 'contexts/AuthContext';

const Index: FC = () => {
  const { userProfile } = useAuth();
  return (
    (userProfile?.currentOrganisation?.name !== 'Personal' || '') && (
      <>
        <Head>
          <title>Permission | Wraft</title>
          <meta name="description" content="workspace permissions" />
        </Head>
        <Page>
          <PageHeader
            title="Workspace"
            desc={
              <DescriptionLinker
                data={[
                  { name: 'Manage', path: '/manage' },
                  { name: 'Permissions' },
                ]}
              />
            }
          />

          <Flex gap="md" my="md" px="md">
            <ManageSidebar items={workspaceLinks} />
            <PermissionsList />
          </Flex>
        </Page>
      </>
    )
  );
};

export default Index;
