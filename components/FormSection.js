import React, { useState, useRef } from "react";
import styles from "../styles/Form.module.css";

const FormSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  if (isSubmitted) {
    return (
      <div className={styles.formWrapper}>
        <div className="flex flex-col gap-4 items-center justify-center">
          <img src="/images/icon-complete.svg" alt="Form Submitted" />
          <h1 className="text-veryDarkViolet text-2xl font-bold">Thank You!</h1>
          <p className="font-semibold text-slate-400">
            We've added your card details
          </p>
          <button
            aria-label="click to continue"
            onClick={() => setIsSubmitted(false)}
            className={styles.submitBtn}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    formRef.current.reset();
  };



  return (
    <div className={styles.formWrapper}>
      <form onSubmit={submitHandler} ref={formRef} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="holder-name" className={styles.label}>
            Cardholder Name
          </label>
          <input
            required
            className={`${styles.input} peer`}
            type="text"
            id="holder-name"
            placeholder="e.g. Jane Appleseed"
          />
          <p className={styles.error}>Can't be Blank</p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="card-number" className={styles.label}>
            Card Number
          </label>
          <input
            required
            className={`${styles.input} peer`}
            type="number"
            id="card-number"
            placeholder="e.g. 1234 5678 9123 0000"
          />
          <p className={styles.error}>Wrong format, numbers only</p>
        </div>
        <div className="grid grid-cols-2 space-x-2">
          <div className={styles.inputContainer}>
            <label htmlFor="exp-month" className={styles.label}>
              Exp. Date (MM/YY)
            </label>
            <div className="grid grid-cols-2 gap-1">
              <input
                required
                className={`${styles.input} peer`}
                type="number"
                id="exp-month"
                placeholder="MM"
              />
              <input
                required
                className={`${styles.input} peer`}
                type="number"
                id="exp-year"
                placeholder="YY"
              />
            </div>
            <p className={styles.error}>Can't be Blank</p>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="cvc" className={styles.label}>
              CVC
            </label>
            <input
              required
              className={`${styles.input} peer`}
              type="number"
              maxLength="3"
              id="cvc"
              placeholder="e.g. 123"
            />
            <p className={styles.error}>Can't be Blank</p>
          </div>
        </div>
        <button className={styles.submitBtn}>Confirm</button>
      </form>
    </div>
  );
};

export default FormSection;
