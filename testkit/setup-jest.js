const originConsoleError = console.error;
let errorsCount = 0;

console.error = function(...args) {
  errorsCount = errorsCount + 1;

  originConsoleError.apply(console, args);
};

beforeEach(() => {
  errorsCount = 0;
});

afterEach(() => {
  if (errorsCount) {
    throw new Error('Test has an Unhandled Errors');
  }
});
