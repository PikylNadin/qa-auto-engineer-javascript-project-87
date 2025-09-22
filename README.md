### Hexlet tests and linter status:
[![Actions Status](https://github.com/PikylNadin/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/PikylNadin/qa-auto-engineer-javascript-project-87/actions)

[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-light.svg)](https://sonarcloud.io/summary/new_code?id=PikylNadin_qa-auto-engineer-javascript-project-87)

**GenDiff** это инструмент интерфейса командной строки, который сравнивает два конфигурационных файла и показывает разницу в одном из следующих выходных форматов: stylish, plain, json

### Установка
>note: для текущей версии GenDiff требуется Node.js версия 18.x или выше
* Склонируйте данный репозиторий
* для установки необходимых зависимостей:
```
make install
```
* для установки GenDiff глобально:
```
npm link
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

### compare 2 JSON (format: stylish):


### compare 2 YAML (format: plain):


### compare JSON and YAML (format: json):
