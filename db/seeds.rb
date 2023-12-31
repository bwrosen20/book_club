# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts"Seeding Books and such"

User.destroy_all
Book.destroy_all

Book.create(title:"Harry Potter and the Sorceror's Stone",group:"Rosen",current_book:false,author: "JK Rowling",description: "Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'. Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin! Having become classics of our time, the Harry Potter eBooks never fail to bring comfort and escapism. With their message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",votes:3,thumbnail:"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", finished:true)
Book.create(title:"The Martian",group:"Rosen",author:"Andy Weir",current_book:false,description:"#1 NEW YORK TIMES BESTSELLER • “Brilliant . . . a celebration of human ingenuity [and] the purest example of real-science sci-fi for many years . . . utterly compelling.”—The Wall Street Journal The inspiration for the major motion picture Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, he’s sure he’ll be the first person to die there. After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that he’s alive—and even if he could get word out, his supplies would be gone long before a rescue could arrive. Chances are, though, he won’t have time to starve to death. The damaged machinery, unforgiving environment, or plain-old “human error” are much more likely to kill him first. But Mark isn’t ready to give up yet. Drawing on his ingenuity, his engineering skills—and a relentless, dogged refusal to quit—he steadfastly confronts one seemingly insurmountable obstacle after the next. Will his resourcefulness be enough to overcome the impossible odds against him? NAMED ONE OF PASTE’S BEST NOVELS OF THE DECADE “A hugely entertaining novel [that] reads like a rocket ship afire . . . Weir has fashioned in Mark Watney one of the most appealing, funny, and resourceful characters in recent fiction.”—Chicago Tribune “As gripping as they come . . . You’ll be rooting for Watney the whole way, groaning at every setback and laughing at his pitchblack humor. Utterly nail-biting and memorable.”—Financial Times",votes:3,thumbnail:"http://books.google.com/books/content?id=OPAgEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", finished:true)
Book.create(title:"Ready Player One",group:"Rosen",author:"Ernest Cline",current_book:false,description:"Nominated as one of America's best-loved novels by PBS's The Great American Read The worldwide bestseller--now a major motion picture directed by Steven Spielberg. In the year 2045, reality is an ugly place. The only time teenage Wade Watts really feels alive is when he's jacked into the virtual utopia known as the OASIS. Wade's devoted his life to studying the puzzles hidden within this world's digital confines--puzzles that are based on their creator's obsession with the pop culture of decades past and that promise massive power and fortune to whoever can unlock them. But when Wade stumbles upon the first clue, he finds himself beset by players willing to kill to take this ultimate prize. The race is on, and if Wade's going to survive, he'll have to win--and confront the real world he's always been so desperate to escape.",votes:3,thumbnail:"http://books.google.com/books/content?id=WwtFDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", finished:true)
Book.create(title:"Romeo and Juliet",group:"Rosen",author:"William Shakespeare",current_book:true,description:"Star-crossed Romeo and Juliet are Shakespeare's most famous lovers. A staple of high school reading lists, the tragedy especially resonates with young adult readers who, like Romeo and Juliet, have experienced the exhilarating and perilous phenomenon of being in love. Given the tragic ending of the play, what does Shakespeare illustrate about his teen protagonists: Are they the hapless victims of fate, or are they responsible for the poor choices they make? Is their love the real thing, or is it self-indulgent passion run amok? These are some of the ever relevant questions discussed in this critical edition of Romeo and Juliet.",votes:2, thumbnail:"http://books.google.com/books/content?id=aHm0vxx5fcMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",finished:false)
Book.create(title:"11-22-63",group:"Rosen",author:"Stephen King",current_book:false,description:"One of the Ten Best Books of The New York Times Book Review Winner of the Los Angeles Times Book Prize Now a miniseries from Hulu starring James Franco ON NOVEMBER 22, 1963, THREE SHOTS RANG OUT IN DALLAS, PRESIDENT KENNEDY DIED, AND THE WORLD CHANGED. WHAT IF YOU COULD CHANGE IT BACK? In this brilliantly conceived tour de force, Stephen King—who has absorbed the social, political, and popular culture of his generation more imaginatively and thoroughly than any other writer—takes readers on an incredible journey into the past and the possibility of altering it. It begins with Jake Epping, a thirty-five-year-old English teacher in Lisbon Falls, Maine, who makes extra money teaching GED classes. He asks his students to write about an event that changed their lives, and one essay blows him away—a gruesome, harrowing story about the night more than fifty years ago when Harry Dunning’s father came home and killed his mother, his sister, and his brother with a sledgehammer. Reading the essay is a watershed moment for Jake, his life—like Harry’s, like America’s in 1963—turning on a dime. Not much later his friend Al, who owns the local diner, divulges a secret: his storeroom is a portal to the past, a particular day in 1958. And Al enlists Jake to take over the mission that has become his obsession—to prevent the Kennedy assassination. So begins Jake’s new life as George Amberson, in a different world of Ike and JFK and Elvis, of big American cars and sock hops and cigarette smoke everywhere. From the dank little city of Derry, Maine (where there’s Dunning business to conduct), to the warmhearted small town of Jodie, Texas, where Jake falls dangerously in love, every turn is leading eventually, of course, to a troubled loner named Lee Harvey Oswald and to Dallas, where the past becomes heart-stoppingly suspenseful, and where history might not be history anymore. Time-travel has never been so believable. Or so terrifying.",votes:1, thumbnail:"http://books.google.com/books/content?id=MJNi0uU8kdoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",finished:false)
Book.create(title:"The Great Gatsby",group:"Rosen",author:"F Scott Fitzgerald",current_book:false,description:"In 1922, F. Scott Fitzgerald announced his decision to write \"something new--something extraordinary and beautiful and simple + intricately patterned.\" That extraordinary, beautiful, intricately patterned, and above all, simple novel became The Great Gatsby, arguably Fitzgerald's finest work and certainly the book for which he is best known. A portrait of the Jazz Age in all of its decadence and excess, Gatsby captured the spirit of the author's generation and earned itself a permanent place in American mythology. Self-made, self-invented millionaire Jay Gatsby embodies some of Fitzgerald's--and his country's--most abiding obsessions: money, ambition, greed, and the promise of new beginnings. \"Gatsby believed in the green light, the orgiastic future that year by year recedes before us. It eluded us then, but that's no matter--tomorrow we will run faster, stretch out our arms farther.... And one fine morning--\" Gatsby's rise to glory and eventual fall from grace becomes a kind of cautionary tale about the American Dream. It's also a love story, of sorts, the narrative of Gatsby's quixotic passion for Daisy Buchanan. The pair meet five years before the novel begins, when Daisy is a legendary young Louisville beauty and Gatsby an impoverished officer. They fall in love, but while Gatsby serves overseas, Daisy marries the brutal, bullying, but extremely rich Tom Buchanan. After the war, Gatsby devotes himself blindly to the pursuit of wealth by whatever means--and to the pursuit of Daisy, which amounts to the same thing. \"Her voice is full of money,\" Gatsby says admiringly, in one of the novel's more famous descriptions. His millions made, Gatsby buys a mansion across Long Island Sound from Daisy's patrician East Egg address, throws lavish parties, and waits for her to appear. When she does, events unfold with all the tragic inevitability of a Greek drama, with detached, cynical neighbor Nick Carraway acting as chorus throughout. Spare, elegantly plotted, and written in crystalline prose, The Great Gatsby is as perfectly satisfying as the best kind of poem.",votes:1, thumbnail:"http://books.google.com/books/content?id=INhsEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",finished:false)
Book.create(title:"A Game of Thrones",group:"Rosen",author:"George RR Martin",current_book:false,description:"NOW THE ACCLAIMED HBO SERIES GAME OF THRONES—THE MASTERPIECE THAT BECAME A CULTURAL PHENOMENON Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season. Yet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queen’s brothers Jaime and Tyrion of the powerful and wealthy House Lannister—the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind. All are heading for Winterfell and a fateful encounter that will change the course of kingdoms. Meanwhile, across the Narrow Sea, Prince Viserys, heir of the fallen House Targaryen, which once ruled all of Westeros, schemes to reclaim the throne with an army of barbarian Dothraki—whose loyalty he will purchase in the only coin left to him: his beautiful yet innocent sister, Daenerys.",votes:0, thumbnail:"http://books.google.com/books/content?id=5NomkK4EV68C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",finished:false)

pablo= User.new(name:"Pablo",password:"password",password_confirmation:"password",current_vote:Book.find_by(title:"11-22-63").id,book_for_vote:Book.find_by(title:"A Game of Thrones").id,bio:"I'm a ballplayer and I'm good at what I do",favorite_book:"Moneyball",admin:true,group_name:"Rosen",email:"bwrosen20@gmail.com")
ron = User.new(name:"Ron",password:"password",password_confirmation:"password",current_vote:Book.find_by(title:"The Great Gatsby").id,book_for_vote:Book.find_by(title:"11-22-63").id,bio:"I'm slowly working on taking down the government from the inside", favorite_book:"The Old Man and the Sea",admin:false,group_name:"Rosen",email:"bwrosen20@icloud.com")
stephen = User.new(name:"Stephen",password:"password",password_confirmation:"password",current_vote:0,book_for_vote:Book.find_by(title:"The Great Gatsby").id,bio:"I think I know a little more about books than these guys", favorite_book:"Carrie",admin:false,group_name:"Rosen",email:"brianrosen20@yahoo.com")

pablo.profile_image.attach(io: File.open(Rails.root.join('db/images/pabloSanchez.jpeg')),filename:'pabloSanchez.jpeg')
ron.profile_image.attach(io: File.open(Rails.root.join('db/images/ronSwanson.jpeg')),filename:'ronSwanson.jpeg')
stephen.profile_image.attach(io: File.open(Rails.root.join('db/images/stephenKing.jpeg')),filename:'stephenKing.jpeg')

puts"I added images to users"


pablo.save!

puts "I saved a user"
ron.save!
stephen.save!

puts "I saved all the users"

Review.create(user_id:User.first.id,book_id:Book.first.id,body:Faker::Lorem.paragraph,rating: rand(1.0..10.0).round(1))
Review.create(user_id:User.first.id,book_id:Book.second.id,body:Faker::Lorem.paragraph,rating: rand(1.0..10.0).round(1))
Review.create(user_id:User.first.id,book_id:Book.third.id,body:Faker::Lorem.paragraph,rating: rand(1.0..10.0).round(1))
Review.create(user_id:User.second.id,book_id:Book.first.id,body:Faker::Lorem.paragraph,rating: rand(1.0..10.0).round(1))
Review.create(user_id:User.second.id,book_id:Book.second.id,body:Faker::Lorem.paragraph,rating: rand(1.0..10.0).round(1))
Review.create(user_id:User.second.id,book_id:Book.third.id,body:Faker::Lorem.paragraph,rating: rand(1.0..10.0).round(1))
Review.create(user_id:User.third.id,book_id:Book.first.id,body:Faker::Lorem.paragraph,rating: rand(1.0..10.0).round(1))
Review.create(user_id:User.third.id,book_id:Book.second.id,body:Faker::Lorem.paragraph,rating: rand(1.0..10.0).round(1))
Review.create(user_id:User.third.id,book_id:Book.third.id,body:Faker::Lorem.paragraph,rating: rand(1.0..10.0).round(1))

puts"Done Seeding. Thanks for listening"

#models I need
    #users
        #name
        #password_digest
        #image_url
        #bio
        #favorite_book

    #book
        #title
        #author
        #description
        #votes
        #genres
        #thumbnail
        #finished
    
    #reviews
        #user_id
        #book_id
        #body
        #rating

        

