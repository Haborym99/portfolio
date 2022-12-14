export default function Style(props) {
  const lightMode = { backgroundColor: "white" };
  const nightMode = { backgroundColor: "black" };
  if (props.mode !== "light") {
    return props.setTheme({ nightMode });
  } else {
    return props.setTheme({ lightMode });
  }
}
