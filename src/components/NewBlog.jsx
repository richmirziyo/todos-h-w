import { useState } from "react";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Avval tizimga kiring!");
      return;
    }

    try {
      const response = await fetch(
        "https://json-api.uz/api/project/fn37/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, content }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Ma'lumot muvaffaqiyatli qo‘shildi!");
        setTitle("");
        setContent("");
      } else {
        alert("Xatolik: " + data.message);
      }
    } catch (error) {
      alert("Tarmoq xatosi: " + error.message);
    }
  };

  return (
    <div>
      <h2>Yangi Blog Qo‘shish</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sarlavha"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Kontent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">Yuborish</button>
      </form>
    </div>
  );
};

export default NewBlog;
