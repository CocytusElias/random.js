# random
![standard-readme compliant](https://img.shields.io/badge/typescript-v4.5.2-green.svg?style=flat-square)

Can randomly generate a specified type of string, support a variety of length, character composition types

## Table of Contents

- [Install](#install)
  - [CNPM](#cnpm)
  - [NPM](#npm)
  - [YARN](#yarn)
  - [PNPM](#pnpm)
- [Usage](#usage)
  - [Introduce](#introduce)
  - [Argument](#argument)
- [Example](#example)
  - [Javascript](#javascript)
  - [Typescript](#typescript)
- [Maintainers](#maintainers)

## Install
### CNPM
```
cnpm i comsvr-random --save
```

### NPM 
```
npm i comsvr-random --save
```

### YARN
```
yarn add comsvr-random
```

### PNPM
```
pnpm add comsvr-random
```


## Usage

### Introduce

Control the generated random string by passing in parameters such as type length options to function generateRandomStr

### Argument
```
generateRandomStr(type, length, options = {mix, customScope, mixCustomScope})
```
+ **type**: Used to specify the range of characters in the resulting random string, which is specified by reference to an enumeration of RandomType.There are mainly the following areas:
  + **RandomType**.**IntRandom**: All numbers from 0 to 9
  + **RandomType**.**LowerRandom**: All lowercase letters from A to Z
  + **RandomType**.**UpperRandom**: All capital letters between A and Z
  + **RandomType**.**LetterRandom**: All uppercase letters from A to Z and lowercase letters
  + **RandomType**.**IntLowerRandom**: IntRandom and lowerRandom union
  + **RandomType**.**IntUpperRandom**: IntRandom and upperRandom union
  + **RandomType**.**IntLetterRandom**: IntRandom and lowerRandom and upperRandom union
  + **RandomType**.**BinRandom**: Just 0 and 1
  + **RandomType**.**OctRandom**: All numbers from 0 to 7
  + **RandomType**.**DecRandom**: All numbers from 0 to 9, IntRandom is an alias
  + **RandomType**.**HexUpperRandom**: IntRandom and All capital letters between A and F
  + **RandomType**.**HexLowerRandom**: IntRandom and All capital letters between a and f
  + **RandomType**.**HexRandom**: IntRandom and All capital letters between a and f and All capital letters between A and F
+ **length**: The length of the resulting random string
+ **options**: This parameter is optional. The value is in json format
  + **options**.**mix**: Default confusable string to cull. The default string is o O 0 i I L l 1 q g 9 Q G
  + **options**.**customScope**: The range of custom characters to add, such as the concatenated string name, or special characters.
  + **options**.**mixCustomScope**: The range of custom characters to cull


## Example

### Javascript
```javascript
const {generateRandomStr, RandomType} = require("comsvr-random");
console.log(generateRandomStr(RandomType.IntRandom, 10)) // 3652887682
console.log(generateRandomStr(RandomType.LowerRandom, 10)) // aghdcdoiuy
console.log(generateRandomStr(RandomType.UpperRandom, 10, {mix:true})) // AXHDCDTHFY
console.log(generateRandomStr(RandomType.UpperRandom, 10, {mix:true, customScope:['a','c','f','5']})) // TREFa5BNMD
console.log(generateRandomStr(RandomType.UpperRandom, 10, {mix:true, customScope:['a','c','f','5'], mixCustomScope:['A','C','F']})) // TREfa5BNMD
```

### Typescript
```typescript
import {generateRandomStr, RandomType} from "comsvr-random";
console.log(generateRandomStr(RandomType.IntRandom, 10)) // 3652887682
console.log(generateRandomStr(RandomType.LowerRandom, 10)) // aghdcdoiuy
console.log(generateRandomStr(RandomType.UpperRandom, 10, {mix:true})) // AXHDCDTHFY
console.log(generateRandomStr(RandomType.UpperRandom, 10, {mix:true, customScope:['a','c','f','5']})) // TREFa5BNMD
console.log(generateRandomStr(RandomType.UpperRandom, 10, {mix:true, customScope:['a','c','f','5'], mixCustomScope:['A','C','F']})) // TREfa5BNMD
```

## Maintainers
[@eliassama](https://github.com/eliassama)
