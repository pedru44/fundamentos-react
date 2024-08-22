export default function Cabecalho(props) {

  //const cor = 'text-'  + props.cor

  return (
    <>
      <div>
        <h1 className="{text-danger}">{props.titulo}</h1>
        <p>{props.subtitulo}</p>
      </div>
    </>
  );
}