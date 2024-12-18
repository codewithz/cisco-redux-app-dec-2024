import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";

export default function WithdrawDepositComponent() {

  const dispatch=useDispatch();

  const withdrawAmount= ()=>{
    dispatch(actionCreators.withdrawMoney(100))
  }
  const depositAmount= ()=>{
    dispatch(actionCreators.depositMoney(100))
  }
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <button className="btn btn-info" onClick={depositAmount}>Deposit $100</button>
      <br />
      <br />
      <br />
      <button className="btn btn-danger" onClick={withdrawAmount}>Withdraw $100</button>
    </div>
  );
}
