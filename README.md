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
# 🆒 Styling

## 1. Inline Styling

- ✅ Applied directly within the `style` attribute of an element.
- ✅ Useful for quick styling without the need for external stylesheets.
- ✅ Less reusable compared to other styling methods.


```jsx
const Card = ({ children }) => {
  return (
    <div style={{
       color: "white" ,   // Text Color
       backgroundColor : "teal" ,  // Background Color
       padding : "2rem" ,        // Padding
       display: "inline-block" // Display
      }}>{children}</div>
  )
}

export default Card;
```
## 2. Dynamic Styling

- ✅ Uses JavaScript objects to store style properties.
- ✅ Allows conditional styling based on props or state.
- ✅ More readable and reusable than inline styling.

``` jsx
const styles = {
    color : "white", 
    backgroundColor : "crimson" , 
    padding : "2rem"
}

const Greetings = (props) => {
    return (
        <div>
            <p style={styles}>
            Hello! Great To See You Here {props.name}
            </p>
        </div>
    )
}
```

## 3. External Styling

- ✅ Uses an external CSS file for styling.
- ✅ Keeps styles separate from component logic, improving maintainability.
- ✅ Allows for easy global styling across multiple components.

``` jsx
import "../index.css"

const Button = ({onClick}) => {
    return (
        <button onClick={onClick}>Click Me!!!</button>
    )
};
```
### index.css
``` css
button {
    display: block;
    color : white ;
    padding: 5px;
    margin-bottom: 10px;
    background-color: aquamarine;
    border-width: 0px;
    border: none;
    border-radius: 4px;
}
```

# 🌲 Events

## 1. Onclick()

- ✅ The onClick event triggers when an element is clicked.
- ✅ It is commonly used for buttons, divs, or interactive elements.
- ✅ In the example, clicking the button triggers an alert message.

``` jsx
const Events = () => {
    return (
        <div>
            <button onClick={ () => alert('Button Clicked')}>Click Me</button>
        </div>
    )
};

export default Events;
```

## 2. Oncopy()

- ✅ The onCopy event fires when the user copies text.
- ✅ It helps in tracking when content is copied from a webpage.
- ✅ In the example, copying the paragraph triggers an alert.

``` jsx
const copyHandler = () => {
    alert('You Have Copied Some Text');
}
const Copy = () => {
    return (
        <p onCopy={ copyHandler }>Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. 
        Commodi impedit minus vitae explicabo labore
         nam laudantium nobis at quibusdam vero!</p>
    )
};

export default Copy;
```

# 💨 State

## Defination
State is a way to store and manage data that can change 
over time and affects how the component renders.
we define state using useState Hook, which allows us  
to set and initial value and provides a way to update the state.

## useState()
useState Hook allows us to track state in a functional component.
State generally refers to data or properties that need to be
tracking in an application.

## Syntax

``` jsx
const [data , changeData] = useState() ;
```

data -> Intial Value <br/>
changeData -> Change Value

#### Example
``` jsx
import {useState} from "react";

const State = () => {

    const [count , setCount] = useState(0) ;

    return <div>{count}</div>
}
export default State;
```

count --> variable <br/>
setCount --> function

## Note

When value of the state changes the component is re-rendered

### Example

``` jsx
import { useState } from "react";
const State = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return (
        <div>
            <p>{count}</p>
            <button onClick={ increment }>+</button>
        </div>
    )
}
export default State;
```

## useState() Using A Array

#### Example

``` jsx
import { useState } from "react";
const Friends = () => {
    const [friendsli, setFriends] = useState(["Arun", "Aditya"]);
    const addFriends = () => setFriends([...friendsli, "Souvik"]);
    return (
        <div>
            {friendsli.map((f) => (
                <li key={Math.random()}>{f}</li>
            ))}
            <button onClick={ addFriends }>Add Friends</button>
        </div>
    );
};
export default Friends;
```
##### Spread Operator
The spread operator (...) allows you to expand elements from an iterable (like an array, object, or string) into a new array or object. It is useful for copying, merging, and modifying data structures without mutating them

- In The Example Spread Operator Is Used : <br/>
...friendsli → The spread operator (...) is used to copy all elements from friendsli into a new array.

## useState() Using A Object

#### Example

``` jsx
import { useState } from "react";
const Movie = () => {
    const [movies, setMovies] = useState({
        title: 'Interstellar',
        rating: 5
    });
    const updateRating = () => {
        const copyMovie = {
            ...movies,
            rating: 3
        }
        setMovies(copyMovie);
    }
    return (
        <div>
            <h2>Title: {movies.title}</h2>
            <h2>Rating: {movies.rating}</h2>
            <button onClick={updateRating}>Update Rating</button>
        </div>
    );
}
export default Movie;
```