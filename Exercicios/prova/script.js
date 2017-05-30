var i = 0;
var names = [{}];
localStorage.clear();

function save(form)
{
	var answer1 = form.question1.value;
	var answer2 = form.question2.value;
	var answer3 = form.question3.value;
	var answer4 = form.question4.value;
	var answer5 = form.question5.value;

	var points = 10;
	var grade = 0;
	var right_answers = 0;
	var wrong_answers = 0;

	if(answer1 == 1)
	{
		right_answers++;
	}
	else
	{
		wrong_answers++;
		points = points - 2;
	}

	if(answer2 == 1)
	{
		right_answers++;
	}
	else
	{
		wrong_answers++;
		points = points - 2;
	}

	if(answer3 == 1)
	{
		right_answers++;
	}
	else
	{
		wrong_answers++;
		points = points - 2;
	}

	if(answer4 == 1)
	{
		right_answers++;
	}
	else
	{
		wrong_answers++;
		points = points - 2;
	}

	if(answer5 == 1)
	{
		right_answers++;
	}
	else
	{
		wrong_answers++;
		points = points - 2;
	}

	grade = points;

	names[0].grade = grade;
	names[0].right_answers = right_answers;
	names[0].wrong_answers = wrong_answers;
	names[0].name = prompt('Digite seu nome');

	students = getStudents();

	if(students != null)
	{
		students.push(names[0]);
	}
	else
	{
		var students = [];
		students[0] = names[0];
	}

	localStorage.setItem("students", JSON.stringify(students));

	document.getElementById('test').reset();
}

function getStudents()
{
	var students = JSON.parse(localStorage.getItem("students"));

	return students;
}