import { icons } from '@/assets/icons/';
import React from 'react';
import { Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const TabBarButton = (props: {
  isFocused: boolean | ((name: string) => boolean);
  routeName: string;
  color: string;
  onPress: () => void;
  onLongPress: () => void;
}): JSX.Element => {
  const { isFocused, routeName, color } = props;

  const { styles } = useStyles(stylesheet);

  return (
    <Pressable {...props} style={styles.container}>
      <View style={styles.containerBtn}>
        {icons[routeName]({
          color,
          isFocused: typeof isFocused === 'boolean' ? isFocused : isFocused(routeName),
        })}
      </View>
    </Pressable>
  );
};

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  containerBtn: { alignItems: 'center', justifyContent: 'center' },
});

export default TabBarButton;
