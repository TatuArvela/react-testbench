# Notes

Useful starter commands:
```
npx create-react-app client --template typescript
yarn add --dev prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-simple-import-sort
```


## Presentation

### Intro

I'm Tatu Arvela, and I have been here at Nitor for around 1 and a half years now.

This presentation is about automated testing on React. I will go through several types and methods of testing,
explaining best practices and caveats with the help of an example project I have made.

What is automated testing? In an automated test, we give some piece of software, such as a component or a function, a
certain state or input, and we compare the output to an assertion of what it should be. For example, a sum function,
given 2 and 2, should return 4. This example is a unit test. There are other levels and approaches of testing,
but I won't cover everything here.


### Why test?

Automated tests are useful, as they bring confidence into a software project, especially when used alongside with static
code analysis tools like linters and code reviews.

At the time of writing the tests, they are especially helpful in verifying that the code works as expected. Tests may
uncover bugs, or help with some debugging process.

Down the line, tests will help to reveal regressions when refactoring code or upgrading dependencies. Reading tests
can also act as documentation which helps a new developer understand how a program works, and are especially helpful in
large projects with a long legacy.

Writing automated tests might not always be adequately budgeted for in projects, as some of us might know from
experience. Manual testing takes time though, and especially in larger codebases, testing each usage of some shared
component will get exhausting, and we might miss some things.


### Testable code

In order to write tests, we need to write testable code. What this means is that the components should be about as small
as necessary, and any complex logic should be split into separately tested functions. Functionally written code is
generally easier to test than object-oriented code.

One possible approach is using the presentational and container component pattern. This means splitting the component
logic and state management into a container component, and the rendering into a presentational component. This way we
can test separately what props the container component gives out in certain situations, and what the presentational
component looks like when given certain props.


### The tools

The current testing utilities endorsed by React are Jest, which is a test framework used to run a set of tests, and
Testing Library, which is used to query and interact with DOM nodes. When using `create-react-app`, we can simply run
the `test` npm script, which runs `react-scripts test`, which runs `jest` under the hood.

Previously common frameworks and tools include Mocha, Chai, Sinon and Enzyme, but the new tools are a lot easier to use.

We can check the test coverage of our code, to see if there are components especially lacking in tests. This can
be done with the `--coverage` option for Jest. Full coverage is usually not a reasonable goal, instead one should first
cover functions that process data, and then see if there is something else that could be covered.

Just something I'd like to mention as a side-note, to evaluate the quality of our tests, we can also use something
called mutation testing. This runs the tests against multiple versions of the code that have been automatically modified
to be incorrect. This helps to identify weak tests that could allow buggy code. The most popular option to use with Jest
would be StrykerJS.


### Testing methods


### Mocking


### More methods

Test-driven development is a process where the requirements are first written into test cases, and only then is the
software fully developed to meet those cases.

Finally, I want to briefly demonstrate a tool called Storybook. It's not automated testing, but stories help to
evaluate components, especially when written with knobs, which allow setting component props dynamically. This is
possibly overkill for most projects, but it could help with components that are shared between features, or with
components that are deep in a form wizard flow, for example.
