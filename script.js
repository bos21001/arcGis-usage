require(["esri/config", "esri/Map", "esri/views/MapView", "esri/Graphic", "esri/layers/GraphicsLayer"], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {
    esriConfig.apiKey = "SECRET_TOKEN";

    const map = new Map({
        basemap: "arcgis-imagery" // Basemap layer service
    });

    const view = new MapView({
        map: map,
        center: [-48.0774443, -15.7217175], // Longitude, latitude
        zoom: 1, // Zoom level
        container: "viewDiv" // Div element
    });

    function createPoint(title = new String, content = new String, lon = new Number, lat = new Number, color = [new Number], idList = new String, outline = null) {
        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        const placePopup = {
            title: this.title,
            content: this.content
        }

        const placePoint = { //Create a point
            type: "point",
            longitude: this.lon,
            latitude: this.lat
        };

        const placeSimpleMarkerSymbol = {
            type: "simple-marker",
            color: this.color,  // Orange
            outline: this.outline
        };

        const placePointGraphic = new Graphic({
            geometry: placePoint,
            symbol: placeSimpleMarkerSymbol,
            popupTemplate: placePopup
        });

        graphicsLayer.add(placePointGraphic);

        document.getElementById(idList).innerHTML = title;
    };

    south_america_color = [255, 193, 7]; // bootstrap = bg-warning
    north_america_color = [220, 53, 69]; // bootstrap = bg-alert
    africa_color = [13, 202, 240]; // bootstrap = bg-info
    europe_color = [108, 117, 125]; // bootstrap = bg-secondary

    // South America Places
    place_1 = createPoint(
        title = "Machu Picchu",
        content = "Located on top of a mountain in the middle of a tropical forest, it is considered the tourist attraction par excellence in Peru. The historic sanctuary is a place that captivates tourists not only for its dazzling architectural beauty, but also for its important historical-cultural legacy, which has led it to be recognized and admired throughout the world.",
        lon = -72.54509113497029,
        lat = -13.16445656450498,
        color = south_america_color,
        idList = "place_1"
    );

    place_2 = createPoint(
        title = "Nevados de Chillán",
        content = "Situated about 6hrs south of Santiago, Nevados de Chillan (pronounced “Chiyan”) is a resort on the rise. With it’s ever-changing terrain, 1100m of vertical, friendly atmosphere and incredible backcountry access, Chillan is becoming known among South American snowboarders and, more recently, some international riders.",
        lon = -71.83188288956661,
        lat = -36.62880950018686,
        color = south_america_color,
        idList = "place_2"
    );

    place_3 = createPoint(
        title = "Punta del Este",
        content = "With a very Mediterranean feel to it, Piriapolis' wonderful beaches are great for lounging on, and the long promenade that hugs the waterfront is perfect for relaxing strolls while taking in the sun and river views.",
        lon = -54.944729191476455,
        lat = -34.96319977406606,
        color = south_america_color,
        idList = "place_3"
    );

    place_4 = createPoint(
        title = "Patagonia, Argentine",
        content = "Argentine Patagonia is a treat for all travelers, not just those with a penchant for adventure. From its diverse wildlife (such as Magellanic penguins, Andean cats and southern elephant seals) to its majestic mountains and jaw-dropping glaciers, this region showcases Mother Nature at its best. Even the most amateur of photographers will appreciate the palette of incredible colors on display here. Can't-miss places for first-timers include the Argentine Lake District, Mount Fitz Roy and the Perito Moreno Glacier.",
        lon = -70.67338551160141,
        lat = -44.99027709712961,
        color = south_america_color,
        idList = "place_4"
    );

    place_5 = createPoint(
        title = "Galapagos Islands",
        content = "The Galápagos Islands are best known for their colorful creatures, ranging from giant tortoises to seals to penguins. The islands are also famous for helping Charles Darwin develop his theory of natural selection. Today, animals still reign supreme (of the more than 120 islands, islets and rocks that comprise the Galápagos archipelago, only four are inhabited by humans). Getting here will cost you, as the remote islands sit about 600 miles off of the coast of Ecuador. Still, the plentiful wildlife-viewing opportunities make the lengthy trip worthwhile.",
        lon = -90.3638752,
        lat = -0.6288151,
        color = south_america_color,
        idList = "place_5"
    );

    place_6 = createPoint(
        title = "Jericoacoara",
        content = "Located in the northeast of Brazil in the state of Ceara, Jericoacoara is a lovely, laidback place nestled between the Atlantic Ocean and a national park of the same name. Often referred to as Jeri or Jijoca, the small and secluded seaside town boasts some of the most beautiful scenery in Brazil and is an increasingly popular tourist destination.",
        lon = -40.45131611305707,
        lat = -2.8982849139121405,
        color = south_america_color,
        idList = "place_6"
    );

    // North America Places
    place_7 = createPoint(
        title = "Banff, Canada",
        content = "Nestled amid the foothills of the Canadian Rockies, this tiny mountain town in Alberta appeals to both nature enthusiasts and luxury seekers. Visitors can spend their days skiing or hiking in Banff National Park and floating down the Bow River before retiring to one of the several opulent hotels for some spa therapy. Daytrips to popular attractions like the Columbia Icefield and Moraine Lake – renowned for its turquoise waters – cannot be left off of your itinerary.",
        lon = -115.57252289258571,
        lat = 51.175023995799755,
        color = north_america_color,
        idList = "place_7"
    );

    place_8 = createPoint(
        title = "Vancouver, BC, Canada",
        content = "A trip to Vancouver is all about embracing the outdoors. Vancouverites spend their days skiing on Grouse Mountain, swimming at Kitsilano Beach and strolling through sprawling Stanley Park. Plus, this British Columbia city offers plenty of cultural attractions, including museums and outdoor markets (Granville Island is a must-see). If you're not afraid of heights, head about 5 miles north of the city center to the Capilano Suspension Bridge, which is positioned 230 feet above the Capilano River.",
        lon = -123.11446469911029,
        lat = 49.260586598733966,
        color = north_america_color,
        idList = "place_8"
    );

    place_9 = createPoint(
        title = "Niagara Falls",
        content = "Travel to this Ontario destination to see and capture photos of its iconic natural attraction. Explore the falls from above during a helicopter tour, or see them up close by walking below and behind the falls with the Journey Behind the Falls attraction. After you've taken in the splendor, check out the area's other top attractions, such as the Niagara Glen Nature Centre, which offers a variety of hiking trails. When you've had your fill of nature, head to nearby wineries or test Lady Luck at the casinos.",
        lon = -79.06000604540893,
        lat = 43.10907489798865,
        color = north_america_color,
        idList = "place_9"
    );

    place_10 = createPoint(
        title = "New York",
        content = "Cool, cosmopolitan, crowded, constantly evolving … the Big Apple blends big city splendor with small-town charm. Amid Gotham's iconic landmarks and towering skyscrapers, you'll experience a vibrant culture permeating each of the city's distinctive neighborhoods and boroughs. Follow trendsetters to the East Village and Brooklyn to check out indie boutiques, iconic bakeries and trendy coffee shops. Afterward, peruse the racks of the sleek shops lining Fifth Avenue, admire the cutting-edge art collections at the MoMA and the Met, catch a memorable show on Broadway or sit down for a meal at the latest 'it' restaurant.",
        lon = -74.00608380255487,
        lat = 40.71261205575172,
        color = north_america_color,
        idList = "place_10"
    );

    place_11 = createPoint(
        title = "Salt Lake City",
        content = "Salt Lake City has long been a little mystical. Back in the early 19th century, pioneers believed the area's Great Salt Lake was inhabited by monsters and giants. This spooky legend faded until Brigham Young decided to make Salt Lake the home of the new Church of Jesus Christ of Latter-day Saints in 1847. Today, those who have spent time in Salt Lake will tell you that it's more than just a place of great faith, it's also a thriving cultural hub and an excellent home base for hikers and skiers.",
        lon = -111.88674503922273,
        lat = 40.759546630943966,
        color = north_america_color,
        idList = "place_11"
    );

    place_12 = createPoint(
        title = "Tulum",
        content = "Home to Mexico's most famous waterfront Mayan ruins, Tulum appeals to history buffs and water lovers alike. Positioned along a coastal stretch of the Riviera Maya, the area offers numerous lodging options, ranging from small boutique hotels to wellness retreats to all-inclusive resorts. That means every traveler can book the vacation that will best suit them. Regardless of where you stay, you can spend time lounging on the beach, exploring ancient ruins and swimming in secluded cenotes, unique underwater caves located around the Yucatán Peninsula.",
        lon = -87.42952319366677,
        lat = 20.215137578138595,
        color = north_america_color,
        idList = "place_12"
    );

    // Africa Places
    place_13 = createPoint(
        title = "Luxor, Egypt",
        content = "Cairo's pyramids may steal most of the spotlight, but ancient Egypt aficionados know not to overlook Luxor. Perhaps the most pressing reason to visit this UNESCO World Heritage-listed city is to tour the Valley of the Kings, where at least 63 ancient pharaohs – including King Tut – are entombed. Many monuments and tombs found here date back to the 14th century B.C., including must-see sites like the Temple of Luxor and the Colossi of Memnon.",
        lon = 32.64380106860651,
        lat = 25.69820795428624,
        color = africa_color,
        idList = "place_13"
    );

    place_14 = createPoint(
        title = "Serengeti National Park",
        content = "If you're enamored with the prospect of coming face to face with elephants, giraffes, zebras and wildebeests, then a safari through Tanzania's Serengeti National Park is the adventure for you. The price will be steep, but a journey here affords an unforgettable experience. To save some coin, book one of the park's campgrounds instead of staying at a high-end safari lodge or luxury tented camp. Plan on arriving in January or February (calving season) or between June and October (dry season and prime migration time) for the best game-viewing conditions.",
        lon = 34.7018547,
        lat = -2.3690817,
        color = africa_color,
        idList = "place_14"
    );

    place_15 = createPoint(
        title = "Mauritius",
        content = "Mauritius appeals to vacationers in search of a bit of everything. Though its main draws are its powdery sands and luxe resorts, this small island nation east of Madagascar also charms visitors with its mix of Dutch, French and British colonial architecture; friendly locals; and tasty teas and rums. After a day of exploring and soaking up some sun, retreat to one of the island's premier properties to savor fresh seafood while watching a traditional sega dance performance or the sun set over the Indian Ocean.",
        lon = 57.570351853936124,
        lat = -20.27595503509836,
        color = africa_color,
        idList = "place_15"
    );

    place_16 = createPoint(
        title = "Madagascar",
        content = "The habitat on the island of Madagascar is unlike any other in the world: Most of the landscape is unspoiled, giving visitors a chance to see animals in their natural environment. Travelers should make sure to snap a photo of the signature animal: the lemur. Madagascar is home to more than 100 species of these creatures, as well as 19,000-plus kinds of plants. Some of the best places to see wild lemurs include Isalo National Park and Lokobe National Park.",
        lon = 46.432596989228244,
        lat = -18.95797635323855,
        color = africa_color,
        idList = "place_16"
    );

    // Europe Places
    place_17 = createPoint(
        title = "Paris",
        content = "Paris is filled with highly regarded museums, monuments and churches. You could easily spend your entire vacation admiring iconic sights like the Eiffel Tower, wandering through exhibits at the Louvre and strolling through the beautiful green space admiring flowers at the Luxembourg Gardens. Still, you should save some time for people-watching and sampling fresh croissants at sidewalk cafes during the day. Once the sun sets, sit down for a decadent French meal with amazing wine.",
        lon = 2.31999776039411,
        lat = 48.85882035790702,
        color = europe_color,
        idList = "place_17",
        outline = { color: [255, 255, 255], width: 3 }
    );

    place_18 = createPoint(
        title = "London",
        content = "Exploring the world-class British Museum, seeing a musical in the West End theater district, touring the Tower of London and gorging on fish and chips or a Sunday roast at a local pub are all part of the London bucket list experience. However, London's high hotel prices can make travelers with tight budgets cringe. To save some money, book your accommodations far in advance or consider reserving a vacation rental.",
        lon = -0.1276858352052601,
        lat = 51.507382080335674,
        color = europe_color,
        idList = "place_18",
        outline = { color: [255, 255, 255], width: 3 }
    );

    place_19 = createPoint(
        title = "Swiss Alps",
        content = "Located south of Zurich, Bern and Basel, the Swiss Alps are a haven for winter sports enthusiasts. While skiing, hiking and snowboarding tend to dominate this region, you'll also discover quaint towns, serene lakes and gorgeous scenery. Luxury mountain resorts are available throughout the region as well, making it a playground for all sorts of travelers. Additionally, no trip to the Swiss Alps would be complete without indulging in some warm, gooey cheese fondue.",
        lon = 8.63856450440062,
        lat = 47.03408882068651,
        color = europe_color,
        idList = "place_19",
        outline = { color: [255, 255, 255], width: 3 }
    );

    place_20 = createPoint(
        title = "Santorini",
        content = "Visit this Greek island for its unique volcanic landscape, relaxing beaches and distinct local architecture. Enjoy stunning views of the striking blue sea and whitewashed buildings Santorini is famous for from the sky-high village of Oia. Then, sink your toes into Kamari Beach's jet-black sand or Red Beach's vivid red sand before visiting a local winery to taste the island's delectable vino, which is made with grapes grown on volcanic soil.",
        lon = 25.4767089,
        lat = 36.3996623,
        color = europe_color,
        idList = "place_20",
        outline = { color: [255, 255, 255], width: 3 }
    );

});