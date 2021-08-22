import React, { useContext } from "react"
import PropTypes from "prop-types"

import { MapContext } from "./MapProvider"
import useGeographies from "./useGeographies"

const Geographies = ({
    geography,
    children,
    parseGeographies,
    className = "",
    ...restProps
}) => {
    const { path, projection } = useContext(MapContext)
    const { georaphies,  }
    return (
        <g>
            <rect width="200px" height="200px"/>
        </g>
    )
}

export default Geographies