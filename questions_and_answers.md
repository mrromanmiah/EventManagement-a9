<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`

<i>This is because the code has a typo in the first line, where the variable `greeting` is declared but not assigned a value. However, in the second line, the variable `greetign` (without the second ‘g’) is assigned an empty object `{}`. This creates a new global variable `greetign` that is different from `greeting`. Therefore, when the code tries to log `greetign` to the console, it prints out the empty object `{}` instead of throwing a reference error or returning undefined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>This is because the code performs a string concatenation instead of a numerical addition. When the function `sum` is called with arguments `1` and `"2"`, the first argument is a number and the second argument is a string. JavaScript tries to convert the number to a string and then append it to the other string. Therefore, the result is `"12"` which is a string, not a number.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>This is because the code does not modify the original array `food`, but only changes the value of the property `favoriteFood` in the object `info`. The property `favoriteFood` initially holds a reference to the first element of the array `food`, which is `"🍕"`. However, when the code assigns a new value `"🍝"` to `favoriteFood`, it does not affect the array `food` at all. Therefore, when the code logs `food` to the console, it prints out the original array `[‘🍕’, ‘🍫’, ‘🥑’, ‘🍔’]`.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>This is because the code calls the function `sayHi` without passing any argument for the parameter `name`. Therefore, the parameter `name` has the default value of `undefined`. When the function returns a template literal that interpolates the value of `name`, it results in the string `"Hi there, undefined"`. Therefore, when the code logs the return value of `sayHi` to the console, it prints out `“Hi there, undefined”`.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>This is because the code iterates over the array `nums` and increments the variable `count` by 1 for each element that is truthy. In JavaScript, the value `0` is falsy, while all other numbers are truthy. Therefore, the code skips the first element of the array, which is `0`, and adds 1 to `count` for the remaining elements, which are `1`, `2`, and `3`. Thus, the final value of `count` is `3`. Therefore, when the code logs `count` to the console, it prints out `3`.</i>

</p>
</details>
