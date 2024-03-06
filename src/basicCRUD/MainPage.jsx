import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Post from "./Post";

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
  const [activeUser, setActiveUser] = useState(initialUser);
  const [loginUser, setLoginUser] = useState({
    username: initialUser.username,
    password: initialUser.password,
  });

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

  const handleDelete = (postObject) => {
    setActiveUser((oldUser) => {
      const userPosts = oldUser.posts.filter((obj) => obj !== postObject);
      oldUser.posts = userPosts;
      return { ...oldUser };
    });
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const myCenter = {
    display: "flex",
    justifyContent: "center",
  };

  const findUser = (username, password) => {
    const foundUsers = users.filter((u) => {
      return u.username == username && u.password == password;
    });
    if (foundUsers.length == 0) {
      return null;
    }
    return foundUsers[0];
  };

  const handleLogin = (e) => {
    const foundUser = findUser(loginUser.username, loginUser.password);
    if (foundUser != null) {
      setActiveUser(foundUser);
    }
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
    <>
      <div>
        <input
          onChange={(e) =>
            setLoginUser((old) => {
              return { ...old, username: e.target.value };
            })
          }
          type="text"
          name="Login"
          id="login"
          value={activeUser.username}
        />
        <input
          onChange={(e) =>
            setLoginUser((old) => {
              return { ...old, password: e.target.value };
            })
          }
          type="text"
          name="Login"
          id="login"
          value={activeUser.password}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
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
                activeUser.posts.length > 0 &&
                activeUser.posts
                  .toReversed()
                  .map((c) => (
                    <Post
                      postObject={c}
                      handleDelete={handleDelete}
                      styleStuff={myCenterPad}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
