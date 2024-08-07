import useSession from '@/hooks/useSession';
import { useRouter, useSegments } from 'expo-router';
import { PropsWithChildren, useEffect } from 'react';

const ProtectRoutes = ({ children }: PropsWithChildren) => {
  const { session, loading } = useSession();
  const segments = useSegments();
  const router = useRouter();

  const inAuthenticatedGroup = segments[0] === '(authenticated)';

  useEffect(() => {
    if (loading) {
      return;
    }

    if (session && !inAuthenticatedGroup) {
      router.replace('/(authenticated)/(tabs)/home');
    } else if (!session) {
      router.replace('/(public)');
    }
  }, [session, loading]);

  return <>{children}</>;
};

export default ProtectRoutes;
