import React, {
  useState,
  useEffect,
  createContext,
  ReactElement,
  useContext,
} from 'react';

import { useStoreActions } from 'easy-peasy';
import cookie from 'js-cookie';
import { signOut } from 'next-auth/react';
import { Flex, Spinner } from 'theme-ui';

import { fetchUserInfo, fetchAPI } from '../utils/models';

interface IUserContextProps {
  isUserLoading: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  userProfile: any;
  organisations: any;
  login: (data: any) => void;
  logout: () => void;
}

export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps,
);

export const UserProvider = ({ children }: { children: ReactElement }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<any | null>(null);
  const [organisations, setOrganisations] = useState<any | null>(null);

  const [isUserLoading, setIsUserLoading] = useState(false);
  const setToken = useStoreActions((actions: any) => actions.auth.addToken);
  const setProfile = useStoreActions(
    (actions: any) => actions.profile.updateProfile,
  );

  useEffect(() => {
    const refreshToken = cookie.get('refreshToken') || false;

    if (refreshToken) {
      setRefreshToken(refreshToken);
    }

    const token = cookie.get('token') || false;
    if (token) {
      setAccessToken(token);
      setToken(token);
      setIsUserLoading(true);

      console.log('accessToken', token);

      const fetchData = async () => {
        try {
          const userinfo: any = await fetchUserInfo();
          const userOrg: any = await fetchAPI('users/organisations');
          setOrganisations(userOrg.organisations);

          await updateUserData(userinfo);
          setIsUserLoading(false);
        } catch {
          setIsUserLoading(false);
        }
      };

      fetchData();
    }
  }, []);

  useEffect(() => {
    if (userProfile?.organisation_id) {
      fetchAPI(`organisations/${userProfile.organisation_id}`).then((res) => {
        const body = {
          ...userProfile,
          currentOrganisation: res || {},
        };
        updateUserData(body);
      });
    }
  }, [userProfile?.organisation_id]);

  console.log('user profile', userProfile);

  const login = (data: any) => {
    const { access_token, refresh_token, user }: any = data;
    setAccessToken(access_token);
    setRefreshToken(refresh_token);
    setToken(access_token);

    updateUserData(user);

    if (!organisations) {
      fetchAPI('users/organisations').then(async (res: any) => {
        setOrganisations(res.organisations);
      });
    }

    cookie.set('token', access_token);
    cookie.set('refreshToken', refresh_token);
  };

  const logout = async () => {
    await signOut({ redirect: false });
    setAccessToken(null);
    setRefreshToken(null);
    setUserProfile(null);
    setOrganisations(null);
    setProfile(null);

    cookie.remove('token');
    cookie.remove('refreshToken');
  };

  const updateUserData = (userdata: any) => {
    setProfile(userdata);
    setUserProfile(userdata);
  };

  if (isUserLoading) {
    return (
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
        <Spinner width={32} />
      </Flex>
    );
  }
  return (
    <UserContext.Provider
      value={{
        isUserLoading: false,
        refreshToken,
        accessToken,
        userProfile,
        organisations,
        login,
        logout,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(UserContext);
};
