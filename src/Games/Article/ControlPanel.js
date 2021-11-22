import React from 'react'

const ControlPanel = ({wordArray, limit,setLimit, setThreshold}) => {
    return (
        <div><div>QUESTION : {wordArray.length}</div>
        {localStorage.getItem("HIGH_SCORE") && (
          <div>PERSONAL HIGH SCORE: {localStorage.getItem("HIGH_SCORE")}</div>
        )}
        <div>
          LIMITS
          <div>
            FROM:
            <input
              type="number"
              value={limit.from}
              onChange={(e) => {
                setLimit((prev) => ({ ...prev, from: e.target.value }));
              }}
            />
          </div>
          <div>
            TO:{" "}
            <input
              type="number"
              value={limit.to}
              onChange={(e) => {
                setLimit((prev) => ({ ...prev, to: e.target.value }));
              }}
            />
          </div>
          <button
            onClick={() => {
              if (
                limit.from >= 0 &&
                (limit.from < limit.to || limit.to === undefined)
              ) {
                setThreshold(limit);
                wordArray = [];
              }
            }}
          >
            UPDATE
          </button>
        </div>
            
        </div>
    )
}

export default ControlPanel
