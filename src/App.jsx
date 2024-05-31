import { useState } from "react"

function App() {

  const [data, setData] = useState({
    weight: "",
    height: "",
    bmi: 0
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: +e.target.value
    })
  }

  const handleClick = () => {
    if (Object.values(data).includes('')) {
      setError('Todos los campos son obligatorios')
    }

    setTimeout(() => {
      setError('')
    }, 3000)

    const result = +(data.weight / Math.pow((data.height / 100), 2)).toFixed(1)

    setData({
      ...data,
      weight: "",
      height: "",
      bmi: result
    })

    setTimeout(() => {
      setData({
        weight: "",
        height: "",
        bmi: 0
      })
    }, 5000)

  }



  return (
    <>
      <div className="mx-10 my-32 h-full bg-white md:mx-auto md:w-1/4 border shadow-md rounded-lg">
        <h1 className="text-2xl text-center font-bold p-6">Calculadora BMI</h1>

        {error && <p className="text-red-600 text-center font-bold">{error}</p>}
        <div className="flex flex-col p-5 gap-3">
          <label htmlFor="weight">Peso (Kg):</label>

          <input
            type="number"
            className="w-full bg-gray-200 rounded-full text-center"
            id="weight"
            name="weight"
            placeholder="ejm: 30"
            value={data.weight}
            onChange={handleChange}
          />

          <label htmlFor="height">Altura (cm):</label>
          <input
            type="number"
            id="height"
            name="height"
            className="w-full bg-gray-200 rounded-full text-center"
            placeholder="ejm: 165"
            value={data.height}
            onChange={handleChange}
          />

          <button
            className="bg-blue-500 w-full p-1 rounded-full text-white font-bold my-3"
            onClick={handleClick}
          >
            Calcular BMI
          </button>

          {data.bmi>0 ? <p className="text-center font-bold">Tu BMI es: {data.bmi}</p>:""}

        </div>


      </div>
    </>
  )
}

export default App
