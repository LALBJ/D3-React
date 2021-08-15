import { useState } from "react"
import useInterval from './useInterval'

const generateDataset = () => (
    Array(10).fill(0).map(() => ([
      Math.random() * 80 + 10,
      Math.random() * 35 + 10,
    ]))
)

export const Circles = () => {
    const [dataset, setDataset] = useState(
        generateDataset()
    )

    useInterval(() => {
        console.log(dataset)
        const newDataSet = generateDataset()
        setDataset(newDataSet)
    }, 2000)

    return (
        <svg viewBox="0 0 100 50">
            {dataset.map(([x, y], i) => (
                <circle
                    cx={x}
                    cy={y}
                    r='3'
                />
            ))}
        </svg>
    )
}
