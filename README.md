# Learning React.js  

## Topics Covered  
- **Components** → Functional & Class-Based, Multiple Components  
- **JSX** → JavaScript XML & Its Rules  
- **Props** → Destructuring, Multiple Props, Function as Prop  

---

# 📌 NOTES  

## ⚡ React Components  

### 🔹 1. What are React Components?  
- Components are **reusable** building blocks in React.  
- Help in **modular**, **structured**, and **maintainable** UI development.  
- Can be of two types:  
  - **Functional Components** (Modern, simpler approach)  
  - **Class Components** (Older, more complex approach)  

---

### 🔹 2. Functional Components  
- ✅ A **function** that returns JSX.  
- ✅ Receives **props** as arguments.  
- ✅ Easier to read and maintain.  

```jsx
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
```
## 🔹 3. Class-Based Components
- ✅ Uses ES6 classes and extends React.Component.
- ✅ Requires a render() method to return JSX.
- ✅ Used before React Hooks were introduced.

```jsx
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
```

## 🔹 4. Multiple Components
- ✅ React applications consist of multiple components.
- ✅ Each component handles a specific UI section.
- ✅ Components can be combined to create complex interfaces.
``` jsx
const Header = () => <h1>Welcome to My Website</h1>;
const Footer = () => <p>© 2025 All rights reserved.</p>;

const App = () => {
  return (
    <div>
      <Header />
      <p>Main Content Goes Here</p>
      <Footer />
    </div>
  );
};
```
## 🔹 5. Nesting Components
- ✅ Components can be nested inside other components.
- ✅ Helps in better organization of the UI.

```jsx
const Profile = () => {
  return (
    <div>
      <Avatar />
      <UserInfo />
    </div>
  );
};
```

# ⚡ JSX (JavaScript XML)

## 🔹 1. What is JSX?
- JSX is a syntax extension that looks like HTML inside JavaScript.
- Allows writing UI components in an easier and more readable format.
- JSX elements must be wrapped in a single parent tag.

```jsx
const Element = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a JSX element.</p>
    </div>
  );
};
```

## 🔹 2. JSX Rules
- ✅ Must return a single parent element.
- ✅ Use camelCase for attributes (e.g., className instead of class).
- ✅ Embed JavaScript expressions inside {}.

```jsx
const name = "Alice";
const Element = () => <h1>Hello, {name}!</h1>;
```

## 🔹 3. JSX Expressions

# ⚡ Props (Properties)

## 🔹 1. What are Props?
- Props allow data flow from parent to child components.
- Props are read-only (immutable).

```jsx
const User = (props) => {
  return <p>Name: {props.name}</p>;
};

const App = () => {
  return <User name="Alice" />;
};
```

## 🔹 2. Destructuring Props
- ✅ Props can be destructured for cleaner syntax.

```jsx
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
```

## 3. Multiple Props
- ✅ A component can receive multiple props.

```jsx
const UserInfo = ({ name, age }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
};

const App = () => {
  return <UserInfo name="Alice" age={25} />;
};
```

## 4. Passing Functions as Props
- ✅ Functions can be passed as props to handle events.

```jsx
const Button = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};

const App = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return <Button onClick={handleClick} />;
};
```

## 5. Children Props
- ✅ The `children` prop is a **special prop** in React used to **render child elements** inside a component.  
- ✅ Allows components to wrap and display **nested elements** inside them. 
- ✅ The `children` prop enables a component to **wrap other elements**.  

```jsx
const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

const App = () => {
  return (
    <Card>
      <h2>Title</h2>
      <p>This is inside the Card component.</p>
    </Card>
  );
};
```

## 6. Children Props With Conditional Rendering

- ✅ Dynamically display diffrent UI components or content based on specific condition

```jsx

export const ValidPassword = () => {
  return (
    <div>Valid Password</div>
  )
}

export const InvalidPassword = () => {
    return (
      <div>Invalid Password</div>
    )
  }


export const Password = ({isValid}) => {

    if(isValid){
        return <ValidPassword />
    }
    return <InvalidPassword />
};

const App = () => {
  return (
    <Password isValid={true} />
  )
};
```