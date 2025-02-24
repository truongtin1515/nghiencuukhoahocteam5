import React, { useState } from 'react'
import './Calculator.css'
import { toast } from 'react-toastify';
import image_gym2 from '../Assets/image_gym2.png'

const Calculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("");
    const [bmi, setBmi] = useState("");

    const calculateBMI = (e) =>{
        e.preventDefault();

        if (!height || !weight || !gender) {
            toast.error("Please enter valid height, weight and gender.");
            return;
        }
        const heightInMeters = height / 100;
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);
    
        if (bmiValue < 18.5) {
          toast.warning(
            "You are underweight. Consider seeking advide from a healthcare provider."
          );
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            toast.success(
              "You have normal weight. Keep maintaing a healthy lifestyle."
            );
          } else if (bmiValue >= 25 && bmiValue < 29.9) {
            toast.warning(
              "You are overweight. Consider seeking advide from a healthcare provider."
            );
        } else {
            toast.error(
              "You are in the obese range. It is recommended to seek advice from a healthcare specialist.."
            );
          }
        }
  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
          <div>
              <label>Ho</label>
              <input
                type="text"
              />
            </div>
            <div>
              <label>Ten</label>
              <input
                type="text"
              />
            </div>
            <div>
              <label>Chieu cao (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Can nang (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Gioi Tinh</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Chon gioi tinh</option>
                <option value="Male">Nam </option>
                <option value="Female">Nu</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
        <img src={image_gym2} alt=''/>
        </div>
      </div>
    </section>
  )
}

export default Calculator