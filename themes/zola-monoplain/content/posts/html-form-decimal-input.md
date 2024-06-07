+++
title = "I learned something new today: decimal input"
date = 2023-10-18
[taxonomies]
tags= ["HTML", "form", "input", "step", "decimal", "integer"]
+++

## Introduction

I learned something new today: decimal input values in HTML. With Browser native validation.

Working on a project where I needed to create a form with a number input field. In the beginning we needed to support interger values only. But later we needed to support decimal values too. So I started to search for a solution:

- use a text input field and validate the input
- use a number input field and allow decimal values

After some research I decided to use the second solution. But I had to learn something new about input type number.

## Number input

Try to submit the form with the following value `6.66`:

{{ markdown(title="input attr type is number" type="html", code='
  <form>
    <input type="number" />
    <input type="submit" />
  </form>
  <p>Input value: <span></span></p>
  <script>
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector("span").innerText = e.target.querySelector("input").value;
    });
  </script>
') }}

This will not work. The value will be set to `6` instead of `6.66` or the Browser will show an error message like:
> Please enter a valid value. The two nearest valid values are 6 and 7

Same with a `step` attribute set to `0.1` and try to submit the form with the following value `6.66`:

{{ markdown(title="input attr type is number and attr step is 0.1" type="html", code='
  <form>
    <input type="number" step="0.1" />
    <input type="submit" />
  </form>
  <p>Input value: <span></span></p>
  <script>
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector("span").innerText = e.target.querySelector("input").value;
    });
  </script>
') }}

This will not work. The value will be set to `6.7` instead of `6.66` or the Browser will show an error message like:
> Please enter a valid value. The two nearest valid values are 6.6 and 6.7

You might now set the step attribute to `0.01` and try to submit the form with the following value `6.66`:


{{ markdown(title="input attr type is number and attr step is 0.01" type="html", code='
  <form>
    <input type="number" step="0.01" />
    <input type="submit" />
  </form>
  <p>Input value: <span></span></p>
  <script>
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector("span").innerText = e.target.querySelector("input").value;
    });
  </script>
') }}

This will work. The value will be set to `6.66`.

But what if you want to support all possible decimal values?

You can set step to `0000001` for example. But that is not a good solution.
Or you can set step to `any`. This will allow all possible decimal values.

## Step attribute

> The step attribute is a number that specifies the granularity that the value must adhere to, or the special value any, which is described below. Only values which are equal to the basis for stepping (min if specified, value otherwise, and an appropriate default value if neither of those is provided) are valid. - [MDN Web Docs: input step](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#step)

## Decimal input

For decimal values, you can use the following code:

{{ markdown(title="input attr type is number and attr step is any" type="html", code='
  <form>
    <input type="number" step="any" />
    <input type="submit" />
  </form>
  <p>Input value: <span></span></p>
  <script>
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector("span").innerText = e.target.querySelector("input").value;
    });
  </script>
') }}

The step `any` value will allow all possible decimal values. Or more precisely, it will allow all possible values that can be represented by the JavaScript number type.

## Integer input

For integer values, you can use the following code:

{{ markdown(title="input attr type is number and attr step is 1" type="html", code='
  <form>
    <input type="number" step="1" />
    <input type="submit" />
  </form>
  <p>Input value: <span></span></p>
  <script>
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector("span").innerText = e.target.querySelector("input").value;
    });
  </script>
') }}

## Conclusion

The step attribute is a great way to limit number input. It can be used to increment or decrement the value by a certain amount, and it can also be used to limit the input to a certain type of number like integer or decimal.

The step attribute value you can also use `any` as value. This allow all possible decimal values.

In addition, the max and min attributes can be used to limit the range of the input.

The step attribute is supported by all major browsers, and it is easy to use. I hope this article has helped you learn more about the step attribute and how it can be used in your projects.

## References

- [MDN Web Docs: input step](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#step)
- [MDN Web Docs: input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#type)
- [MDN Web Docs: input type number](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)
