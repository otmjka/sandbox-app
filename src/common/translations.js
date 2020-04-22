import enTranslationMessages from '../translations/en.json';
import config from '../config';

const formatTranslationMessages = (locale, messages) => {
  const { defaultLocale } = config.common;
  const messageKeys = Object.keys(messages);
  const defaultFormattedMessages = locale !== defaultLocale
    ? formatTranslationMessages(defaultLocale, enTranslationMessages)
    : {};

  return messageKeys.reduce((formattedMessages, key) => {
    const isDefaultFormattedMessage = !messages[key] && locale !== defaultLocale;
    const formattedMessage = isDefaultFormattedMessage
      ? defaultFormattedMessages[key]
      : messages[key];

    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export default {
  en: formatTranslationMessages('en', enTranslationMessages),
};
