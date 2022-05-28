import React from "react";

const Details = ({ state, setState, onSubmit }) => {
  return (
    <div className="flex p-5 flex-col justify-center items-center m-5">
      <h3 className="text-lg font-bold">Enter your Flight Details</h3>
      <p className="py-4">
        <div className="flex flex-col space-y-5 w-full">
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3 w-full">
            <input
              type="text"
              placeholder="First Name"
              value={state.Fname}
              onChange={(e) => setState({ ...state, Fname: e.target.value })}
              className="input input-bordered input-primary"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={state.Lname}
              onChange={(e) => setState({ ...state, Lname: e.target.value })}
              className="input input-bordered input-primary"
            />
          </div>
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3 w-full">
            <input
              type="text"
              placeholder="Departure Airport"
              value={state.DepAir}
              onChange={(e) => setState({ ...state, DepAir: e.target.value })}
              className="input input-bordered input-primary"
            />
            <input
              type="text"
              placeholder="Destination Airport"
              value={state.DesAir}
              onChange={(e) => setState({ ...state, DesAir: e.target.value })}
              className="input input-bordered input-primary"
            />
          </div>
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3 w-full">
            <input
              type="number"
              placeholder="Mobile Number"
              value={state.number}
              onChange={(e) => setState({ ...state, number: e.target.value })}
              className="input input-bordered input-primary"
            />
            <input
              type="date"
              placeholder="Departure Airport"
              value={state.DateTime}
              onChange={(e) => setState({ ...state, DateTime: e.target.value })}
              className="input input-bordered input-primary"
            />
          </div>
          <div className="flex justify-items flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3 w-full">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Details;
