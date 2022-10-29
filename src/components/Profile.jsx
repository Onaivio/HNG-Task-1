import React from "react";

const Profile = () => {
  return (
    <div className="space-y-3 mb-5 relative">
      <img
        id="profile__img"
        src="/user-img.png"
        alt="user-img"
        className="rounded-full mx-auto w-32 aspect-square object-cover"
      />
      <p className="text-center font-bold text-xl" id="twitter">
        Onaivi Okayin
      </p>
      <p className="text-center font-bold text-xl hidden" id="slack">
        onaivi okomayin
      </p>
      <img
        src="/lg-options.svg"
        alt=""
        className="absolute top-0 right-40 md:block hidden"
      />
      <img
        src="/sm-options.svg"
        alt=""
        className="absolute -top-5 right-0 md:hidden"
      />
    </div>
  );
};

export default Profile;
