export default function Focus(props) {
  const smallView = (
    <div id="focus" className="center">
      <h2>Focus on: {props.focus}</h2>
    </div>
  );
  return smallView;
}
