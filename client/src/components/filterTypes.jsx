import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTypes, filterTypes } from "../store/actions";

export default function FilterTypes() {
    let types = useSelector((state) => state.types)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTypes());
    }, []);

    function handleChange(e) {
        dispatch(filterTypes(e.target.value));
    }

    return (
        <div>
            <p>Filtrar Por:</p>
            <select name='filterTypes' onChange={handleChange}  >

                <option value='Tipos de Pokemon'
                    label={'Tipos de Pokemon'} />

                {types && types.map((types) => {

                    return <option key={types.id} value={types.name} label={types.name} />

                })}
            </select>
        </div>
    )

}