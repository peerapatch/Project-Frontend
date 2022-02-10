import React, { useEffect, useState } from 'react'
import { dashboardData } from '../../hooks/dashboard'
// import StaffItem from './components/staffItem'

const Dashboard = () => {
  const [code, setCode] = useState(null)
  const [name, setName] = useState(null)
  const [credit, setCredit] = useState(null)
  const [section, setSection] = useState(null)
  const [capacity, setCapacity] = useState(null)
  const [lecturer, setLecturer] = useState(null)
  const [major, setMajor] = useState(null)
  const [classroom, setClassroom] = useState(null)
  const {
    // getsError,
    // isLoading,
    // dataRoi,
    subjects,
    submitSubject
    // submitAcc
  } = dashboardData()

  // console.log(getsError)

  const handlerSubmit = (e) => {
    e.preventDefault()
    const data = {
      code,
      name,
      credit,
      section,
      capacity,
      lecturer,
      major,
      classroom
    }
    console.log('data', data)
    submitSubject(data)
  }

  useEffect(() => {
    console.log('opened Dashboard')
  }, [])

  return (
    <section>

      <div className='container  containerSectionContent p-3 borderContent borderShadow'>
        <div className='title'>Add Subject</div>
        <form className='colCenter'>
          <div className='inputs'>
            <input
              type='text'
              placeholder='Subject Name'
              className='input w-full border mt-2 flex-1'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <input
              type='text'
              placeholder='Subject Code'
              className='input w-full border mt-2 flex-1'
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
              }}
            />
            <input
              type='number'
              placeholder='Credit'
              className='input w-full border mt-2 flex-1'
              value={credit}
              onChange={(e) => {
                setCredit(e.target.value)
              }}
            />
            <input
              type='number'
              placeholder='Section'
              className='input w-full border mt-2 flex-1'
              value={section}
              onChange={(e) => {
                setSection(e.target.value)
              }}
            />
            <input
              type='number'
              placeholder='Capacity'
              className='input w-full border mt-2 flex-1'
              value={capacity}
              onChange={(e) => {
                setCapacity(e.target.value)
              }}
            />
            <input
              type='text'
              placeholder='Lecturer'
              className='input w-full border mt-2 flex-1'
              value={lecturer}
              onChange={(e) => {
                setLecturer(e.target.value)
              }}
            />
            <input
              type='text'
              placeholder='Major'
              className='input w-full border mt-2 flex-1'
              value={major}
              onChange={(e) => {
                setMajor(e.target.value)
              }}
            />
            <input
              type='text'
              placeholder='Classroom'
              className='input w-full border mt-2 flex-1'
              value={classroom}
              onChange={(e) => {
                setClassroom(e.target.value)
              }}
            />
            <button
              type='submit'
              className='buttonCheck'
              onClick={handlerSubmit}
              // disabled={isLoading}
            >
              Add
            </button>
          </div>
        </form>
        <div className='title'>All Subjects</div>
        <table class='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Code</th>
              <th scope='col'>Name</th>
              <th scope='col'>Section</th>
              <th scope='col'>Capacity</th>
              <th scope='col'>Lecturer</th>
              <th scope='col'>Major</th>
              <th scope='col'>Classroom</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((item, key) => (
              <tr key={key}>
                <th scope='row'>{key + 1}</th>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.credit}</td>
                <td>{item.section}</td>
                <td>{item.capacity}</td>
                <td>{item.lecturer}</td>
                <td>{item.major}</td>
                <td>{item.classroom}</td>
              </tr>))}
          </tbody>
        </table>
        {/* {getsError ? <div className='title'>{getsError}</div> : !dataRoi ? '' : <StaffItem data={dataRoi} />} */}

      </div>
    </section>

  )
}
export default Dashboard
