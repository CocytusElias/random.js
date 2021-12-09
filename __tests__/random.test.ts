import { generateRandomStr, RandomType } from '../src';

const randomTypeRegHash: {
  [index: string]: string;
} = {
  IntRandom: '^[0-9]',
  LowerRandom: '^[a-z]',
  UpperRandom: '^[A-Z]',
  LetterRandom: '^[A-Z|a-z]',
  IntLowerRandom: '^[a-z|0-9]',
  IntUpperRandom: '^[A-Z|0-9]',
  IntLetterRandom: '^[A-Z|a-z|0-9]',
  BinRandom: '^[0-1]',
  OctRandom: '^[0-8]',
  DecRandom: '^[0-9]',
  HexUpperRandom: '^[A-F|0-9]',
  HexLowerRandom: '^[a-f|0-9]',
  HexRandom: '^[A-F|a-f|0-9]',
};

for (let i = 0; i < 20; ++i) {
  const randomLength: number =
    Math.round(parseInt(`${Math.random() * 99}`)) || 10;
  // IntRandom
  const randomResult1: string = generateRandomStr(
    RandomType.IntRandom,
    randomLength,
  );
  test(`，类型：IntRandom ，生成内容：${randomResult1}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.IntRandom}{${randomLength}}$`).test(
        randomResult1,
      ),
    ).toBe(true);
  });

  // LowerRandom
  const randomResult2: string = generateRandomStr(
    RandomType.LowerRandom,
    randomLength,
  );
  test(`，类型：LowerRandom ，生成内容：${randomResult2}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.LowerRandom}{${randomLength}}$`).test(
        randomResult2,
      ),
    ).toBe(true);
  });

  // UpperRandom
  const randomResult3: string = generateRandomStr(
    RandomType.UpperRandom,
    randomLength,
  );
  test(`，类型：UpperRandom ，生成内容：${randomResult3}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.UpperRandom}{${randomLength}}$`).test(
        randomResult3,
      ),
    ).toBe(true);
  });

  // LetterRandom
  const randomResult4: string = generateRandomStr(
    RandomType.LetterRandom,
    randomLength,
  );
  test(`，类型：LetterRandom ，生成内容：${randomResult4}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.LetterRandom}{${randomLength}}$`).test(
        randomResult4,
      ),
    ).toBe(true);
  });

  // IntLowerRandom
  const randomResult5: string = generateRandomStr(
    RandomType.IntLowerRandom,
    randomLength,
  );
  test(`，类型：IntLowerRandom ，生成内容：${randomResult5}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.IntLowerRandom}{${randomLength}}$`).test(
        randomResult5,
      ),
    ).toBe(true);
  });

  // IntUpperRandom
  const randomResult6: string = generateRandomStr(
    RandomType.IntUpperRandom,
    randomLength,
  );
  test(`，类型：IntUpperRandom ，生成内容：${randomResult6}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.IntUpperRandom}{${randomLength}}$`).test(
        randomResult6,
      ),
    ).toBe(true);
  });

  // IntLetterRandom
  const randomResult7: string = generateRandomStr(
    RandomType.IntLetterRandom,
    randomLength,
  );
  test(`，类型：IntLetterRandom ，生成内容：${randomResult7}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.IntLetterRandom}{${randomLength}}$`).test(
        randomResult7,
      ),
    ).toBe(true);
  });

  // BinRandom
  const randomResult8: string = generateRandomStr(
    RandomType.BinRandom,
    randomLength,
  );
  test(`，类型：BinRandom ，生成内容：${randomResult8}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.BinRandom}{${randomLength}}$`).test(
        randomResult8,
      ),
    ).toBe(true);
  });

  // OctRandom
  const randomResult9: string = generateRandomStr(
    RandomType.OctRandom,
    randomLength,
  );
  test(`，类型：OctRandom ，生成内容：${randomResult9}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.OctRandom}{${randomLength}}$`).test(
        randomResult9,
      ),
    ).toBe(true);
  });

  // DecRandom
  const randomResult10: string = generateRandomStr(
    RandomType.DecRandom,
    randomLength,
  );
  test(`，类型：DecRandom ，生成内容：${randomResult10}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.DecRandom}{${randomLength}}$`).test(
        randomResult10,
      ),
    ).toBe(true);
  });

  // HexLowerRandom
  const randomResult11: string = generateRandomStr(
    RandomType.HexLowerRandom,
    randomLength,
  );
  test(`，类型：HexLowerRandom ，生成内容：${randomResult11}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.HexLowerRandom}{${randomLength}}$`).test(
        randomResult11,
      ),
    ).toBe(true);
  });

  // HexUpperRandom
  const randomResult12: string = generateRandomStr(
    RandomType.HexUpperRandom,
    randomLength,
  );
  test(`，类型：HexUpperRandom ，生成内容：${randomResult12}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.HexUpperRandom}{${randomLength}}$`).test(
        randomResult12,
      ),
    ).toBe(true);
  });

  // HexRandom
  const randomResult13: string = generateRandomStr(
    RandomType.HexRandom,
    randomLength,
  );
  test(`，类型：HexRandom ，生成内容：${randomResult13}, 长度：${randomLength}`, () => {
    expect(
      new RegExp(`${randomTypeRegHash.HexRandom}{${randomLength}}$`).test(
        randomResult13,
      ),
    ).toBe(true);
  });

  // other
  const randomResult14: string = generateRandomStr(
    RandomType.HexRandom,
    randomLength,
    {
      mix: true,
      customScope: ['z', 'Z', 'M', 'm', 'N', 'n'],
      mixCustomScope: [
        'a',
        'A',
        'b',
        'B',
        'c',
        'C',
        'd',
        'D',
        'e',
        'E',
        'F',
        'f',
        '5',
      ],
    },
  );
  test(`，类型：Other ，生成内容：${randomResult14}, 长度：${randomLength}`, () => {
    const successReg = new RegExp(
      `^[2-4|6-8|"z"|"Z"|"M"|"m"|"N"|"n"]{${randomLength}}$`,
    );
    const failReg = new RegExp(
      `^[0|1|5|9|"o"|"O"|"i"|"I"|"L"|"l"|"q"|"Q"|"g"|"G"|a-f|A-F]{${randomLength}}$`,
    );
    expect(
      successReg.test(randomResult14) && !failReg.test(randomResult14),
    ).toBe(true);
  });
}
