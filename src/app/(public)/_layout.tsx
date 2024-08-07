import { supabase } from '@/utils/supabaseClient';
import { router, Stack } from 'expo-router';
import { useEffect } from 'react';

export default function PublicRoutesLayout() {
  useEffect(() => {
    const isSignedIn = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        router.replace('/(authenticated)');
      }
    };
    isSignedIn();
  }, []);

  return <Stack />;
}
