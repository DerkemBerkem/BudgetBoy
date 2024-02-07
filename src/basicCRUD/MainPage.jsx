import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

// schema = {
//     [{
//         id: 0x42069,
//         username: "budgetboi",
//         password: "yikesshouldntstorethisinplaintext",
//         posts: [{id, content, imgurl}]
//     }]
// }
const initialUser = {
  id: uuid(),
  username: "derek",
  password: "yikes",
  posts: [],
};

const getInitialData = () => {
  const data = localStorage.getItem("users");
  if (!data) return [initialUser];
  else return JSON.parse(data);
};

export default function MainPage() {
  const [users, setUsers] = useState(getInitialData);
  const [postContent, setPostContent] = useState("");
  console.log(users);

  const handlePost = (e) => {
    setUsers((oldUsers) => {
      const postObject = {
        id: uuid(),
        content: postContent,
      };
      const newPosts = [...oldUsers[0].posts, postObject];
      oldUsers[0].posts = newPosts;
      return [...oldUsers];
    });
    setPostContent("");
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const myCenter = {
    display: "flex",
    justifyContent: "center",
  };

  const myCenterPad = {
    display: "flex",
    justifyContent: "center",
    padding: "2vh",
    border: "solid black 1px",
    margin: "1vh",
    width: "30vw",
  };

  return (
    <div>
      <div style={myCenter}>
        <h1>SUCK MY BLOG</h1>
      </div>
      <div>
        <div>
          <h3 style={myCenter}>{users.length > 0 && users[0].username}</h3>
        </div>
        <div style={myCenter}>
          <input
            onChange={(e) => setPostContent(e.target.value)}
            type="text"
            name="Post"
            id="post"
            value={postContent}
          />
          <button onClick={handlePost}>Add post</button>
        </div>
        <div style={myCenter}>
          <div>
            {users.length > 0 &&
              users[0].posts.length > 0 &&
              users[0].posts.toReversed().map((c) => (
                <div style={myCenterPad} key={c.id}>
                  {c.content}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
