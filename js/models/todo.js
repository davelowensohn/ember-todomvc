Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
{
	id: 1,
	title: 'Keep weird',
	isCompleted: true
},
{
	id: 2,
	title: 'Avoid confrontation',
	isCompleted: false
},
{
	id: 3,
	title: 'Drink too much',
	isCompleted: false
}
];