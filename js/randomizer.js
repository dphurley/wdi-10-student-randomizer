$(function () {

  function displayNextStudentName() {
    var nextStudentIndex = Math.floor(Math.random() * students.length);
    var nextStudent = students[nextStudentIndex];

    $('#student-name').html(nextStudent.name);

    return nextStudentIndex;
  }

  function removeStudentFromList(studentIndexToRemove) {
    students.splice(studentIndexToRemove, 1);
  }

  $('#next-student-button').on('click', function () {
    var studentIndex = displayNextStudentName();

    removeStudentFromList(studentIndex);
  });

  var students = [
    { name: 'Aaron Trammell' },
    { name: 'Alex Dodita' },
    { name: 'Andre Robinson' },
    { name: 'Blake Pitts' },
    { name: 'Brad Farrell' },
    { name: 'Brandon Reily' },
    { name: 'Chris Mears' },
    { name: 'Erica Hinchman' },
    { name: 'Glenn Brown' },
    { name: 'Grant Spell' },
    { name: 'Jaden Poole' },
    { name: 'James Peterson' },
    { name: 'James Royals' },
    { name: 'Jayme Marshall' },
    { name: 'Jonathan Hamer' },
    { name: 'Khalif Cooper' },
    { name: 'Leon Carswell' },
    { name: 'Mark Flores' },
    { name: 'Musa Sillah' },
    { name: 'Nate Hodges' },
    { name: 'Hunter Maddux' },
    { name: 'Prakash Rai' },
    { name: 'Robert Calhoun' },
    { name: 'Rory Johnson' },
    { name: 'Skylar Youmans' },
    { name: 'Tom Beauregard' },
    { name: 'Tory Redner' },
    { name: 'Victoria Temple' }
  ]
});
