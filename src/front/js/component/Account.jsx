import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const Account = () => {
  return localStorage.token ? (
    <div className="container col-8 bg-danger d-flex justify-content-center mt-3 mb-3">
      <div className="text-light mt-3">
        <h2>Estás en tu cuenta</h2>
        <p>Aquí está tu regalo de bienvenida:</p>
        <i class="fas fa-poo"></i>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Account;
