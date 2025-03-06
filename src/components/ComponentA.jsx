import { Data } from "./Context";
import { Data1 } from "./Context";

const ComponentA = () => {
  return (
    <Data.Consumer>
      {(name) => {
        return (
            <Data1.Consumer>
                {(age) => {
                    return <h1>Name : {name} and Age: {age}</h1>
                }}
            </Data1.Consumer>
        )
      }}
    </Data.Consumer>
  );
};

export default ComponentA;
