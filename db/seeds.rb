# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Follow.destroy_all

u1 = User.create(
    firstName: 'demouser',
    lastName: "",
    birthdate: '2022/06/17',
    weight: 0,
    email: 'demouser@demo.com',
    password: "demouser"
)

u2 = User.create(
    firstName: 'Vivian',
    lastName: 'Chen',
    birthdate: '1992/08/09',
    weight: 125,
    email: 'vnchen92@gmail.com',
    password: "password"
)

u3 = User.create(
    firstName: 'Daniel',
    lastName: 'Chen',
    birthdate: '1992/02/19',
    weight: 145,
    email: 'danster1992@yahoo.com',
    password: 'password'
)


p1 = Post.create(
    title: "Need Carbs",
    author_id: 2
)

p2 = Post.create(
    title: "Training for 10k!",
    body: "...halfway there? 🙃",
    author_id: 2
)

p3 = Post.create(
    title: 'First run of the season',
    body: 'Is it over yet?',
    author_id: 3
)

f1 = Follow.create( # demouser is following me
    follow_id: 1,
    follows_id: 2
)

f2 = Follow.create(
    follow_id: 2,
    follows_id: 3
)