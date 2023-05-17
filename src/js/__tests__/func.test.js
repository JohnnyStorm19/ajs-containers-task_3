import Settings from '../Settings';

test('Создается инстанс класса Settings', () => {
  const settings = new Settings();
  const res = {
    defaultSettings: new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]),
    customerSettings: new Map([]),
    allSettings: [
      { theme: 'light' },
      { theme: 'gray' },
      { music: 'pop' },
      { music: 'rock' },
      { music: 'chillout' },
      { music: 'off' },
      { difficulty: 'normal' },
      { difficulty: 'hard' },
      { difficulty: 'nightmare' },
    ],
  };
  expect(settings).toEqual(res);
});
test('Добавляются настройки пользователя после создания инстанса', () => {
  const settings = new Settings('theme', 'light');
  const res = new Map([['theme', 'light']]);
  expect(settings.customerSettings).toEqual(res);
});
test('Срабатывает геттер settings', () => {
  const settings = new Settings('music', 'off');
  const res = new Map([['music', 'off'], ['theme', 'dark'], ['difficulty', 'easy']]);
  expect(settings.settings).toEqual(res);
});
