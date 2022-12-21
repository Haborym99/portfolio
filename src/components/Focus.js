export default function Focus(props) {
  const smallView = (
    <div id="focus" className="center">
      <iframe id="small-focus" src={props.link} title={props.name}></iframe>
    </div>
  );
  const bigView = (
    <div id="focus-big" className="center">
      <h2>Focus on: {props.name}</h2>
      <img src={props.img} alt={props.name}></img>
    </div>
  );
  return smallView;
}
