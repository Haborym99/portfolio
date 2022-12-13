export default function Style(props) {
  if (props.mode !== "light") {
    return {
      backGroundColor: "black",
    };
  } else {
    return {
      backGroundColor: "white",
    };
  }
}
