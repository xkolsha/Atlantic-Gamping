const { Location } = require("../models");

const seedLocations = () => Location.bulkCreate(locationData);

const locationData = [
  {
    //id: 1
    city: "Grand Manan",
    province: "NB",
    page_url: "https://www.castaliamarshretreat.com/room/argosy-trailer/",
    img_url:
      "https://www.castaliamarshretreat.com/wp-content/uploads/2022/03/6F9A5727-1.jpg",
    title: "Argosy Trailer",
    description:
      "AThis 1977 vintage airstream is located in a beautiful grassy knoll in the woods near the gardens and chickens. It has a deck with table and chairs, 2 single beds plus sofa that turns into a double bed, kitchenette and small bathroom (cold water only)..",
    short_desc: "Retro RV Style.",
    price: 130,
    category_id: 6,
  },
  {
    //id: 2
    city: "Grand Manan",
    province: "NB",
    page_url: "https://www.castaliamarshretreat.com/room/the-barn/",
    img_url:
      "https://www.castaliamarshretreat.com/wp-content/uploads/2022/03/1.jpg",
    title: "The Barn",
    description:
      "The main floor has a deck, fridge, sink, electric stove, heat pump/air conditioner, table, chairs, one double and one single bed, toilet, and shower. The upstairs has 2 double beds and 2 single beds in two rooms..",
    short_desc: "Bigger is better.",
    price: 160,
    category_id: 2,
  },
  {
    //id: 3
    city: "Grand Manan",
    province: "NB",
    page_url: "https://www.castaliamarshretreat.com/room/birch-yurt/",
    img_url:
      "https://www.castaliamarshretreat.com/wp-content/uploads/2022/03/IMG_1030-copy.jpg",
    title: "Birch Yurt",
    description:
      "The Yurt sits in the woods with a limited view of the marsh and includes a shower and composting toilet. Queen bed, and a dinette that converts to a double bed.",
    short_desc: "Unique.",
    price: 140,
    category_id: 5,
  },
  {
    //id: 4
    city: "Grand Manan",
    province: "NB",
    page_url: "https://www.castaliamarshretreat.com/room/bird-house/",
    img_url:
      "https://www.castaliamarshretreat.com/wp-content/uploads/2022/03/IMG_1030-copy.jpg",
    title: "The Bird House",
    description:
      "The cabin overlooks the marsh and is very private. The main floor has a deck, sofa, small wood stove and composting toilet. A private shower is outside. The sleeping loft has a double bed.",
    short_desc: "A Couple's Paradise.",
    price: 150,
    category_id: 2,
  },
  {
    //id: 5
    city: "Grand Manan",
    province: "NB",
    page_url: "https://www.castaliamarshretreat.com/room/captains-quarters/",
    img_url:
      "https://www.castaliamarshretreat.com/wp-content/uploads/2022/03/6F9A5711.jpg",
    title: "Captain's Quarters",
    description:
      "The cabin overlooks the marsh and is very private. The main floor has a deck, sofa, small wood stove and composting toilet. A private shower is outside. The sleeping loft has a double bed.",
    short_desc: "The Original.",
    price: 160,
    category_id: 2,
  },
  {
    //id: 6
    city: "Grand Manan",
    province: "NB",
    page_url: "https://www.castaliamarshretreat.com/room/fern-alley/",
    img_url:
      "https://www.castaliamarshretreat.com/wp-content/uploads/2022/03/3-1.jpg",
    title: "Fern Alley",
    description:
      "Winterized cabin in the woods overlooking the marsh, bay, and lighthouse. The main floor has a full kitchen, table and chairs, futon, queen bed, composting toilet and shower, along with a small deck in back. The loft has two double beds and a large balcony overlooking the marsh.",
    short_desc: "Cabin with a View.",
    price: 170,
    category_id: 2,
  },
  {
    //id: 7
    city: "Grand Manan",
    province: "NB",
    page_url: "https://www.castaliamarshretreat.com/room/the-lookout/",
    img_url:
      "https://www.castaliamarshretreat.com/wp-content/uploads/2022/03/IMG_1159.jpg",
    title: "The Lookout",
    description:
      "This cabin overlooks marsh, has a deck, full kitchen, queen bed, couch that converts to a sofa bed, indoor toilet and shower, along with an extra outdoor shower.",
    short_desc: "Tucked Away Tranquility.",
    price: 150,
    category_id: 2,
  },
  {
    //id: 8
    city: "Grand Manan",
    province: "NB",
    page_url: "https://www.castaliamarshretreat.com/room/frog-hollow/",
    img_url:
      "https://www.castaliamarshretreat.com/wp-content/uploads/2022/08/1.jpg",
    title: "Frog Hollow",
    description:
      "Description: The cabin sits in the woods overlooking the garden and fish ponds. Cold running water only. Separate sleeping area with double bed. Toilets and shower are 30 meters/100 feet away.",
    short_desc: "A solo retreat.",
    price: 100,
    category_id: 2,
  },
  {
    //id: 9
    city: "Grand Manan",
    province: "NB",
    page_url: "https://www.castaliamarshretreat.com/room/vintage-trailer/",
    img_url:
      "https://www.castaliamarshretreat.com/wp-content/uploads/2017/12/IMG_0895.jpg",
    title: "Vintage Trailer",
    description:
      "This small vintage trailer is located in a private setting in the woods beside a fishpond. It has a double bed and dinette that turns into a double bed, propane stove, small fridge, cold water sink, microwave, electric heat. Toilets and shower 30 meters/100 feet away.",
    short_desc: "Upgraded Camping.",
    price: 100,
    category_id: 6,
  },
  {
    //id: 10
    city: "Kingston",
    province: "NB",
    page_url: "https://ridgebacklodge.com/robins-nest/",
    img_url:
      "https://ridgebacklodge.com/wp-content/uploads/2020/10/standard-cabin-1.jpg",
    title: "Robin's Nest",
    description:
      "Robin's Nest is a rustic-style cedar log cabin nestled in the woodland. Enjoy your morning cuppa on your covered deck, then hit the walking trails that come right up to your doorstep. Enjoy a picnic lunch by the pond close by. In the evening, roast marshmallows over an open flame at the bonfire area. Relax in the cabin’s cozy living room heated by a wood stove. Prepare your meals in the fully equipped kitchen and feast in comfort at the dining table. The bedroom includes a king-size bed with luxurious bedding. The bathroom has a walk-in shower, sink, towels, and flush toilet.",
    short_desc: "Get back to basics with this cabin in the woods.",
    price: 150,
    category_id: 2,
  },
  {
    //id: 11
    city: "Kingston",
    province: "NB",
    page_url: "https://ridgebacklodge.com/deer-run/",
    img_url:
      "https://ridgebacklodge.com/wp-content/uploads/2021/09/P1000330-HDR-400x516.jpg",
    title: "Deer Run",
    description:
      "Step inside your stylish Rustic log cabin and savour the luxurious touches throughout. Move into the fully equipped kitchen with high-end appliances and whip up a feast to sate your appetite after hiking the nature trails close by. Freshen up in the beautiful bathroom complete with wine barrel vanities, a large walk-in shower with soothing rain-style showerhead, and a separate flush toilet. Pour yourself a nightcap and sink into a comfy chair or stretch out on the sofa and listen to the sounds of nature outside your door.",
    short_desc: "Rustic on the outside, luxurious on the inside.",
    price: 150,
    category_id: 2,
  },
  {
    //id: 12
    city: "Kingston",
    province: "NB",
    page_url:
      "https://la-belle-cabane.checkfront.com/reserve/?category_id=3,2,5",
    img_url:
      "https://www.labellecabane.com/uploads/6/5/8/0/6580638/1b_orig.png",
    title: "Ma'iingan - Loup - Wolf/Coyote",
    description:
      "Hike up to your 108 sqft cozy cabin (2 adults max.) for an offgrid cultural experience (pack light/backpacks recommended). There is no WiFi/plumbing/electricity in the cabins (we provide water/lighting, a kitchenette and an outhouse). *We now have communal bathrooms/showers if you prefer.",
    short_desc:
      "The Wolf/Coyote represents HUMILITY. This is the OG single-door cabin at LBC. It is the closest to the parking lot and first up the hill.",
    price: 167,
    category_id: 2,
  },
  {
    //id: 13
    city: "Lac baker",
    province: "NB",
    page_url:
      "https://www.ekonatureglamping.com/d%C3%B4mes/rooms/7156adaa-5f24-4179-a551-43d2486077bc",
    img_url:
      "https://static.wixstatic.com/media/84fa05_bf5f402dd6c94df7a07eedafb2bc28d7~mv2.jpg",
    title: "Baker Cabin",
    description:
      "ekö nature glamping is the ideal place to rest, disconnect and resourcing in kind for people in search of well-being and  a healthy life.",
    short_desc:
      "A modern cabin with all the amenities including a private spa, BBQ as well as a heat pump to ensure your comfort.",
    price: 250,
    category_id: 2,
  },
  {
    //id: 14
    city: "Albany",
    province: "PEI",
    page_url: "https://treetophaven.ca/cozy-cabins/",
    img_url:
      "https://treetophaven.ca/wp-content/uploads/2021/05/DSC_0001-1024x683.jpg",
    title: "The Flora Cozy Cabin",
    description:
      "The Flora Cozy Cabin features all of the comforts of home, including a kitchen, bathroom, bedroom, small living room with a pull-out sofa, and a large outdoor seating area with a BBQ. The cabin also features an outdoor hot tub – perfect for unwinding amongst the trees and underneath the stars. Importantly, our cozy cabins do not feature wifi or televisions – we promise you’ll love the freedom that comes with disconnecting from the digital world! Bring along a pile of books, your journal, a deck of cards, or your favourite board games. The Flora is open year round and sleeps a maximum of three people, no smoking and pets are not allowed. Please note that the cabins are set back in the woods and guests will have to walk 100 to 300 feet to access them. We have a cart to help guests unload their baggage.",
    short_desc:
      "If you're looking for a retreat that's all about embracing the hygge lifestyle of coziness and simple pleasures, our forest cabins await! ",
    price: 215,
    category_id: 2,
  },
  {
    //id: 15
    city: "Mount Tryon",
    province: "PEI",
    page_url: "https://treetophaven.ca/cozy-cabins/",
    img_url:
      "https://treetophaven.ca/wp-content/uploads/2021/05/DSC_0016-1536x1024.jpg",
    title: "The Fauna Cozy Cabin",
    description:
      "The Fauna Cozy Cabin features all of the comforts of home, including a kitchen, bathroom, bedroom, small living room with a pull-out sofa, and a large outdoor seating area with a BBQ. The cabin also features an outdoor hot tub – perfect for unwinding amongst the trees and underneath the stars. Importantly, our cozy cabins do not feature wifi or televisions - we promise you'll love the freedom that comes with disconnecting from the digital world! Bring along a pile of books, your journal, a deck of cards, or your favourite board games. The Flora is open year round and sleeps a maximum of three people, no smoking and pets are not allowed. Please note that the cabins are set back in the woods and guests will have to walk 100 to 300 feet to access them. We have a cart to help guests unload their baggage.",
    short_desc:
      "If you're looking for a retreat that's all about embracing the hygge lifestyle of coziness and simple pleasures, our forest cabins await! ",
    price: 215,
    category_id: 2,
  },
  {
    //id: 16
    city: "Miramichi",
    province: "NB",
    page_url: "https://www.campingmiramichi.com/new-page-3",
    img_url:
      "https://images.squarespace-cdn.com/content/v1/5c3922b3af2096ad323daa2a/1548911028957-A1L2VLPXUE1D6NCXKPF3/DSC_2293.JPG?format=300w",
    title: "The Birches",
    description:
      "Miramichi Treehouse & Camping Adventures is located in an idyllic country setting amidst towering pines and borders the scenic Black River.  Explore our forest and river trails, take a swim in the pool, let the kiddos play on the playground or just relax on our spacious lawns. All while staying in one of our 12 Treehouses! Plus check out our Calendar of Activities to see what is going on while you are here! Less than ten minutes to shopping and restaurants our property is remote enough to be a welcome break from urban life, yet close enough to enjoy the culture and flavours of Miramichi. ",
    short_desc: "Come Relax in a Treehouse!",
    price: 115,
    category_id: 4,
  },
  {
    //id: 17
    city: "Miramichi",
    province: "NB",
    page_url: "https://www.campingmiramichi.com/new-page-3",
    img_url:
      "https://images.squarespace-cdn.com/content/v1/5c3922b3af2096ad323daa2a/1548912013283-X9XC8VH742TDP6V6YU0J/IMG_1950.JPG?format=500w",
    title: "The Quarry View",
    description:
      "Miramichi Treehouse & Camping Adventures is located in an idyllic country setting amidst towering pines and borders the scenic Black River.  Explore our forest and river trails, take a swim in the pool, let the kiddos play on the playground or just relax on our spacious lawns. All while staying in one of our 12 Treehouses! Plus check out our Calendar of Activities to see what is going on while you are here! Less than ten minutes to shopping and restaurants our property is remote enough to be a welcome break from urban life, yet close enough to enjoy the culture and flavours of Miramichi. ",
    short_desc:
      "It is one of our more private Tree Houses with a private deck off the back and a view of the Quarry. Perfect for a family of five or just the two of you!",
    price: 125,
    category_id: 4,
  },
  {
    //id: 18
    city: "Miramichi",
    province: "NB",
    page_url: "https://www.campingmiramichi.com/new-page-3",
    img_url:
      "https://images.squarespace-cdn.com/content/v1/5c3922b3af2096ad323daa2a/1548912909571-X2LJYB10DSED0LUI4OEJ/IMG_1672.JPG?format=500w",
    title: "The Mills & The Carriages",
    description:
      "Miramichi Treehouse & Camping Adventures is located in an idyllic country setting amidst towering pines and borders the scenic Black River.  Explore our forest and river trails, take a swim in the pool, let the kiddos play on the playground or just relax on our spacious lawns. All while staying in one of our 12 Treehouses! Plus check out our Calendar of Activities to see what is going on while you are here! Less than ten minutes to shopping and restaurants our property is remote enough to be a welcome break from urban life, yet close enough to enjoy the culture and flavours of Miramichi. ",
    short_desc:
      "These two tree houses have the same layout and are across from each other. Perfect for booking together if you are planning to camp with friends! Each has a suspension bridge connecting it’s deck to it’s treehouse  -always popular with the kids and the nice big deck is perfect for relaxing at the end of the day. ",
    price: 135,
    category_id: 4,
  },
  {
    //id: 19
    city: "Miramichi",
    province: "NB",
    page_url: "https://www.campingmiramichi.com/new-page-3",
    img_url:
      "https://images.squarespace-cdn.com/content/v1/5c3922b3af2096ad323daa2a/1556924446578-IO1R7OAR3YBFI8MXTOCN/campingmiramichiexter.jpg?format=500w",
    title: "The Pines",
    description:
      "Miramichi Treehouse & Camping Adventures is located in an idyllic country setting amidst towering pines and borders the scenic Black River.  Explore our forest and river trails, take a swim in the pool, let the kiddos play on the playground or just relax on our spacious lawns. All while staying in one of our 12 Treehouses! Plus check out our Calendar of Activities to see what is going on while you are here! Less than ten minutes to shopping and restaurants our property is remote enough to be a welcome break from urban life, yet close enough to enjoy the culture and flavours of Miramichi. ",
    short_desc: "The Pines has a beautiful deck.  Fire pit and picnic table.",
    price: 145,
    category_id: 4,
  },
  {
    //id: 20
    city: "Miramichi",
    province: "NB",
    page_url: "https://www.campingmiramichi.com/new-page-3",
    img_url:
      "https://images.squarespace-cdn.com/content/v1/5c3922b3af2096ad323daa2a/1556922538041-I3ZPYKLBGBOF7KTIMRDQ/DSC_0137.JPG?format=500w",
    title: "The Maples",
    description:
      "Miramichi Treehouse & Camping Adventures is located in an idyllic country setting amidst towering pines and borders the scenic Black River.  Explore our forest and river trails, take a swim in the pool, let the kiddos play on the playground or just relax on our spacious lawns. All while staying in one of our 12 Treehouses! Plus check out our Calendar of Activities to see what is going on while you are here! Less than ten minutes to shopping and restaurants our property is remote enough to be a welcome break from urban life, yet close enough to enjoy the culture and flavours of Miramichi. ",
    short_desc:
      "This tree house has an open concept allowing for family togetherness! The bathroom and mini fridge add to the convenience of your stay. The beautiful deck has a beautiful view! The Maples is in the back and very private!",
    price: 145,
    category_id: 4,
  },
  {
    //id: 21
    city: "Miramichi",
    province: "NB",
    page_url: "https://www.campingmiramichi.com/new-page-3",
    img_url:
      "https://images.squarespace-cdn.com/content/v1/5c3922b3af2096ad323daa2a/1556924224053-XY4FBS4G9JQ6RAHKCWA9/DSC_2395.JPG?format=500w",
    title: "The Meadows aka The Lobster Trap",
    description:
      "Miramichi Treehouse & Camping Adventures is located in an idyllic country setting amidst towering pines and borders the scenic Black River.  Explore our forest and river trails, take a swim in the pool, let the kiddos play on the playground or just relax on our spacious lawns. All while staying in one of our 12 Treehouses! Plus check out our Calendar of Activities to see what is going on while you are here! Less than ten minutes to shopping and restaurants our property is remote enough to be a welcome break from urban life, yet close enough to enjoy the culture and flavours of Miramichi. ",
    short_desc:
      "The biggest of our Tree Houses sleeps 7 with a unique design- two separate tree houses in one! One side has a bathroom and double bed. The other has a double bed, bunk bed and single bed… Oh and another bathroom! Enough room to bring Grandma & Grandpa along!",
    price: 170,
    category_id: 4,
  },
  {
    //id: 22
    city: "Cocagne",
    province: "NB",
    page_url:
      "https://www.creeksidernr.com/domes/rooms/e7490668-2a9a-4d82-9d1b-50556d0e8a60",
    img_url:
      "https://static.wixstatic.com/media/ddc623_cbb10f1f129846f6849a3797c0071be0~mv2.jpg/v1/fill/w_649,h_408,q_85,usm_0.66_1.00_0.01/ddc623_cbb10f1f129846f6849a3797c0071be0~mv2.jpg",
    title: "MIRROR CABIN 6 - The Orchard",
    description:
      "Let us provide an immersive accommodation experience in the heart of the nature forest at Creekside RnR. We created this new concept to submerge into nature, relax and meditate. A daring concept that allows you to contemplate nature from the inside out. A true nature forest experience at all levels. This mirrored cabin are carefully sited to preserve the forest and its natural surroundings. With a private cedar hot tub, fire pit, a luxurious feel, a star gazing dome, and access to the sauna on-site, nature has never seemed so comfortable. NOTE: Our mirror cabins have a 2-night minimum policy on weekends only.",
    short_desc: "The Concept- Introducing the Illusion Cabins.",
    price: 220,
    category_id: 2,
  },
  {
    //id: 23
    city: "Saint Martins Parish",
    province: "NB",
    page_url: "https://www.yeomansbythecaves.com/listing/en/404731",
    img_url:
      "https://l.icdbcdn.com/oh/191b5043-7760-4edf-8b3f-0ffb898afc86.jpg?w=1040",
    title: "Yeomans by the Caves Bunkie",
    description:
      "This is a very unique space. Steps from the water. It features an outdoor kitchen, BBQ, Outdoor shower. The Bunky is fitted with bunk beds with amazing mattresses. The bunky is accessed from your private deck. You can use the fire pit or head to the beach. **Please note this is an outdoor environment. Find our live stream of the Sea Caves on Skyline Webcams",
    short_desc:
      "There is no other rental closer to the beach, with all the views than this!!! If you like camping, you will love this.",
    price: 115,
    category_id: 2,
  },
  {
    //id: 24
    city: "Mactaquac",
    province: "NB",
    page_url: "https://www.mangatamactaquac.ca/listing/en/529458",
    img_url:
      "https://l.icdbcdn.com/oh/6ced9202-e9fc-4cf0-b0fb-ec6787ea0b1a.jpg?w=1920",
    title: "Cabin on the Falls",
    description:
      "Cabin on the Falls is simply beautiful and has everything you need to enjoy a peaceful and relaxing stay. Our stream-side wood fired hot tub will leave you wanting more. Our breathtaking property is positioned directly beside Mactaquac Provincial Park, one’s of New Brunswick’s best year-round outdoor playgrounds, with over 30km of trails! See our other cabins that sleep 5-6! On The Falls A-Frame is a one bedroom (loft) a-frame cabin, with a full bathroom with tiled shower. This open concept a-frame features high ceilings, with big windows and a custom kitchen that will have everything you need. This unit has one queen bed and a sleeper sofa. Ideal for 3 adults or 2 adults and up to 2 children. Outdoors, you will find a wood fired go tub and fire pit with outdoor cooker nestled along the Meadow Brook. There is a fully covered porch on the front of the cabin, so you can enjoy the sights and sounds, rain or shine! I am always available by phone or message, but will give you complete privacy during your stay. Available only if needed. We have 27 acres of woodland situation directly beside Mactaquac Provincial Park. We have two beautiful streams that run by the front of all our cabins. Cabins have direct access to over 30km of hiking trails in the park.",
    short_desc:
      "Mangata Mactaquac invites you to kick back and relax in this stunningly modern cabin in the woods.",
    price: 189,
    category_id: 2,
  },
  {
    //id: 25
    city: "Mactaquac",
    province: "NB",
    page_url: "https://www.mangatamactaquac.ca/listing/en/529460",
    img_url:
      "https://l.icdbcdn.com/oh/7420d37d-4623-4ad4-ac0e-dacf6e30d122.jpg?w=1920",
    title: "The Owl's Nest A-Frame",
    description:
      "We are located on a beautiful property with streams, waterfall, wood fired hot tub, hiking, biking, and outdoor fire pit with cooking grill and more. Our cabins are situated just steps to the hiking trails of Mactaquac Provincial Park. The Owl’s Nest has all the comforts of home, while providing you with one of the most beautiful places to relax in the area. We also have two other cabins! Please respect the use of the wood fired hot tubs and review information binder in cabin.",
    short_desc:
      "Mangata Mactaquac wants you to leave all your stress behind when you stay at our cabin in the woods.",
    price: 189,
    category_id: 2,
  },
  {
    //id: 26
    city: "Wolfville",
    province: "NS",
    page_url:
      "https://www.valleysky.ca/book-now/rooms/f372200b-520c-4e98-9448-ad799eb5dfe1",
    img_url:
      "https://static.wixstatic.com/media/2548c5_a269fc40befd456481f915706d1b4088~mv2.jpeg/v1/fill/w_587,h_444,q_85,usm_0.66_1.00_0.01/2548c5_a269fc40befd456481f915706d1b4088~mv2.jpeg",
    title: "Orchard Cabin",
    description:
      "The Orchard is equipped with all the modern amenities and luxurious comforts you will need for a rejuvenating glamping experience. The Orchard Cabin provides the perfect setting to enjoy the breathtaking nature ambiance. Relax in the king bed to enjoy the skylight view of the stars, or whip up a delicious meal using our fully equipped kitchen after an afternoon of exploring the vibrant Annapolis Valley region. The Orchard makes for an ideal accommodation for adventures year-round. The spacious, luxurious private deck overlooks a wooded paradise, and is equipped with your own private hot tub, barbecue, fire table, and patio furniture. Sit back, relax, and take in the serenity during your much deserved getaway!",
    short_desc:
      "Nestled in a forested paradise, the Orchard Cabin is Valley Sky's first fully accessible accommodation!",
    price: 295,
    category_id: 2,
  },
  {
    //id: 27
    city: "West Dover",
    province: "NS",
    page_url: "https://www.novaglamping.ca/cabin",
    img_url:
      "https://images.squarespace-cdn.com/content/v1/6245e71245d30250180d998a/74b4c9c0-4c2f-4189-8f52-b2f97fb912ba/DJI_0233.jpg?format=1500w",
    title: "Nova Glamping Cabin",
    description:
      "Experience the natural beauty of Nova Scotia through your own island oasis experience! Our upscale, cozy log cabin is equipped with everything you need with a view you will never forget. Enjoy a unique blend of nature and luxury as you explore the island during the day and relax in your own private jacuzzi under the stars at night. We guarantee this experience will be one you’ll never forget and one that you’ll keep coming back to time and time again!",
    short_desc: "Experience the beauty of nature in style.",
    price: 500,
    category_id: 2,
  },
  {
    //id: 28
    city: "Bonshaw",
    province: "PEI",
    page_url: "https://www.meridian63.com/",
    img_url:
      "https://images.squarespace-cdn.com/content/v1/60b4fb6cc33ffb730c126a56/fab12b70-c6fa-44f4-8282-1cdec1e25dfe/dose-meridian63-exterior-64.jpg?format=500w",
    title: "Nova Glamping Cabin",
    description:
      "The Meridian63° micro-cabins are off-grid, with floor to ceiling windows, and a solar battery for lighting and charging your devices. Sleep loft is accessible by ladder only, and has a very comfortable ENDY queen mattress. Living space contains a loveseat, ottoman, chair and side tables, as well as a large cooler. Small utility space for storage and contains a sink for hand-washing. Newly renovated, luxury 3/4 washrooms with large rainfall showers are available to guests, less than 400 feet from the cabin. Outside the cabin is a picnic table and a large firepit with a cooking grill. ",
    short_desc:
      "Off-grid tiny-cabins in Strathgartney Park are ready for your next adventure.",
    price: 398,
    category_id: 2,
  },
  {
    //id: 29
    city: "York",
    province: "PEI",
    page_url:
      "https://direct-book.com/properties/islandlifecottagedirect?locale=en&items[0][adults]=1&items[0][children]=0&items[0][infants]=0&currency=CAD&checkInDate=2023-08-08&checkOutDate=2023-08-09&trackPage=yes",
    img_url:
      "https://tbb-prod-emea.imgix.net/attachments/room_type_photos/images/852931/852931/41.jpg?auto=format,compress&fit=crop&crop=entropy&w=300&h=200&q=55",
    title: "Island Life Log Cabin",
    description:
      "We have a 16ft.x32ft. solar heated inground pool, kiddies splash pool, large playground area, games room,laundry area,central firepit, fenced in pasture for the animals all on a tree lined 6 acres. The unit comes fully equipped and have gas BBQ,s on large decks.",
    short_desc: "Island Life Cottages!",
    price: 350,
    category_id: 2,
  },
  {
    //id: 30
    city: "Burlington",
    province: "NL",
    page_url: "http://omesweetome.com/",
    img_url:
      "https://assets.glampmanager.com/Versions/2/Clients/27452/Categories/10151/Images/47383/?max=1600",
    title: "Ome Pod",
    description:
      "Perched on the edge of a rocky point, this minimalistic eco-pod has all the comforts you need. Beautiful hardwood floors, tongue & groove pine walls, vaulted ceilings, and tall sliding glass doors on three sides to take in the spectacular sunsets and ocean views. Just steps from the ocean’s edge, this location could not be more superb. Downstairs, enjoy the crackling wood stove while gazing out to the ocean. Prepare meals on the propane cooking range. Sit out on the large wrap around deck or on cascading stairs. You'll want to spend as much time outside as you do inside. This off the grid eco pod uses the Eco-Temp, tankless hot water system for both shower and sink. And for bathrooms we use the environmentally responsible SunMar Centrex 3000 High Capacity Compost Flush toilet. Runs on solar energy. This pod embraces simple, elegant design while providing the comfort and amenities you need. You may find yourself enticed to get out and explore spectacular rural Newfoundland or you may just want to relax and quiet your mind with the sound of the ocean.",
    short_desc:
      "This modern pod by the sea is the perfect private getaway for any couple or small family who wants to do exactly that; Get away.",
    price: 280,
    category_id: 2,
  },
  {
    //id: 31
    city: "Heaven",
    province: "NB",
    page_url: "https://example.com/heaven",
    img_url: "/images/heaven.jpg",
    title: "Peaceful Heaven",
    description: "An ethereal place of tranquility and joy.",
    short_desc: "Heaven, NB",
    price: 555,
    category_id: 1,
  },
  {
    //id: 32
    city: "Hell",
    province: "NB",
    page_url: "https://example.com/hell",
    img_url: "/images/hell.jpg",
    title: "Thrilling Hell",
    description: "An intense and exciting burning adventure destination.",
    short_desc: "Hell, NB",
    price: 666,
    category_id: 2,
  },
  {
    //id: 33
    city: "Moncton",
    province: "NB",
    page_url: "https://covedomeglamping.com/product/the-brook/",
    img_url:
      "https://covedomeglamping.com/wp-content/uploads/2021/09/Pic-3-6.jpg",
    title: "The Brook",
    description:
      "With the goal of promoting mindfulness & well-being, you’ll get to enjoy a dome that’s sun filled by day and illuminates with a natural light that creates a relaxing and zen-like ambiance",
    short_desc:
      "Add-ons such as our charcuterie board made with fresh local ingredients, breakfast and fondue package.",
    price: 239,
    category_id: 3,
  },
  {
    // id: 34
    city: "Englishtown",
    province: "NS",
    page_url:
      "https://www.airbnb.ca/rooms/16601304?source_impression_id=p3_1691507547_6Os9gOSwivLQnEw6",
    img_url:
      "https://a0.muscache.com/im/pictures/9ad00e35-3af1-4700-bce9-4a06205fcd13.jpg?im_w=1200",
    title: "The Atlantic Dome at Cabot Shores",
    description:
      "The Atlantic Dome is a 16-foot geodesic dome and placed among the trees and looking out over the ocean. Inside you’ll rest in a double bed and can look for shooting stars through the skylights. The bathroom is a short walk away; there is also an outhouse a few steps from the dome. There's no electricity or source of heat, but solar lights are provided. Hot tubs are available to rent for an additional fee (must reserve 24 hours in advance). Our domes are not pet-friendly.",
    short_desc:
      "Your dome is part of the whole Cabot Shores Wilderness Resort with gardens, forest, apple orchard, Church Pond and access to the Atlantic Ocean.",
    price: 181,
    category_id: 3,
  },
  {
    //id: 35
    city: "Hubbards",
    province: "NS",
    page_url:
      "https://www.airbnb.ca/rooms/672305717051331440?source_impression_id=p3_1691586537_KnXOPuxV3RJ6lk6d",
    img_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-672305717051331440/original/f6203df2-db0e-4a28-8b2f-09682b0f307d.jpeg?im_w=1440",
    title: "Hubbards Domes -Glamping in Nature",
    description:
      "There are 3 domes on the property. Each dome has 2 beds, a kitchen, a bathroom and a seating area. Each dome also has its own fire pit, barbecue, outdoor seating area and parking. The domes are in line with each other and are approximately 100 ft apart.",
    short_desc:
      "Surrounded by trees and wildlife, we hope you'll find space to reconnect. Enjoy some time in the water or explore the woods around you.",
    price: 292,
    category_id: 3,
  },
  {
    // id: 36
    city: "Port Wade",
    province: "NS",
    page_url:
      "https://glampinghub.com/canada/novascotia/portwade/glamping-dome-nova-scotia-holiday/",
    img_url:
      "https://media.glampinghub.com/CACHE/images/accommodations/photo-7-glamping-af5cfdcd-9857-44f2-93ba-6315eaf2e5df/62a4b24a1daca1149fe447599f32806a.avif",
    title: "Pet-Friendly Port Wade Glamping Dome for a Nova Scotia Holiday",
    description:
      "This gorgeous glamping dome is located in Port Wade and can accommodate 4 guests and any furry friends that would like to come along. There is a plush king-sized bed and a sleeper sofa to accommodate any extra guests. The dome boasts vast views of the Annapolis basin from its large panoramic window perfect for a holiday in Nova Scotia. There is a three-piece bathroom which includes a shower, a sink, and a toilet. Linens and towels are kindly provided by the hosts.",
    short_desc:
      "There is a large beaver dam on sight, that is just a short walk away, take in the sights and sounds of nature and relax",
    price: 168,
    category_id: 3,
  },
  {
    // id: 37
    city: "Saint Martins",
    province: "NB",
    page_url:
      "https://www.airbnb.ca/rooms/51109128?category_tag=Tag%3A8661&check_in=2023-09-17&check_out=2023-09-22&source_impression_id=p3_1691509879_dkDSNyRztN6rWwCu&previous_page_section_name=1000&federated_search_id=6b092ac5-7fa7-44be-846f-5d40bd085922",
    img_url:
      "https://a0.muscache.com/im/pictures/e579efe6-5ea6-417d-9a84-25085652d53b.jpg?im_w=1200",
    title: "FUNDY DOME TENTS - THE CLAYTON",
    description:
      "Welcome to The Clayton!! Located seconds away from Main Street, St. Martins, and just walking distance from the beach and the world famous sea caves along the beautiful Bay of Fundy. These domes will have immediate access to groomed atv & snow mobile trails, and are just a short 15 minute drive from the Fundy Trail.",
    short_desc:
      "These luxury domes will provide all the comforts of home while still allowing for a full camping experience without the hassle of a flimsy tent!",
    price: 225,
    category_id: 3,
  },
  {
    // id: 38
    city: "Kings County",
    province: "NB",
    page_url:
      "https://www.airbnb.ca/rooms/822511130323697236?source_impression_id=p3_1691586609_HSjlaCg%2F1K3SGBUG",
    img_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-822511130323697236/original/ccf880a2-c396-4ce3-8ff5-4cad83dbeb36.jpeg?im_w=1200",
    title: "Northern Spy Dome Waterford NB PoleyMtn Fundytrail",
    description:
      "Discover the gorgeous landscape that surrounds this place to stay. Come enjoy our cozy dome experience, as well as a full washroom/ entrance area",
    short_desc: "Quiet place in the foothills to explore and relax.",
    price: 175,
    category_id: 3,
  },
  {
    // id: 39
    city: "River John",
    province: "NS",
    page_url:
      "https://www.airbnb.ca/rooms/48301858?source_impression_id=p3_1691586689_whgBhXb4qgnDT3rv",
    img_url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-48301858/original/68a9e61a-651b-4c02-a33f-a3412e2e0d41.jpeg?im_w=720",
    title: "Geodesic Dome Hot Tub Retreat",
    description:
      "The whole dome is yours! With private deck, hot tub, parking, front lawn and outdoor firepit. A short walk will lead you to a shared dock, and outdoor cedar sauna.",
    short_desc:
      "400 square foot Geodesic Dome with hot tub overlooking the River John River!",
    price: 225,
    category_id: 3,
  },
  {
    //id: 40
    city: "St. George's Channel",
    province: "NS",
    page_url:
      "https://www.airbnb.ca/rooms/641905723265491055?source_impression_id=p3_1691586745_AEBKelzztQyMo%2F%2FU",
    img_url:
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-641905723265491055/original/b2ae505e-b92b-4ca3-9b5a-5997e0b0781b.jpeg?im_w=720",
    title: "Luxury Lakeside Dome #2 With Private Hot Tub",
    description:
      "Our domes features your own private hot tub, grill, and en-suite bathroom and sleeps up to four. The geodesic dome includes a queen-sized bed, fold-out couch, fully stocked kitchen. Included is a Keurig, coffee and kitchen essentials.",
    short_desc:
      "Unwind and relax in nature along the shores of Bras d'Or Lake. We offer our guests striking lake views through our panoramic bay windows from every dome.",
    price: 297,
    category_id: 3,
  },
  {
    //id: 41
    city: "Cardigan",
    province: "PEI",
    page_url:
      "https://www.airbnb.ca/rooms/53092641?source_impression_id=p3_1691586817_xLlAgW0pyf6PqEiL",
    img_url:
      "https://a0.muscache.com/im/pictures/8e40d445-7958-4227-8278-bf30390f9486.jpg?im_w=1200",
    title: "Shoreline Retreat River front luxury geo-dome",
    description:
      "Relax and enjoy the beautiful Cardigan river from the comfort of your own 2 bed, full kitchen & full bath luxury dome with private deck and hot tub and hammock . Wifi and smart TV included. Close to Confederation trails, liquor store, restaurants, golf courses and grocery stores. Beach access, clam digging etc ( water shoes recommended due to shells) Central fire pit to enjoy evening s’mores. Access to laundry facilities on site for weekly rentals.",
    short_desc: "Access to beach and wooded areas around the 29 acre property.",
    price: 250,
    category_id: 3,
  },
  {
    //id: 42
    city: "Trout River",
    province: "NL",
    page_url:
      "https://www.airbnb.ca/rooms/565152148217794013?source_impression_id=p3_1691512206_Tm7nO7hmoVXEqROH",
    img_url:
      "https://a0.muscache.com/im/pictures/2a6f05e9-131c-4a5e-919c-f7d254bb80cb.jpg?im_w=1200",
    title: "Hilltop: Gros Morne Glamping",
    description:
      "This modern style of camping takes you inside a geodesic dome overlooking beautiful Trout River, Tablelands and a mountain formation known to locals as the Elephants Head. One queen bed with a comfy pillow top mattress is the perfect way to end your day. A pullout sofa bed, linens, towels, outdoor firepit, picnic table, BBQ, cookware, dishes, utensils, and a cooler for food storage. All you need is clothes, personal toiletries and food! Don't forget your cozy slippers! Check our other listings!",
    short_desc:
      "Experience Newfoundland in a way few people have before! One of the first of it's kind on the island!",
    price: 165,
    category_id: 3,
  },
  {
    //id: 43
    city: "Trout River",
    province: "NL",
    page_url:
      "https://www.airbnb.ca/rooms/642722828125643783?source_impression_id=p3_1691587199_MliBpxFWcJJ8h1pR",
    img_url:
      "https://a0.muscache.com/im/pictures/5e13e37b-9741-4160-bb0b-f42faded8c74.jpg?im_w=1200",
    title: "Moonshine: Gros Morne Glamping",
    description:
      "This modern style of camping takes you inside a geodesic dome overlooking beautiful Trout River, Tablelands and a mountain formation known to locals as the Elephants Head. One queen bed with a comfy pillow top mattress is the perfect way to end your day. A pullout sofa bed, linens, towels, outdoor firepit, picnic table, BBQ, cookware, dishes & utensils. All you need is clothes, personal toiletries and food! Don't forget your cozy slippers for added comfort Gros Morne Glamping has other listings!",
    short_desc:
      "This unique yet modern style of camping takes you inside a geodesic dome tent and is a great way to enjoy outdoor activities without forfeiting a comfortable nights sleep.",
    price: 165,
    category_id: 3,
  },
  {
    //id: 44
    city: "Montague",
    province: "PEI",
    page_url:
      "https://www.airbnb.ca/rooms/51042575?adults=1&children=0&infants=0&check_in=2023-09-24&check_out=2023-09-29&source_impression_id=p3_1691529527_%2BSwRq3CNkAMwkORy&previous_page_section_name=1000&federated_search_id=60965996-0666-415f-911e-a793ad5572ae",
    img_url:
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51042575/original/03df49db-65db-484a-bb75-eb3031d344d4.jpeg?im_w=960",
    title: "Oceanfront Luxury Glamping Dome",
    description:
      "Nestled in the woods of PEI’s south-eastern shore, and overlooking the Murray Islands is the Maytree Eco-Dome, a unique 26ft luxury accommodation complete with a kitchen, bathroom, private bedroom, and lounge with views of the water.",
    short_desc:
      "Maytree offers direct access to your own private beach, and is the perfect location for kayaking, hiking, or having a beachside bonfire.",
    price: 325,
    category_id: 3,
  },
  {
    //id: 45
    city: "Cape Breton",
    province: "NS",
    page_url:
      "https://glampinghub.com/canada/novascotia/capebretonisland/getaway-cape-breton-island-nova-scotia-canada/",
    img_url:
      "https://media.glampinghub.com/CACHE/images/accommodations/forested-dome-for-two-overlooking-the-sea-in-cape-breton-island-n-1522140819807/946dc66390676b66be5aedda6f5c4d66.avif",
    title: "Treetop Dome Getaway",
    description:
      "Set on Cape Breton Island in Nova Scotia, Canada, Cabot Shores' elevated dome is the perfect glamping rental for guests looking to escape the city. With clear views of the night sky through the trees from the spacious geodesic dome, glampers can look forward to a truly unique vacation.",
    short_desc:
      "Located on the property's apple orchard, the dome rests on an elevated deck that gives glampers a great view of the water and mountain.",
    price: 138,
    category_id: 3,
  },
];

module.exports = seedLocations;
