import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

//// export
// export const App = function () {

//// export default
export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  // const step = 1;
  // const arr = useState(1);
  // console.log(arr); // (2) [1, ƒ]

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Amir" });

  function handlePrevious() {
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    // setTest({ name: "Nazi" });
    // if (step < 3) setStep(step + 1);
    ////
    //// not working برای این که دو تایی بره جلو
    // if (step < 3) {
    //   setStep(step + 1);
    //   setStep(step + 1);
    // }
    //// دومی هم داره به مقدار پیش فرض استیت اشاره میکنه
    ////
    //// this is working برای این که دو تایی بره جلو
    ////
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
  }
  return (
    <div>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            {/* //// messages[step - 1] => چون آرایه بیسش از صفر شروع میشود */}
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
