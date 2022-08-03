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
Comment.destroy_all
Kudo.destroy_all

u1 = User.create(
    firstName: 'Demo',
    lastName: "User",
    birthdate: '2022/06/17',
    weight: 0,
    email: 'demouser@demo.com',
    password: "demouser",
    profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Bwz8-TWJNKPdLhikrDm97LAOm7OJQgCIgQ&usqp=CAU'
)

u2 = User.create(
    firstName: 'Vivian',
    lastName: 'Chen',
    birthdate: '1992/08/09',
    weight: 125,
    email: 'vnchen92@gmail.com',
    password: "password",
    profile_pic: 'https://graph.facebook.com/1435990539770583/picture?height=256&width=256'
)

u3 = User.create(
    firstName: 'Daniel',
    lastName: 'Chen',
    birthdate: '1992/02/19',
    weight: 145,
    email: 'danster1992@yahoo.com',
    password: 'password',
    profile_pic: 'https://cdn.discordapp.com/attachments/1001881129546158254/1001881393577611344/31950431_10214801461083787_8093315151425437696_n.jpg'
)


# p1 = Activity.create(
#     title: "Need Carbs",
#     author_id: 2,
#     posted_on: '2022-07-23 00:00:01 UTC',
#     distance: 1.5,
#     pace: 8.53,
#     hours: 0,
#     minutes: 14,
#     seconds: 13,
#     time: "00:14:13",
#     points: [['40.612184','73.993990'],['40.604206','-73.997509'],['40.597221','-73.986136']],
#     #     'lat': 40.612184, 
#     #     'lng': 73.993990
#     #     },{
#     #     'lat': 40.604206,
#     #     'lng': -73.997509
#     #     },{
#     #     'lat': 40.597221,
#     #     'lng': -73.986136
#     # }],
#     static_map_url: 'u`{vFx}rbMrGiMrBxBnBrBzA~ANVzA~ATNnBrB~EdF~EjFbEjEHHd@cAp@kArAkCzA_Db@y@d@_ARWrAsCt@{Av@_B|FuKjD}G|A{C^b@Xg@^u@\q@tAmC|A{CvAoCCDd@}@'
# )

p2 = Activity.create(
    title: "Training for 10k!",
    body: "...halfway there? 🙃",
    posted_on: '2022-07-14 00:00:01 UTC',
    author_id: 2,
    distance: 6,
    pace: 9.45,
    hours: 1,
    minutes: 1,
    seconds: 1,
    time: "01:01:01",
    points: {
        "each_coord": [['40.638778', '-74.036007'],['40.616064','-74.038067']]
    },
    # points: [['40.638778', '-74.036007'],['40.616064','-74.038067']],
    static_map_url: 'ig`wF`d{bMCRF@JDx@Jf@D@RFPXX^TLAFJvAl@fBn@p@RPHn@Pd@F^X`@PVH`@@d@G\?XIb@YJQNORM\MTENAn@Nn@T^XVTVTLFLJVNj@Tp@\f@b@|AdBXN|@h@b@b@`AnAh@z@RV\Xb@Vd@N\Ht@L~@JfBHhAXfAHv@@vBC`D`@hBJb@BhAAhBQ|AMHGJBjBJd@EXKZGz@g@hAe@pAYZCHA~@DnDr@`AJp@C~@OhBs@~DuApFuC|BoAFGBWdBgAACAG'
)

# p3 = Activity.create(
#     title: 'First run of the season',
#     body: 'Is it over yet?',
#     posted_on: '2022-07-01 00:00:01 UTC',
#     author_id: 3,
#     distance: 2,
#     pace: 13.33,
#     hours: 0,
#     minutes: 26,
#     seconds: 49,
#     time: "00:26:49",
#     points: [['40.785107','-73.976891'],['40.802957','-73.963849'],['40.800675','-73.958517']],
#     static_map_url: 'gz|wFjrobMHYw@g@o@c@}BwAyAaA{@o@eAq@mCcBaHsEwJqG{B}AaCyAQIgBqAeAo@}CsBaHsEuJqGuOeKqAy@i@[e@_@wA}@SKQSq@c@oAy@cAq@bAaDxBeHJ]L]\o@R_@\gAp@mBPu@ZaAx@kCQC'
# )

# p4 = Activity.create(
#     title: "Let's GOOOOOOOOO",
#     body: 'Let it be known. I am the best of ALL demousers.',
#     posted_on: '2022-07-20 00:00:01 UTC',
#     author_id: 1,
#     distance: 10.6,
#     pace: 6.35,
#     hours: 1,
#     minutes: 5,
#     seconds: 43,
#     time: "01:05:43",
#     points: [['40.731179','-73.9193351'], ['40.735542','-73.918354'],['40.735916','-73.914556'],['40.742277','-73.913054'],['40.741342', '-73.909127'],['40.719728', '-73.911273']],
#     static_map_url: 'airwFrjdbMDYUEi@OgCg@mBUW@_@EaCYcBS{De@k@ISCSC?k@EiA?q@AiASuDa@aHAOGREMNEMJa@G_AMyB[eDg@wLiBoK}A_@GOC?KBQDeA`@_H^oGt@sM~MlBfB`@rCn@lG~BlA^lFlB~B~@bBp@pAh@RPdA\xAh@b@NdB^jCd@lC\t@Bb@DD@?WBwDN?HU`@qAb@qAl@kA`B}C`@}@vBeF\}@Zb@x@lAzB~C`CjD^d@Pi@pBGrBKhCWfDa@dDKdEKjAC`BEXzA^tBd@fCN|@RpAVvA'
# )

# p5 = Activity.create(
#     title: 'Just want to track my progress...',
#     body: "How did I do? 🤩",
#     posted_on: '2022-07-04 00:00:01 UTC',
#     author_id: 1,
#     distance: 2,
#     pace: 9.25,
#     hours: 0,
#     minutes: 19,
#     seconds: 23,
#     time: "00:19:23"
# )

p6 = Activity.create(
    title: 'WOOHOO',
    body: "WHO RUN THE WORLD? GIRLS.",
    posted_on: '2022-05-04 00:00:01 UTC',
    author_id: 2,
    distance: 10,
    pace: 9.30,
    hours: 1,
    minutes: 34,
    seconds: 23,
    time: "01:34:23"
)

p7 = Activity.create(
    title: 'Think I finally broke in my sneakers',
    posted_on: '2022-05-13 00:00:01 UTC',
    author_id: 3,
    distance: 7,
    pace: 8.30,
    hours: 1,
    minutes: 4,
    seconds: 44,
    time: "01:04:44"
)

f1 = Follow.create( # demo user is following me
    follower_id: 1,
    following_id: 2
)

f2 = Follow.create( # I am following daniel
    follower_id: 2,
    following_id: 3
)

f3 = Follow.create( # demo user is following daniel
    follower_id: 1,
    following_id: 3
)

f4 = Follow.create( # I am following demo user
    follower_id: 2,
    following_id: 1
)

f5 = Follow.create(
    follower_id: 3,
    following_id: 1
)

c1 = Comment.create(
    body: 'YOU GOT THIS!!!',
    posted_on: '2022-07-15 00:00:01 UTC',
    user_id: 1,
    activity_id: 2
)

c2 = Comment.create(
    body: 'I agree, YOU DA BEST',
    posted_on: '2022-07-22 00:00:01 UTC',
    user_id: 2,
    activity_id: 4
)

c3 = Comment.create(
    body: "TIME FOR THE OLYMPICS? 🤣",
    posted_on: '2022-07-21 00:00:01 UTC',
    user_id: 3,
    activity_id: 4
)

k1 = Kudo.create(
    user_id: 2,
    activity_id: 4
)

k2 = Kudo.create(
    user_id: 3,
    activity_id: 4
)

k3 = Kudo.create(
    user_id: 2,
    activity_id: 5
)

k4 = Kudo.create(
    user_id: 1,
    activity_id: 1
)