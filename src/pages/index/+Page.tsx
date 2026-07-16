import { useState } from 'react'

function Page() {
  const [isChecked, setIsChecked] = useState(true)

  return (
    <>
      <h1>App: Vike Lite + React</h1>

      <input
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={(event) => setIsChecked(event.target.checked)}
      />

      <br />

      The checkbox is: {isChecked ? 'checked' : 'unchecked'}
    </>
  )
}

export { Page }
