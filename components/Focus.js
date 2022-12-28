export default function Focus(props) {
  const smallView = (
    <div id="focus" className="center">
      <iframe id="small-focus" src={props.link} title={props.name}></iframe>
    </div>
  );
  const bigView = (
    <div id="focus" className="center">
      <iframe id="big-focus" src={props.link} title={props.name}></iframe>
    </div>
  );
  return smallView;
}
