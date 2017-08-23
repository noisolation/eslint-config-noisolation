# ESLint configuration for No Isolation projects

We have a few different configurations depending on the env used:

- `noisolation` - For Node.js projects
- `noisolation/react-native` - For React Native projects
- `noisolation/react` - React project

## Usage

In `package.json`:

``` JSON
{
  "name": "some-project",
  ...
  "eslintConfig": {
    "extends": "noisolation[/react|/react-native]"
  }
}
```

In `.eslintrc`:

``` JSON
{
  "extends": "noisolation"
}
```
