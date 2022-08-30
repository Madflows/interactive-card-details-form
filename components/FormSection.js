import React from "react";
import styles from "../styles/Form.module.css";

const FormSection = () => {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="holder-name" className={styles.label}>Cardholder Name</label>
          <input className={styles.input} type="text" id="holder-name" placeholder="e.g. Jane Appleseed" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="card-number" className={styles.label}>Card Number</label>
          <input className={styles.input} type="text" id="card-number" placeholder="e.g. 1234 5678 9123 0000" />
        </div>
        <div className="grid grid-cols-2 space-x-2">
            <div className={styles.inputContainer}>
                <label htmlFor="exp-month" className={styles.label}>Exp. Date (MM/YY)</label>
                <div className="grid grid-cols-2 gap-1">
                    <input className={styles.input} type="number" id="exp-month" placeholder="MM" />
                    <input className={styles.input} type="number" id="exp-year" placeholder="YY" />
                </div>
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="cvc" className={styles.label}>CVC</label>
                <input className={styles.input} type="text" id="cvc" placeholder="e.g. 123" />
                
            </div>
        </div>
        <button className={styles.submitBtn}>Confirm</button>
      </form>
    </div>
  );
};

export default FormSection;
