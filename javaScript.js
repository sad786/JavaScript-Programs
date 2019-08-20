function change()
{
	var tags = getElementsByTagName("title")
	tags[0].text = "New Title"
	document.title = "New Title"
}