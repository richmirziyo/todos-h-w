import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const New = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleAdd = async () => {
    try {
      const res = await fetch("https://json-api.uz/api/project/fn37/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ title }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Todo qo‘shildi");
        setTitle("");
      } else {
        alert("Xatolik: " + data.message);
      }
    } catch (error) {
      alert("Server bilan bog‘lanishda xatolik");
    }
  };

  return (
    <div>
      <h1>New Todo</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Yangi vazifa"
      />
      <button onClick={handleAdd}>Qo‘shish</button>
    </div>
  );
};

export default New;
