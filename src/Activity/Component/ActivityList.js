import React from 'react'

function ActivityList() {
  return (
    <>
      <select class="form-select" aria-label="Default select example">
        <option selected value="Workout">Workout</option>
        <option value="Cardio">Cardio</option>
      </select>
      <input type="number"
              placeholder='Add Calories Burned'
              name='caloriesBurned' />
      <select class="form-select" aria-label="Default select example" placeholder='Choose workout Type'>
        <option selected value="chestworkout">CHESTWORKOUT</option>
        <option value="backworkout">BACKWORKOUT</option>
        <option selected value="legsworkout">LEGSWORKOUT</option>
        <option value="shoulderworkout">SHOULDERWORKOUT</option>
        <option selected value="bicepsworkout">BICEPSWORKOUT</option>
        <option value="tricepsworkout">TRICEPSWORKOUT</option>
        <option value="absworkout">ABSWORKOUT</option>       
      </select>
      <input type="number"
              placeholder='Add Number Of Reps'
              name='noOfReps' />
      <select class="form-select" aria-label="Default select example" placeholder='Choose workout Type'>
        <option selected value="sunday">SUNDAY</option>
        <option value="monday">MONDAY</option>
        <option selected value="tuesday">TUESDAY</option>
        <option value="wednesday">WEDNESDAY</option>
        <option selected value="thursday">THURSDAY</option>
        <option value="friday">FRIDAY</option>
        <option value="saturday">SATURDAY</option>       
      </select>
      <input type="boolean"
              placeholder='add successflag'
              name='successFlag' />
    </>
  )
}

export default ActivityList