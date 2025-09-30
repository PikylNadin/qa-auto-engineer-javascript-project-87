### Hexlet tests and linter status:
[![Actions Status](https://github.com/PikylNadin/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/PikylNadin/qa-auto-engineer-javascript-project-87/actions)

[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-light.svg)](https://sonarcloud.io/summary/new_code?id=PikylNadin_qa-auto-engineer-javascript-project-87)

**GenDiff** это инструмент интерфейса командной строки, который сравнивает два конфигурационных файла и показывает разницу в одном из следующих выходных форматов: stylish, plain, json

### Установка
>note: для текущей версии GenDiff требуется Node.js версия 18.x или выше
* Склонируйте данный репозиторий
```
git clone https://github.com/PikylNadin/qa-auto-engineer-javascript-project-87.git
cd qa-auto-engineer-javascript-project-87
```
* для установки необходимых зависимостей:
```
npm ci
```

### Как использовать
```
Usage: gendiff [options] <filepath1> <filepath2>

Options:
  -V, --version        output the version number
  -f, --format <type>  output format: stylish (by default), plain, json
  -h, --help           display help for command
```

### GenDiff recordings on asciinema.org

### Сравнение 2 JSON (формат: stylish):
[![asciicast](https://asciinema.org/a/SIy70vu2cU7L9culEdMBNtVzJ.svg)](https://asciinema.org/a/SIy70vu2cU7L9culEdMBNtVzJ)

### Сравнение 2 YAML (формат: plain):
[![asciicast](https://asciinema.org/a/T4JrOWcISMY2Dz8wW7OaJr5kz.svg)](https://asciinema.org/a/T4JrOWcISMY2Dz8wW7OaJr5kz)

### Сравнение JSON and YAML (формат: json):
[![asciicast](https://asciinema.org/a/oyq8JMtAqRrv6gqP0L6r0BBW4.svg)](https://asciinema.org/a/oyq8JMtAqRrv6gqP0L6r0BBW4)
