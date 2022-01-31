import { useDispatch } from "react-redux";
import { sort, sort_attack, sort_speed } from "../store/actions";
import { DESCENDENTE, ASCENDENTE, FUERTE, DEBIL, VELOZ, NOVELOZ } from "../constantes/sort";
import axios from "axios";

export default function Order() {
  let dispatch = useDispatch();

  function onChange(e) {
    dispatch(sort(e.target.value));
    // dispatch(sort_attack(e.target.value));
  }
  function onChangeAttack(e) {
    dispatch(sort_attack(e.target.value));
    // dispatch(sort_attack(e.target.value));
  }
  function onChangeSpeed(e) {
    dispatch(sort_speed(e.target.value));
    // dispatch(sort_attack(e.target.value));
  }


  return (
    <div>
      <p>Ordenar por: </p>
      <select name="select" onChange={onChange}>
        <option value='Orden Alfabetico'
          label={'Orden Alfabetico'} />
        <option value={ASCENDENTE}>Ascendente</option>
        <option value={DESCENDENTE}>Descendente</option>
      </select>
      <select name="selectAttack" onChange={onChangeAttack}>
        <option value='Orden Fuerza'
          label={'Orden Fuerza'} />
        <option value={FUERTE}>Mayor fuerza</option>
        <option value={DEBIL}>Menor fuerza</option>
      </select>
      <select name="selectSpeed" onChange={onChangeSpeed}>
        <option value='Orden Velocidad'
          label={'Orden Velocidad'} />
        <option value={VELOZ}>Mayor Velocidad</option>
        <option value={NOVELOZ}>Menor Velocidad</option>
      </select>
      

    </div>
  );
}
