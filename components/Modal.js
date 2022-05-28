import React from "react";

const Modal = ({ id, state, setState, onSubmit }) => {
  return (
    <div>
      <input type="checkbox" id={id} class="modal-toggle" />
      <label htmlFor={id} class="modal cursor-pointer">
        <label class="modal-box relative" htmlFor="">
          <h3 class="text-lg font-bold">Enter your Flight Details</h3>
          <p class="py-4">
            <div className="flex flex-col space-y-5 w-full">
              <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3 w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  value={state.Fname}
                  onChange={(e) =>
                    setState({ ...state, Fname: e.target.value })
                  }
                  class="input input-bordered input-primary"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={state.Lname}
                  onChange={(e) =>
                    setState({ ...state, Lname: e.target.value })
                  }
                  class="input input-bordered input-primary"
                />
              </div>
              <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3 w-full">
                <input
                  type="text"
                  placeholder="Departure Airport"
                  value={state.DepAir}
                  onChange={(e) =>
                    setState({ ...state, DepAir: e.target.value })
                  }
                  class="input input-bordered input-primary"
                />
                <input
                  type="text"
                  placeholder="Destination Airport"
                  value={state.DestAir}
                  onChange={(e) =>
                    setState({ ...state, DestAir: e.target.value })
                  }
                  class="input input-bordered input-primary"
                />
              </div>
              <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3 w-full">
                <input
                  type="number"
                  placeholder="Mobile Number"
                  value={state.number}
                  onChange={(e) =>
                    setState({ ...state, number: e.target.value })
                  }
                  class="input input-bordered input-primary"
                />
                <input
                  type="datetime-local"
                  placeholder="Departure Airport"
                  value={state.DateTime}
                  onChange={(e) =>
                    setState({ ...state, DateTime: e.target.value })
                  }
                  class="input input-bordered input-primary"
                />
              </div>
              <div className="flex justify-items flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3 w-full">
                <label
                  onClick={() => alert("Working")}
                  className="btn btn-primary"
                >
                  Submit
                </label>
                {/* ERROR */}
              </div>
            </div>
          </p>
        </label>
      </label>
    </div>
  );
};

export default Modal;
