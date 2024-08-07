import { supabase } from '@/utils/supabaseClient';
import * as React from 'react';
import { Button, TextInput, View } from 'react-native';

export default function SignUpScreen() {
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSignUpPress = async () => {
    try {
      await supabase.auth.signUp({
        email: emailAddress,
        password,
      });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Email..."
        onChangeText={(email) => setEmailAddress(email)}
      />
      <TextInput
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button title="Sign Up" onPress={onSignUpPress} />
    </View>
  );
}
