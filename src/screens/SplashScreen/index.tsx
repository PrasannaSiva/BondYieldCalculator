import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { useTheme } from '../../context/ThemeContext';
import AppText from '../../components/atoms/AppText';
import Icon from '../../components/atoms/Icon';
type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;
const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const { colors, isDark } = useTheme();
  const logoScale = useRef(new Animated.Value(0.3)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const lineWidth = useRef(new Animated.Value(0)).current;
  const tagOpacity = useRef(new Animated.Value(0)).current;
  const screenOpacity = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content');
    Animated.sequence([
      Animated.parallel([
        Animated.spring(logoScale, {
          toValue: 1,
          tension: 80,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(lineWidth, {
        toValue: 180,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(tagOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.delay(800),
      Animated.timing(screenOpacity, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.replace('Main');
    });
  }, []);
  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors.bgBase,
          opacity: screenOpacity,
        },
      ]}
    >
      {}
      {}
      <View
        style={[
          styles.orbTopLeft,
          {
            backgroundColor: `${colors.primary}25`,
          },
        ]}
      />
      <View
        style={[
          styles.orbTopRight,
          {
            backgroundColor: `${colors.accent}15`,
          },
        ]}
      />
      <View
        style={[
          styles.orbBottomLeft,
          {
            backgroundColor: `${colors.success}10`,
          },
        ]}
      />
      {}
      <Animated.View
        style={[
          styles.logoWrap,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}
      >
        <View
          style={[
            styles.logoIcon,
            {
              backgroundColor: `${colors.primary}15`,
              borderColor: `${colors.primary}35`,
            },
          ]}
        >
          <Icon name="logo" size={52} color={colors.primary} />
        </View>
      </Animated.View>
      {}
      <Animated.View style={{ opacity: textOpacity }}>
        <AppText variant="h1" color={colors.textPrimary} align="center">
          BondYield
        </AppText>
      </Animated.View>
      {}
      <Animated.View
        style={[
          styles.line,
          {
            width: lineWidth,
            backgroundColor: colors.primary,
          },
        ]}
      />
      {}
      <Animated.View style={{ opacity: tagOpacity }}>
        <AppText variant="label" color={colors.textMuted} align="center">
          Professional Bond Analytics
        </AppText>
      </Animated.View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  orbTopLeft: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 999,
    top: -100,
    left: -80,
  },
  orbTopRight: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 999,
    top: 40,
    right: -70,
  },
  orbBottomLeft: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 999,
    bottom: -80,
    left: -40,
  },
  logoWrap: {
    marginBottom: 8,
  },
  logoIcon: {
    width: 100,
    height: 100,
    borderRadius: 28,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 2,
    borderRadius: 2,
    opacity: 0.7,
  },
});
export default SplashScreen;
