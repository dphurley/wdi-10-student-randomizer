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
    { name: 'Susana Barnwell' },
    { name: 'Burns Beaver' },
    { name: 'Ashleigh Carroll' },
    { name: 'Aubrey Ellis' },
    { name: 'Jace Garcia' },
    { name: 'Jess Gardner' },
    { name: 'Sean Gilmore' },
    { name: 'Kris Green' },
    { name: 'William Huizenga' },
    { name: 'Joseph Hurley' },
    { name: 'Jackie Irons' },
    { name: 'Eric Jonelunas' },
    { name: 'David Kim' },
    { name: 'Richard Kim' },
    { name: 'Will Lai' },
    { name: 'Jessica Matty' },
    { name: 'Hunter McAfee' },
    { name: 'Edgar Mendez' },
    { name: 'Michael Newman' },
    { name: 'Jessica OBrien' },
    { name: 'Daniel Remel' },
    { name: 'Cyd Segui-Barreto' },
    { name: 'Rory Sullivan' },
    { name: 'Clarence Tooles' },
    { name: 'Jonathan Watson' },
    { name: 'David Weber' },
  ];

});
