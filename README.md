# Project #2: Building Your First Full-Stack Application

#Title: FlexSwim

#Concept Design

#Problem Statement
Swimming is a sport that requires a lot of practice, proper technique, and training.
Discipline is tough if there is nothing to hold them accountable in practicing the various swimming strokes they have learned

#Solution Statement
Provide an app that gives swimmers flexibility to choose from planned swimming workouts, or they can edit any and all workouts according to their schedule

#User-Stories
1. As a swimmer, I want to track my distance, duration and strokes (a complete cycle of a chosen workout)
2. As a swimmer, I want to create a list of finished workouts so I can see how much time have I spent on practicing a particular stroke and cover how many kilometres
3. As a swimmer, I want to know which stroke I should pay more attention to as I may have neglected some strokes
4. As a swimmer, I want to edit/delete my workout schedule so that it fits my current working schedule

#User-Flow
https://files.slack.com/files-pri/T0351JZQ0-FT9S8F56G/img_20200129_232139.jpg

#Wireframing


#ERD
https://www.lucidchart.com/documents/edit/b301538d-20f9-4de3-a2f3-10dc266ff93a/0_0

# Build a RESTful Interface using express
URL	HTTP Verb	Action	Purpose
'/' GET main Landing page
'/show'	GET	index	See all swim workouts
'/workout/new'	GET	new	Display the form for a single swim workout
'/workout'	POST	create	Create a new swim workout
'/workout/:id'	GET	show	See a single swim workout
'/workout/:id/edit'	GET	edit	Display the form for editing a single swim workout
'/workout/:id'	PATCH/PUT	update	Update a swim workout
'/workout/:id'	DELETE	destroy	Remove a swim workout

# Resources
- https://bootsnipp.com/snippets/dldxB (login)
- https://mdbootstrap.com/docs/jquery/navigation/footer/ (footer)
- https://startbootstrap.com/previews/heroic-features/ (default layout)
- https://bootsnipp.com/snippets/DVXQa  (add/delete form)
