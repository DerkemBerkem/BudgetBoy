export default function Post({ postObject, handleDelete, styleStuff }) {
  return (
    <div style={styleStuff} id={postObject.id}>
      <div>{postObject.content}</div>
      <button onClick={() => handleDelete(postObject)}>Delete</button>
    </div>
  );
}
