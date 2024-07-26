# Use Github Copilot to help Software Development

## Step 1. Generate boilerplate code

We’re going to create a React app for a Todo List application. We’re going to use the help of GitHub Copilot to add some functionality.
We’ll first create a new project using

```
npm create vite@latest spotify-prompt-engineering-playlists --template react
```

Now we’ll use the Github Copilot chat to help us create the basic functionality of a Todo List application using vite+react.

    “I want to create a Todo List app in vite+react and typescript. How do I modify this project to do so? “
    This creates 2 more files: AddTodo.tsx and TodoList.tsx which handles adding new Todos to our list, and displaying the list of Todos we have now."

## Step 2. Generate docstrings and comments

We navigate to the definitions of the TodoList and AddTodo components and highlight the functions. In the Right click context menu, we use Copilot to generate the docstring.

## Step 3. Explain code functionality

We navigate to App.tsx and find that the toggleTodo function is slightly confusing. So we ask GitHub Copilot to explain what it does.

Response:

    “The provided code defines a function named toggleTodo in a React component written in TypeScript. This function is designed to toggle the completion status of a to-do item within a list of to-dos. The function takes a single parameter, id, which is a number representing the unique identifier of the to-do item that needs to be toggled.

    Inside the function, the setTodos function is called to update the state of the to-dos. The setTodos function is likely a state updater function returned by the useState hook, which is commonly used in React to manage state. The todos variable represents the current state of the to-do list.

    The map method is used to iterate over each to-do item in the todos array. For each to-do item, the code checks if the id of the current to-do item matches the id passed to the toggleTodo function. If there is a match, the code creates a new to-do object with all the properties of the current to-do item, but with the completed property toggled (i.e., if it was true, it becomes false, and vice versa). If there is no match, the current to-do item is returned unchanged.

    This approach ensures that the state is updated immutably, meaning that a new array of to-do items is created with the updated to-do item, rather than modifying the existing array directly. This is important in React to ensure that the component re-renders correctly when the state changes. "

## Step 4. Generate Unit Tests

To generate unit tests, we go to the GitHub Copilot chat and type:

    “How can I run the unit tests for my Todo List app in Vite+React+TypeScript?”

We get the following commands:

```
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

It then gives the contents of the `App.test.tsx` file.

It asks us to add the following script to `package.json`.

```
"scripts": {
  "test": "jest"
}
```

And then it asks us to run the following command:

```
npm test
```

## Step 5. Provide Explanations for Error Messages.

We get an error by following the suggested setup:

```
Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.
```

So GitHub Copilot asks us to install the necessary Babel presets and Jest transformers.

```
npm install --save-dev @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest
```

```
// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
```

```
// jest.config.js
module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'jsdom',
};
```

and asks us to run `npm test` again.

After a few other debugging steps, we finally are able to run the tests.

We notice that they fail because there is no Delete functionality, and some of the class behavior is not correct.
After modifying the tests, we are able to toggle, delete and add Todos.