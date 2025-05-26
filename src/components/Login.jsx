// import { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(
//         "https://json-api.uz/api/project/fn37/auth/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(form),
//         }
//       );

//       const data = await res.json();

//       if (res.ok && data.token) {
//         login(data.token);
//         navigate("/new");
//       } else {
//         alert("Login muvaffaqiyatsiz: " + (data.message || "Xatolik"));
//       }
//     } catch (error) {
//       alert("Server bilan bog‘lanishda xatolik");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         name="email"
//         onChange={handleChange}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         name="password"
//         onChange={handleChange}
//         placeholder="Parol"
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;

const handleLogin = async () => {
  const res = await fetch("https://json-api.uz/api/project/fn37/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "demo",
      password: "123456",
    }),
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.token); // MUHIM: token saqlash
    alert("Kirish muvaffaqiyatli");
  } else {
    alert("Login xatosi: " + data.message);
  }
};
