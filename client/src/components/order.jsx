import { useDispatch } from "react-redux";
import { sort, sort_attack } from "../store/actions";
import { DESCENDENTE, ASCENDENTE, FUERTE, DEBIL } from "../constantes/sort";
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


  return (
    <div>
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

    </div>
  );
}
