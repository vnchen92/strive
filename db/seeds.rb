# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Activity.destroy_all
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


p1 = Activity.create(
    title: "Need Carbs",
    author_id: 2,
    posted_on: "Fri Aug 23 2021",
    distance: 1.5,
    pace: 8.53,
    minutes: 14,
    seconds: 13,
    points: [['40.612184', '-73.993990'],['40.604206', '-73.997509'],['40.597221', '-73.986136']],
    static_map_url: 'u`{vFx}rbMrGiMrBxBnBrBzA~ANVzA~ATNnBrB~EdF~EjFbEjEHHd@cAp@kArAkCzA_Db@y@d@_ARWrAsCt@{Av@_B|FuKjD}G|A{C^b@Xg@^u@\q@tAmC|A{CvAoCCDd@}@'
)

p2 = Activity.create(
    title: "Training for 10k!",
    body: "...halfway there? 🙃",
    posted_on: "Tue Jan 1 2021",
    author_id: 2,
    distance: 6,
    pace: 9.45,
    hours: 2,
    minutes: 34,
    points: [['40.638778', '-74.036007'],['40.616064','-74.038067']],
    static_map_url: 'ig`wF`d{bMCRF@JDx@Jf@D@RFPXX^TLAFJvAl@fBn@p@RPHn@Pd@F^X`@PVH`@@d@G\?XIb@YJQNORM\MTENAn@Nn@T^XVTVTLFLJVNj@Tp@\f@b@|AdBXN|@h@b@b@`AnAh@z@RV\Xb@Vd@N\Ht@L~@JfBHhAXfAHv@@vBC`D`@hBJb@BhAAhBQ|AMHGJBjBJd@EXKZGz@g@hAe@pAYZCHA~@DnDr@`AJp@C~@OhBs@~DuApFuC|BoAFGBWdBgAACAG'
)

p3 = Activity.create(
    title: 'First run of the season',
    body: 'Is it over yet?',
    posted_on: "Mon May 5 2021",
    author_id: 3,
    distance: 2,
    pace: 13.33,
    minutes: 30,
    seconds: 49,
    points: [['40.785107','-73.976891'],['40.802957','-73.963849'],['40.800675','-73.958517']],
    static_map_url: 'gz|wFjrobMHYw@g@o@c@}BwAyAaA{@o@eAq@mCcBaHsEwJqG{B}AaCyAQIgBqAeAo@}CsBaHsEuJqGuOeKqAy@i@[e@_@wA}@SKQSq@c@oAy@cAq@bAaDxBeHJ]L]\o@R_@\gAp@mBPu@ZaAx@kCQC'
)

f1 = Follow.create( # demo user is following me
    follower_id: 1,
    following_id: 2
)

f2 = Follow.create( # I am following daniel
    follower_id: 2,
    following_id: 3
)