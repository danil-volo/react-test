import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import CustomInput from "./components/CustomInput";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import startCase from "lodash/startCase";
import Button from "./components/Button";

const checkOnlyLetters = (value) => {
  if (value.match(/^[A-Za-z]+$/)) {
    return "";
  } else {
    return "Letters Only";
  }
};

const checkAge = (value) => {
  if (value > 0) return "";

  return "Must be larger than 0";
};

const checkEmail = (value) => {
  if (value.match(/^(.+)@(.+)$/)) return "";

  return "Not a valid email";
};

const inputProps = [
  { label: "Name", type: "text", key: "name", validator: checkOnlyLetters },
  {
    label: "Surname",
    type: "text",
    key: "surname",
    validator: checkOnlyLetters,
  },
  { label: "Email", type: "email", key: "email", validator: checkEmail },
  { label: "Age", type: "number", key: "age", validator: checkAge },
  {
    label: "Favourite Color",
    type: "text",
    key: "favouriteColor",
    validator: checkOnlyLetters,
  },
];

const initialData = {
  name: "",
  surname: "",
  email: "",
  age: 20,
  favouriteColor: "",
  gender: "",
};

const App = () => {
  const [formData, setFormData] = useState(initialData);
  const [cardInfos, setCardInfos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardInfos((cardInfos) => [...cardInfos, formData]);
    setFormData(initialData);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormData(initialData);
  };

  const cards = useMemo(() => {
    return cardInfos.map((data) => (
      <Card backgroundColor={data.favouriteColor}>
        {Object.keys(data).map((key) => (
          <p key={key}>
            {startCase(key)}: {data[key]}
          </p>
        ))}
      </Card>
    ));
  }, [cardInfos]);

  return (
    <>
      <Card backgroundColor="green">
        <form>
          <Heading>Form</Heading>
          <SubHeading>Test Form</SubHeading>
          {inputProps.map(({ key, ...props }) => (
            <CustomInput
              {...props}
              key={key}
              value={formData[key]}
              onChange={(e) =>
                setFormData((data) => ({ ...data, [key]: e.target.value }))
              }
            />
          ))}
          <CustomInput
            type="radio"
            label="Male"
            name="gender"
            onChange={(e) => {
              if (e.target.checked) {
                setFormData((data) => ({ ...data, gender: "male" }));
              }
            }}
            value="male"
          />
          <CustomInput
            label="Female"
            type="radio"
            name="gender"
            onChange={(e) => {
              if (e.target.checked) {
                setFormData((data) => ({ ...data, gender: "male" }));
              }
            }}
            value="female"
          />
          <Button backgroundColor="green" color="yellow" onClick={handleSubmit}>
            Submit
          </Button>
          <Button backgroundColor="red" color="white" onClick={handleCancel}>
            Cancel
          </Button>
        </form>
      </Card>
      {cards}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
