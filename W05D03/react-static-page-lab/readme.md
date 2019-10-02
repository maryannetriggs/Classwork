# Building a Static Site with React

## Introduction

Since we just learned how to set up a React app, and how components work, we'll be practicing exactly that.

Your mission is to build a new React app from scratch, set up multiple components and render them all in a single parent `<App />` component. This will be a quick little site for a museum with information about a future exhibit, general museum information and hours, and donor information.

## Exercise

- Set up an React app and test that it works
- Make a components directory inside your src.
- Build 3 basic components:
  + `<Header />` containing the image a overview of the exhibit
  + `<GeneralInfo />` containing info about the admission prices and opening hours
  + `<DonorInfo />` containing info about donating to and contacting the museum
- Take the data from the `<App />` component's state and pass it down to each child component through props

#### Deliverable

<img width="752" src="https://cloud.githubusercontent.com/assets/25366/9002041/f942dad0-3713-11e5-838f-8670fd50c5cd.png">

## Getting started

- Install dependencies `npm i`
- Start the app using `npm run serve`

## Tips

- Check the terminal if something goes wrong. Webpack's error messages are pretty good!

- Use `map` to loop over arrays of data and render markup:

```
<ul>
  {this.props.hours.map(data => <li key={data.day}>{data.day}: {data.times}</li>}
</li>
```

> **Note**: when generating JSX in a loop, React needs a `key` prop with a unique value so that it can track any changes to the DOM efficiently
