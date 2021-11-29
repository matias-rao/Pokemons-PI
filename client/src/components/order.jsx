import { useDispatch } from "react-redux";
import { sort } from "../store/actions";
import { DESCENDENTE, ASCENDENTE } from "../constantes/sort";

export default function Order() {
  let dispatch = useDispatch();

  function onChange(e) {
    dispatch(sort(e.target.value));
  }
  return (
    <div>
      <select name="select" onChange={onChange}>
        <option value={ASCENDENTE}>ascendente</option>
        <option value={DESCENDENTE}>descendente</option>
      </select>
    </div>
  );
}
