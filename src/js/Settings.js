export default class Settings {
  constructor(key, value) {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.customerSettings = new Map();
    this.allSettings = [
      { theme: 'light' },
      { theme: 'gray' },
      { music: 'pop' },
      { music: 'rock' },
      { music: 'chillout' },
      { music: 'off' },
      { difficulty: 'normal' },
      { difficulty: 'hard' },
      { difficulty: 'nightmare' },
    ];
    // проверяем является ли настройка дефолтной
    const checkDefault = this.defaultSettings.get(key) === value;
    // проверяем существует ли настройка в массиве с остальными настройками
    const checkValue = this.allSettings.find((el) => el[key] === value);
    if (!checkDefault && !checkValue) {
      throw new Error('Настройка не найдена');
    }
    if (!checkDefault && checkValue) {
      this.defaultSettings.delete(key);
      this.customerSettings.set(key, value);
    }
    // если условие не сработает, то все останется, как есть
  }

  get settings() {
    return new Map([...this.customerSettings, ...this.defaultSettings]);
  }
}
