function StudentInfo(props) {
  const { name, age, favoriteClass } = props;
  /**
   * Let's make props an object that has 3 properties:
   * - name - a string
   * - age - a number
   * - favoriteClass - a number
   */
  return (
    <p>
      {name} is {age} years old. Their favorite class is {favoriteClass}
    </p>
  );
}

export default StudentInfo;
