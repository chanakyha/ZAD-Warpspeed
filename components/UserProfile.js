import React from "react";
const UserProfile = () => {
  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <div className="divider  divider-horizontal" />
          <img src="https://api.lorem.space/image/face?hash=92310" />
          <div className="text-black">TaylorSwift</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
