import { useState } from "react";

export default function ScoreKeeper({ players, winCount}) {
    const [scores, setScores] = useState(new Array(players).fill(0))
    const [finish, setFinish] = useState(false);
    const incScore = (i) => {
        console.log(finish)
        if (finish == true) {
            return
        }
        const newScores = [...scores]
        newScores[i] += 1
        if (newScores[i] >= winCount) {
            setFinish(true)
        }
        setScores(newScores)
    }

    const resetScores = () => {
        const freshScores = scores.map((e) => 0)
        setScores(freshScores)
        setFinish(false)
    }
    return (
        <div>
            <ul>
                {scores.map((score, idx) => {
                    return <div key={idx}>
                        <li>Player {idx + 1}: {score}</li>
                        <button onClick={() => incScore(idx)}>+1</button>
                        {score >= winCount && <p>Winner!</p>}
                    </div>
                })}        
            </ul>
            <button onClick={resetScores}>Reset</button>
        </div>
    )
}