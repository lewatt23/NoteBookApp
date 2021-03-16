import {APP_LOCALE, PLATFORM} from '../constant';
import {Platform, NativeModules} from 'react-native';
import {loadCldr, loadMessages} from 'react-native-globalize';
import en from './en.json';
import fr from './fr.json';

loadCldr(
  require('react-native-globalize/locale-data/fr'),
  require('react-native-globalize/locale-data/en'),
);

loadMessages({
  en: en as any,
  fr: fr as any,
});

export const localeValue = (fromLocale?: string) => {
  const locale: string =
    Platform.OS === PLATFORM.IOS
      ? NativeModules.SettingsManager.settings.AppleLocale /* "fr_FR" */ ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  let lo = fromLocale?.substr(0, 2) || locale.substr(0, 2);

  if (/(fr)|(en)/.test(lo)) {
    return lo === 'fr' ? APP_LOCALE.French : APP_LOCALE.English;
  }

  return APP_LOCALE.English;
};
