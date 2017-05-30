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
    {name: 'Ben Floyd'},
    {name: 'Chris McClain'},
    {name: 'Christy Bartholomew'},
    {name: 'Clark Waite'},
    {name: 'Jeff Henneberg'},
    {name: 'Monica Grages'},
    {name: 'William Rausch'},
    {name: 'Yeni Nomezqui'},
    {name: 'Kate Montha'},
  ];

});
