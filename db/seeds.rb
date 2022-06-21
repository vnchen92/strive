# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

u1 = User.create(
    id: 1,
    name: 'demouser',
    birthdate: '2022/06/17',
    weight: 0,
    email: 'demouser@demo.com',
    password: "demouser"
)

u2 = User.create(
    id: 2,
    name: 'Vivian Chen',
    birthdate: '1992/08/09',
    weight: 125,
    email: 'vnchen92@gmail.com',
    password: "password"
)


p1 = Post.create(
    id: 1,
    title: "Need Carbs",
    author_id: 2
)

p2 = Post.create(
    id: 2,
    title: "Training for 10k!",
    body: "...halfway there? 🙃",
    author_id: 2
)