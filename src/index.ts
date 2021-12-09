/**
 * 以下是声明预先定义的字符串集合，具体的声明逻辑为：
 *      1. 随机字符串基本的字符范围就是字母、数字、特殊字符。
 *      2. 随机字符串的生成结果无非是针对大写字母、小写字母、数字的一个取舍，即要什么字符，不要什么字符。
 *          比如纯数生成、纯小写字母生成、纯大写字母生成、大小写字母生成等等，所以将随机字符进行了一个拆分，依据是大写、小写、数字
 *          而对于指定进制的字符串生成则是需要首先判断在十进制左还是右，如二进制，只可能是IntScope中的前两个字符范围。如十六进制除了整个IntScope还要根据大小写区分去取字母范围中的前六个字符。
 *          这样拆分既不会显得很乱，也不会出现较高的代码冗余性。
 *      3. 在生成随机字符串的时候，会有一些要求，比如不能带有1、l、i、｜这种易混淆字符，所以需要有专门去存储这种易混淆字符。
 *      4. 为什么没有特殊字符的scope？这是因为特殊字符本身有些特殊，在不同的场景下，可能需要不同scope范围的特殊字符，所以特地设计了一个options.customScope参数来去增加想要设置的scope
 */

const IntScope: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const LowerScope: string[] = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const UpperScope: string[] = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const MixScope: string[] = [
  'o',
  'O',
  '0',
  'i',
  'I',
  'L',
  'l',
  '1',
  'q',
  'g',
  '9',
  'Q',
  'G',
];

/**
 * 针对于可生成的随机字符串类型，做如下解释：
 *      IntRandom：生成 纯数字 随机符串
 *      LowerRandom：生成 纯小写字母 随机字符串
 *      UpperRandom：生成 纯大写字母 随机字符串
 *      LetterRandom：生成 纯字母（含大写及小写） 随机字符串
 *      IntLowerRandom：生成 小写字母 + 数字 随机字符串
 *      IntUpperRandom：生成 大写字母 + 数字 随机字符串
 *      IntLetterRandom：生成 大写字母 + 小写字母 + 数字 随机字符串
 *      BinRandom：生成 二进制 随机字符串
 *      OctRandom：生成 八进制 随机字符串
 *      DecRandom：生成 十进制 随机字符串，可以看作是IntRandom的别名
 *      HexLowerRandom：生成 小写的十六进制 随机字符串
 *      HexUpperRandom：生成 大写的十六进制 随机字符串
 *      HexRandom：生成 包含有大写及小写的十六进制 随机字符串
 */
export enum RandomType {
  IntRandom,
  LowerRandom,
  UpperRandom,
  LetterRandom,
  IntLowerRandom,
  IntUpperRandom,
  IntLetterRandom,
  BinRandom,
  OctRandom,
  DecRandom,
  HexLowerRandom,
  HexUpperRandom,
  HexRandom,
}

export type RandomOptionsType = {
  mix: boolean;
  customScope: string[];
  mixCustomScope: string[];
};

/***
 * @description 随机字符生成核心方法
 * @param { RandomType } type 要生成随机字符的范围
 * @param { number } length 生成的长度
 * @param { RandomOptionsType } options 选项
 * @param { boolean } options.mix 是否去除预设的易混淆字段
 * @param { string[] } options.customScope 要增加的自定义字符范围
 * @param { string[] } options.mixCustomScope 要去除的自定义字符范围
 * @returns { string } 生成的随机字符
 */
export function generateRandomStr(
  type: RandomType,
  length: number,
  options: RandomOptionsType = {
    mix: false,
    customScope: [],
    mixCustomScope: [],
  },
): string {
  let randomStr = '';
  const { mix, customScope, mixCustomScope }: RandomOptionsType = options;
  let mixChartScope: string[] = mixCustomScope;
  let source: string[];
  switch (type) {
    case RandomType.IntRandom:
    case RandomType.DecRandom:
      source = IntScope;
      break;
    case RandomType.LowerRandom:
      source = LowerScope;
      break;
    case RandomType.UpperRandom:
      source = UpperScope;
      break;
    case RandomType.LetterRandom:
      source = UpperScope.concat(LowerScope);
      break;
    case RandomType.IntLowerRandom:
      source = IntScope.concat(LowerScope);
      break;
    case RandomType.IntUpperRandom:
      source = IntScope.concat(UpperScope);
      break;
    case RandomType.IntLetterRandom:
      source = IntScope.concat(UpperScope.concat(LowerScope));
      break;
    case RandomType.HexLowerRandom:
      source = IntScope.concat(LowerScope.slice(0, 6));
      break;
    case RandomType.HexUpperRandom:
      source = IntScope.concat(UpperScope.slice(0, 6));
      break;
    case RandomType.HexRandom:
      source = IntScope.concat(
        UpperScope.slice(0, 6).concat(LowerScope.slice(0, 6)),
      );
      break;
    case RandomType.BinRandom:
      source = IntScope.slice(0, 2);
      source = source.concat(source.concat(source).concat(source));
      break;
    case RandomType.OctRandom:
      source = IntScope.slice(0, 8);
      break;
  }

  if (customScope.length !== 0) {
    source = source.concat(
      customScope.filter(function (v) {
        return source.indexOf(v) === -1;
      }),
    );
  }

  if (mix) {
    mixChartScope = mixChartScope.concat(MixScope);
  }

  source = source.filter(function (chart) {
    return mixChartScope.indexOf(chart) === -1;
  });

  for (let i = 0; i < length; i++) {
    const pos: number = Math.round(
      parseInt(`${Math.random() * (source.length - 1)}`),
    );
    randomStr += source[pos];
  }

  return randomStr;
}
