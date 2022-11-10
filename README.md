# eslint-config-hireit

### Установка

```bash
$ npm install --save-dev eslint eslint-config-hireit
```

### Настройка

Доступные версии для конфигураций:

- `vanilla`
- `react`
- `react-typescript`
- TODO: `nestjs`, `vue`

Вы можете использовать его, указав `hireit` в `extends` разделе конфиг.
Пример

```json
{
  "extends": "hireit/react"
  // Additional rules...
}
```

#### Испопользование с Typescript:

```bash
$ npm i --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": "hireit/react-typescript"
}
```
