import { moderateScale } from 'react-native-size-matters';
import { GridViewIcon, HomeIcon, PackageProcessIcon, ShoppingCartIcon, UserIcon } from './icons';

export const icons: {
  [key: string]: (props: { isFocused: boolean; color: string }) => JSX.Element;
} = {
  home: (props: { isFocused: boolean; color: string }): JSX.Element => {
    return (
      <HomeIcon
        strokeWidth={1.2}
        color={props.color}
        width={moderateScale(25)}
        height={moderateScale(25)}
      />
    );
  },
  categories: (props: { isFocused: boolean; color: string }): JSX.Element => {
    return (
      <GridViewIcon
        strokeWidth={1.2}
        color={props.color}
        width={moderateScale(25)}
        height={moderateScale(25)}
      />
    );
  },
  profile: (props: { isFocused: boolean; color: string }): JSX.Element => {
    return (
      <UserIcon
        strokeWidth={1.2}
        color={props.color}
        width={moderateScale(25)}
        height={moderateScale(25)}
      />
    );
  },
  'my-order': (props: { isFocused: boolean; color: string }): JSX.Element => {
    return (
      <PackageProcessIcon
        strokeWidth={1.2}
        color={props.color}
        width={moderateScale(25)}
        height={moderateScale(25)}
      />
    );
  },
  'my-cart': (props: { isFocused: boolean; color: string }): JSX.Element => {
    return (
      <ShoppingCartIcon
        strokeWidth={1.2}
        color={props.color}
        width={moderateScale(25)}
        height={moderateScale(25)}
      />
    );
  },
};
