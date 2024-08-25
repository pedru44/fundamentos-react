export default function Cabecalho(props) {

  //const cor = 'text-'  + props.cor

  return (
    <>
      <div>
        <h1>{props.titulo}</h1>
        <p>{props.subtitulo}</p>
      </div>
    </>
  );
}