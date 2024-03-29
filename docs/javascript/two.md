# JS 遇到过的坑

## 一、 JS 数字精度丢失的典型案例

- 两个简单的浮点数相加

  ```
  0.1+0.2 != 0.3  // true
  0.1 + 0.2 === 0.30000000000000004  // true
  ```

- 大整数运算

  ```
  9999999999999999 === 10000000000000001   // true
  ```

- toFixed 不会四舍五入（Chrome）

  ```
  1.335.toFixed(2)   // 1.33
  ```

- JS 数字精度丢失原因
  计算机的二进制存在位数限制，最长 64bit

| s   | eeeeee eeee | ffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff |
| --- | ----------- | ---------------------------------------------------------- |
| 1   | 11          | 52                                                         |

- 1 位表示符号位
- 11 位表示指数
- 52 位表示尾数

### 大整数的精度丢失和浮点数本质上是一样的，尾数位最大是 52 位，因此 JS 中能精准表示的最大整数是 Math.pow(2, 53)，十进制即 9007199254740992。
