import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerNewUser } from "../../Services/LoginService";
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import farmBg from "../../assets/images/farmbg.webp";

const RegisterUser = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [flag, setFlag] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [farmUser, setFarmUser] = useState({
    username: "",
    password: "",
    personalName: "",
    email: "",
  });

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    setFlag(false);
  }, []);

  const createNewUser = (event) => {
    event.preventDefault();

    if (farmUser.password === confirmPassword) {
      registerNewUser(farmUser)
        .then(() => {
          setFlag(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const onChangeHandler = (event) => {
    setFlag(false);

    const { name, value } = event.target;

    setFarmUser((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleValidation = (event) => {
    event.preventDefault();

    let tempErrors = {};
    let isValid = true;

    if (!farmUser.username.trim()) {
      tempErrors.username = "Username is required";
      isValid = false;
    }

    if (!farmUser.password.trim()) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (farmUser.password.length < 5 || farmUser.password.length > 10) {
      tempErrors.password = "Password must be 5-10 characters long";
      isValid = false;
    }

    if (!confirmPassword.trim()) {
      tempErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (farmUser.password !== confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!farmUser.personalName.trim()) {
      tempErrors.personalName = "Full Name is required";
      isValid = false;
    }

    if (!farmUser.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(farmUser.email)) {
      tempErrors.email = "Invalid Email Format";
      isValid = false;
    }

    setErrors(tempErrors);

    if (isValid) {
      createNewUser(event);
    }
  };

  const returnBack = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        height: "100vh",
        backgroundImage: `url(${farmBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "15px",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 70, 20, 0.55)",
        }}
      ></div>

      {/* Registration Card */}
      <Card
        style={{
          width: "470px",
          maxWidth: "100%",
          zIndex: 2,
          borderRadius: "22px",
          background: "rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.30)",
        }}
      >
        <Card.Body className="px-4 py-3">
          {/* Header */}
          <div className="text-center mb-3">
            <i
              className="bi bi-tree-fill"
              style={{
                fontSize: "42px",
                color: "#9be15d",
              }}
            ></i>

            <h2
              className="fw-bold text-white mt-1 mb-1"
              style={{ fontSize: "25px" }}
            >
              Create Account
            </h2>

            <p className="text-white mb-0" style={{ fontSize: "13px" }}>
              Join Intelligent Farm Operation Platform
            </p>
          </div>

          <Form>
            {/* Username */}
            <Form.Group className="mb-2">
              <Form.Label
                className="text-white fw-bold mb-1"
                style={{ fontSize: "16px" }}
              >
                {/* <i className="bi bi-person me-2"></i> */}
                Username
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="username"
                value={farmUser.username}
                onChange={onChangeHandler}
                style={{
                  height: "38px",
                  borderRadius: "9px",
                }}
              />

              {errors.username && (
                <small
                  style={{
                    color: "#ffb3b3",
                    fontWeight: "600",
                  }}
                >
                  {errors.username}
                </small>
              )}
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-2">
              <Form.Label
                className="text-white fw-bold mb-1"
                style={{ fontSize: "16px" }}
              >
                {/* <i className="bi bi-lock me-2"></i> */}
                Password
              </Form.Label>

              <Form.Control
                type="password"
                name="password"
                value={farmUser.password}
                onChange={onChangeHandler}
                placeholder="Enter Password"
                style={{
                  height: "38px",
                  borderRadius: "9px",
                }}
              />

              {errors.password && (
                <small
                  style={{
                    color: "#ffb3b3",
                    fontWeight: "600",
                  }}
                >
                  {errors.password}
                </small>
              )}
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group className="mb-2">
              <Form.Label
                className="text-white fw-bold mb-1"
                style={{ fontSize: "16px" }}
              >
                {/* <i className="bi bi-shield-lock me-2"></i> */}
                Confirm Password
              </Form.Label>

              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setFlag(false);
                }}
                placeholder="Confirm Password"
                style={{
                  height: "38px",
                  borderRadius: "9px",
                }}
              />

              {errors.confirmPassword && (
                <small
                  style={{
                    color: "#ffb3b3",
                    fontWeight: "600",
                  }}
                >
                  {errors.confirmPassword}
                </small>
              )}
            </Form.Group>

            {/* Full Name */}
            <Form.Group className="mb-2">
              <Form.Label
                className="text-white fw-bold mb-1"
                style={{ fontSize: "16px" }}
              >
                {/* <i className="bi bi-person-vcard me-2"></i> */}
                Full Name
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                name="personalName"
                value={farmUser.personalName}
                onChange={onChangeHandler}
                style={{
                  height: "38px",
                  borderRadius: "9px",
                }}
              />

              {errors.personalName && (
                <small
                  style={{
                    color: "#ffb3b3",
                    fontWeight: "600",
                  }}
                >
                  {errors.personalName}
                </small>
              )}
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label
                className="text-white fw-bold mb-1"
                style={{ fontSize: "16px" }}
              >
                {/* <i className="bi bi-envelope me-2"></i> */}
                Email
              </Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={farmUser.email}
                onChange={onChangeHandler}
                style={{
                  height: "38px",
                  borderRadius: "9px",
                }}
              />

              {errors.email && (
                <small
                  style={{
                    color: "#ffb3b3",
                    fontWeight: "600",
                  }}
                >
                  {errors.email}
                </small>
              )}
            </Form.Group>

            {/* Buttons */}
            <div className="d-grid gap-2">
              <Button
                variant="light"
                size="lg"
                onClick={handleValidation}
                style={{
                  height: "42px",
                  borderRadius: "9px",
                  color: "#198754",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                <i className="bi bi-person-plus-fill me-2"></i>
                Create Account
              </Button>

              <Button
                variant="light"
                size="lg"
                onClick={returnBack}
                style={{
                  height: "42px",
                  borderRadius: "9px",
                  color: "#198754",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Go To Login
              </Button>
            </div>

            {/* Success */}
            {flag && (
              <div className="text-center mt-2">
                <p
                  className="mb-0"
                  style={{
                    color: "#b7ffb7",
                    fontWeight: "700",
                    fontSize: "13px",
                  }}
                >
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Registration Successful
                </p>
              </div>
            )}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterUser;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerNewUser } from "../../Services/LoginService";
// import "../../DisplayView.css";
// import { Card, Form, Button } from "react-bootstrap";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import farmBg from "../../assets/images/farmbg.webp";

// const RegisterUser = () => {
//   const navigate = useNavigate();
//   const [errors, setErrors] = useState({});
//   const [flag, setFlag] = useState(false);
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [farmUser, setFarmUser] = useState({
//     username: "",
//     password: "",
//     personalName: "",
//     email: "",
//   });
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   useEffect(() => setFlag(false), []);
//   const createNewUser = (event) => {
//     event.preventDefault();
//     if (farmUser.password === confirmPassword)
//       registerNewUser(farmUser).then(() => setFlag(true));
//   };
//   const onChangeHandler = (event) => {
//     event.persist();
//     setFlag(false);
//     const { name, value } = event.target;
//     setFarmUser((values) => ({ ...values, [name]: value }));
//   };
//   const handleValidation = (event) => {
//     event.preventDefault();
//     let tempErrors = {};
//     let isValid = true;
//     if (!farmUser.username.trim()) {
//       tempErrors.username = "User Name is required";
//       isValid = false;
//     }
//     if (!farmUser.password.trim()) {
//       tempErrors.password = "Password is required";
//       isValid = false;
//     } else if (farmUser.password.length < 5 || farmUser.password.length > 10) {
//       tempErrors.password = "Password must be 5-10 characters long";
//       isValid = false;
//     } else if (farmUser.password !== confirmPassword) {
//       tempErrors.password = "Both the passwords are not matched";
//       isValid = false;
//     }
//     if (!farmUser.personalName.trim()) {
//       tempErrors.personalName = "Personal Name is required";
//       isValid = false;
//     }
//     if (!farmUser.email.trim()) {
//       tempErrors.email = "Email is required";
//       isValid = false;
//     } else if (!emailPattern.test(farmUser.email)) {
//       tempErrors.email = "Invalid Email Format";
//       isValid = false;
//     }
//     if (!confirmPassword.trim()) {
//       tempErrors.confirmPassword = "Confirm Password is required";
//       isValid = false;
//     }
//     setErrors(tempErrors);
//     if (isValid) createNewUser(event);
//   };
//   const returnBack = () => navigate("/");
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundImage: `url(${farmBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "rgba(0,70,20,.55)",
//         }}
//       ></div>
//       <Card
//         style={{
//           width: "500px",
//           zIndex: 2,
//           borderRadius: "25px",
//           background: "rgba(255,255,255,.18)",
//           backdropFilter: "blur(18px)",
//           border: "none",
//           boxShadow: "0 20px 50px rgba(0,0,0,.25)",
//         }}
//       >
//         <Card.Body className="p-5">
//           <div className="text-center mb-4">
//             <i
//               className="bi bi-tree-fill"
//               style={{ fontSize: "55px", color: "#9be15d" }}
//             ></i>
//             <h2 className="fw-bold text-white mt-2">Create Account</h2>
//             <p className="text-white">
//               Join Intelligent Farm Operation Platform
//             </p>
//           </div>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label className="text-white required">Username</Form.Label>
//               <Form.Control
//                 placeholder="Enter Username"
//                 name="username"
//                 value={farmUser.username}
//                 onChange={onChangeHandler}
//               />
//               {errors.username && (
//                 <p style={{ color: "#ffb3b3" }}>{errors.username}</p>
//               )}
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="text-white required">Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="password"
//                 value={farmUser.password}
//                 onChange={onChangeHandler}
//               />
//               {/* {errors.password && (
//                 <p style={{ color: "#ffb3b3" }}>{errors.password}</p>
//               )} */}
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="text-white required">
//                 Confirm Password
//               </Form.Label>
//               <Form.Control
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//               {errors.confirmPassword && (
//                 <p style={{ color: "#ffb3b3" }}>{errors.confirmPassword}</p>
//               )}
//               {errors.password && (
//                 <p style={{ color: "#ffb3b3" }}>{errors.password}</p>
//               )}
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="text-white required">Full Name</Form.Label>
//               <Form.Control
//                 placeholder="Enter Name"
//                 name="personalName"
//                 value={farmUser.personalName}
//                 onChange={onChangeHandler}
//               />
//               {errors.personalName && (
//                 <p style={{ color: "#ffb3b3" }}>{errors.personalName}</p>
//               )}
//             </Form.Group>
//             <Form.Group className="mb-4">
//               <Form.Label className="text-white required">Email</Form.Label>
//               <Form.Control
//                 placeholder="Enter Email"
//                 name="email"
//                 value={farmUser.email}
//                 onChange={onChangeHandler}
//               />
//               {errors.email && (
//                 <p style={{ color: "#ffb3b3" }}>{errors.email}</p>
//               )}
//             </Form.Group>
//             <div className="d-grid gap-2">
//               <Button
//                 variant="light"
//                 size="lg"
//                 onClick={handleValidation}
//                 style={{
//                   color: "#198754",
//                   fontWeight: "700",
//                 }}
//               >
//                 Create Account
//               </Button>

//               <Button
//                 variant="light"
//                 size="lg"
//                 onClick={returnBack}
//                 style={{
//                   color: "#198754",
//                   fontWeight: "700",
//                 }}
//               >
//                 <i className="bi bi-box-arrow-in-right me-2"></i>
//                 Go To Login
//               </Button>
//             </div>

//             {flag && (
//               <div className="text-center mt-3">
//                 <p style={{ color: "#b7ffb7" }}>Registration Successful</p>
//               </div>
//             )}
//           </Form>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };
// export default RegisterUser;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerNewUser } from "../../Services/LoginService";
// import "../../CSS/RegisterPageCss.css";
// import "../../DisplayView.css";

// const RegisterUser = () => {
//   let navigate = useNavigate();
//   const [errors, setErrors] = useState({});
//   const [farmUser, setFarmUser] = useState({
//     username: "",
//     password: "",
//     personalName: "",
//     email: "",
//   });
//   const [flag, setFlag] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   useEffect(() => {
//     setFlag(false);
//   }, []);

//   const createNewUser = (event) => {
//     event.preventDefault();
//     if (farmUser.password === confirmPassword) {
//       registerNewUser(farmUser).then((response) => {
//         setFlag(true);
//       });
//     }
//   };

//   const onChangeHandler = (event) => {
//     event.persist();
//     setFlag(false);
//     const name = event.target.name;
//     const value = event.target.value;
//     setFarmUser((values) => ({ ...values, [name]: value }));
//   };

//   const handleValidation = (event) => {
//     event.preventDefault();
//     let tempErrors = {};
//     let isValid = true;

//     if (!farmUser.username.trim()) {
//       tempErrors.username = "User Name is required";
//       isValid = false;
//     }

//     if (!farmUser.password.trim()) {
//       tempErrors.password = "Password is required";
//       isValid = false;
//     } else if (farmUser.password.length < 5 || farmUser.passwordlength > 10) {
//       tempErrors.password = "Password must be 5-10 characters long";
//       isValid = false;
//     } else if (farmUser.password !== confirmPassword) {
//       tempErrors.password = "Both the passwords are not matched";
//       isValid = false;
//     }

//     if (!farmUser.personalName.trim()) {
//       tempErrors.personalName = "Personal Name is required";
//       isValid = false;
//     }
//     if (!farmUser.email.trim()) {
//       tempErrors.email = "Email is required";
//       isValid = false;
//     } else if (!emailPattern.test(farmUser.email)) {
//       tempErrors.email = "Invalid Email Format";
//       isValid = false;
//     }

//     if (!confirmPassword.trim()) {
//       tempErrors.confirmPassword = "Confirm Password is required";
//       isValid = false;
//     }

//     setErrors(tempErrors);
//     if (isValid) {
//       createNewUser(event);
//     }
//   };

//   const returnBack = () => {
//     navigate("/");
//   };

//   return (
//     <div className="register-page">
//       <div className="register-container">
//         <div className="register-card">
//           <h2 className="register-title">New Farmer Registration</h2>

//           <form>
//             <div className="form-group">
//               <label>User Name</label>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 className="register-input"
//                 value={farmUser.username}
//                 onChange={onChangeHandler}
//               />
//               {errors.username && <p className="error">{errors.username}</p>}
//             </div>

//             <div className="form-group">
//               <label>Password</label>

//               <div className="password-container">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="Password"
//                   className="register-input"
//                   value={farmUser.password}
//                   onChange={onChangeHandler}
//                 />

//                 <span
//                   className="toggle-password"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </span>
//               </div>

//               {errors.password && <p className="error">{errors.password}</p>}
//             </div>

//             <div className="form-group">
//               <label>Confirm Password</label>
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 className="register-input"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//               {errors.confirmPassword && (
//                 <p className="error">{errors.confirmPassword}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <label>Personal Name</label>
//               <input
//                 type="text"
//                 name="personalName"
//                 placeholder="Personal Name"
//                 className="register-input"
//                 value={farmUser.personalName}
//                 onChange={onChangeHandler}
//               />
//               {errors.personalName && (
//                 <p className="error">{errors.personalName}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="register-input"
//                 value={farmUser.email}
//                 onChange={onChangeHandler}
//               />
//               {errors.email && <p className="error">{errors.email}</p>}
//             </div>

//             <button
//               type="button"
//               className="register-btn"
//               onClick={handleValidation}
//             >
//               Register
//             </button>
//           </form>

//           {flag && (
//             <div className="success-box">
//               <p className="success-message">Registration Successful!</p>

//               <button className="login-btn" onClick={returnBack}>
//                 Go to Login
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default RegisterUser;
