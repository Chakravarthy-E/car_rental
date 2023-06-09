import React from "react";

const AdminLogin = () => {
  return (
    <div>
      <form action="post">
        <h4 className="text-light">Login Admin Account</h4>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button type="sumbit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
