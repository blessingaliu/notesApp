## Installing Jest 
```js
 npm init -y (creates a package.json
 npm install --save-dev jest
```

### Writing tests 

```js
// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});
```

```js
// not
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
```
</br>

### Matchers that check for TRUTHY & FALSY VALUES

// CHECK FOR TRUTHY & FALSY VALUES

// toBeNull matches only null

// toBeUndefined matches only undefined

// toBeDefined is the opposite of toBeUndefined

// toBeTruthy matches anything that an if statement treats as true

// toBeFalsy matches anything that an if statement treats as false

#### Matchers example
```js
// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});
```

```js
// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});
```

```js
// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});
```

```
// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});
```

```js
// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});
```
</br>

#### Working with async data

```js
// Promise
 test('User fetched name should be Leanne Graham', () => {
   expect.assertions(1);
   return functions.fetchUser().then(data => {
     expect(data.name).toEqual('Leanne Graham');
   });
 });
```

```js
// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
```

</br>

### Difference between toBe and toEqual Matcher
toBe is a strict matcher (===) which should be used for comparing primitive data types (eg number, string)

toEqual should be used when comparing reference types (eg object, array)


</br>

### Creating functions that run before and after the tests

#### Initdatabase function that runs before every test and closedatabase ran after every one

```js
beforeEach(() => initDatabase());
afterEach(() => closeDatabase());
```

#### Initdatabase function that runs before all of the tests, the tests run and the closedatabase runs after
```js
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());
```

```js
// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
```

#### function to run before and after a specific test
```js
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});
```
