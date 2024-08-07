import { Colors } from '@/unistyle/theme';
import { supabase } from '@/utils/supabaseClient';
import { Link } from 'expo-router';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

export default function Page() {
  const { theme } = useStyles();
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSignInPress = React.useCallback(async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: emailAddress,
        password: password,
      });
      if (error) {
        console.error(JSON.stringify(error, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [emailAddress, password]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Email..."
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      <TextInput
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button title="Sign In" onPress={onSignInPress} color={Colors.primary[500]} />
      <View>
        <Text>Don't have an account?</Text>
        <Link href="/sign-up">
          <Text>Sign up</Text>
        </Link>
      </View>
    </View>
  );
}
