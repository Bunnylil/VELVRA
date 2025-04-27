document.addEventListener("DOMContentLoaded", function () {
    // Enhanced product data with all attributes needed for the product page
    const products = [
      {
        id: 1,
        name: "UA Harper 9 Pro ST",
        model: "UA Harper",
        brand: "UnderArmour",
        price: 95,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027445-001_DEFAULT?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
        gender: ["Men"],
        sport: ["Baseball"],
        color: "black",
        colors: ["black", "white", "blue", "purple","grey","pink"],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        rating: 4.5,
        trending: true,
        new: false,
        videosets: {
          "black": [
            "videos/vid1 (1).mp4"
          ],
          "white": [
            "videos/vid1 (2).mp4"
          ],
          "blue": [
            "videos/vid1 (3).mp4"
          ],
          "purple": [
            "videos/vid1 (4).mp4"
          ],
          "grey": [
            "videos/vid1 (5).mp4"
          ],
          "pink": [
            "videos/vid1 (6).mp4"
          ]
          
        },
        details: [
          "UA IntelliKnit upper is breathable & provides premium stretch & compression where you need it",
          "Engineered fit for increased comfort & reduced flex pressure with bootie design for locked-in support",
          "Synthetic leather in the forefoot for added durability",
          "Lightweight, hybrid cleat plate with front UA Microtips metal spikes for speed & ultimate traction",
          "Molded TPU back cleats for all-game comfort"
        ]
      },
      {
        id: 2,
        name: "ULTRABOOST 22",
        model: "UB 22",
        brand: "Adidas",
        price: 180,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027454-600_DEFAULT?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Baseball"],
        color: "Red",
        colors: ["black", "white", "blue"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        rating: 4.7,
        trending: true,
        new: true,
        videosets: {
          "black": [
            "videos/ub_black_1.mp4",
            "videos/ub_black_2.mp4",
            "videos/ub_black_3.mp4"
          ],
          "white": [
            "videos/ub_white_1.mp4",
            "videos/ub_white_2.mp4"
          ],
          "blue": [
            "videos/ub_blue_1.mp4",
            "videos/ub_blue_2.mp4",
            "videos/ub_blue_3.mp4"
          ]
        },
        details: [
          "Responsive Boost midsole",
          "Primeknit+ adaptive fit",
          "Linear Energy Push system",
          "Continental rubber outsole",
          "Tailored Fiber Placement upper"
        ]
      },
      {
        id: 3,
        name: "990V5",
        model: "990v5",
        brand: "UnderArmour",
        price: 175,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027447-001_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Baseball"],
        color: "Grey",
        colors: ["grey", "navy"],
        sizes: [39, 40, 41, 42, 43, 44],
        rating: 4.6,
        trending: false,
        new: false,
        videosets: {
          "grey": [
            "videos/nb990_grey_1.mp4",
            "videos/nb990_grey_2.mp4"
          ],
          "navy": [
            "videos/nb990_navy_1.mp4",
            "videos/nb990_navy_2.mp4",
            "videos/nb990_navy_3.mp4"
          ]
        },
        details: [
          "Pigskin and mesh upper",
          "ENCAP midsole technology",
          "Dual-density collar foam",
          "Blown rubber outsole",
          "Made in USA"
        ]
      },
      {
        id: 4,
        name: "CHUCK 70",
        model: "Chuck Taylor",
        brand: "Converse",
        price: 85,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027448-104_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Casual", "Skate"],
        color: "Black",
        colors: ["black", "white", "red"],
        sizes: [37, 38, 39, 40, 41, 42, 43],
        rating: 4.3,
        trending: true,
        new: false,
        videosets: {
          "black": [
            "videos/chuck_black_1.mp4",
            "videos/chuck_black_2.mp4"
          ],
          "white": [
            "videos/chuck_white_1.mp4",
            "videos/chuck_white_2.mp4",
            "videos/chuck_white_3.mp4"
          ],
          "red": [
            "videos/chuck_red_1.mp4",
            "videos/chuck_red_2.mp4"
          ]
        },
        details: [
          "Canvas upper",
          "OrthoLite insole",
          "Vulcanized rubber sole",
          "Classic Chuck Taylor design",
          "Reinforced toe cap"
        ]
      },
      {
        id: 5,
        name: "GEL-KAYANO 28",
        model: "Kayano 28",
        brand: "ASICS",
        price: 160,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027836-002_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Running"],
        color: "Blue",
        colors: ["blue", "black"],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        rating: 4.8,
        trending: false,
        new: true,
        videosets: {
          "blue": [
            "videos/kayano_blue_1.mp4",
            "videos/kayano_blue_2.mp4",
            "videos/kayano_blue_3.mp4"
          ],
          "black": [
            "videos/kayano_black_1.mp4",
            "videos/kayano_black_2.mp4"
          ]
        },
        details: [
          "Dynamic DUOMAX support system",
          "FF BLAST cushioning",
          "Ortholite X-40 sockliner",
          "AHAR outsole rubber",
          "Engineered mesh upper"
        ]
      },
      {
        id: 6,
        name: "CLASSIC LEATHER",
        model: "Classic",
        brand: "Reebok",
        price: 75,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027451-400_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Casual", "Lifestyle"],
        color: "White",
        colors: ["white", "black"],
        sizes: [38, 39, 40, 41, 42, 43],
        rating: 4.2,
        trending: false,
        new: false,
        videosets: {
          "white": [
            "videos/reebok_white_1.mp4",
            "videos/reebok_white_2.mp4"
          ],
          "black": [
            "videos/reebok_black_1.mp4",
            "videos/reebok_black_2.mp4",
            "videos/reebok_black_3.mp4"
          ]
        },
        details: [
          "Leather upper",
          "EVA midsole",
          "Rubber outsole",
          "Classic Reebok design",
          "Padded collar"
        ]
      },
      {
        id: 7,
        name: "SK8-HI",
        model: "Sk8-Hi",
        brand: "Vans",
        price: 75,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027456-001_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Skate", "Casual"],
        color: "Black",
        colors: ["black", "checkerboard"],
        sizes: [37, 38, 39, 40, 41, 42],
        rating: 4.4,
        trending: true,
        new: false,
        videosets: {
          "black": [
            "videos/vans_black_1.mp4",
            "videos/vans_black_2.mp4"
          ],
          "checkerboard": [
            "videos/vans_check_1.mp4",
            "videos/vans_check_2.mp4",
            "videos/vans_check_3.mp4"
          ]
        },
        details: [
          "Canvas and suede upper",
          "Reinforced toe caps",
          "Padded collars",
          "Waffle outsole",
          "Signature Vans style"
        ]
      },
      {
        id: 8,
        name: "CUSHION CREW",
        model: "Crew",
        brand: "Under Armour",
        price: 60,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027453-100_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Training", "Gym"],
        color: "Black",
        colors: ["black", "grey"],
        sizes: [39, 40, 41, 42, 43, 44],
        rating: 4.1,
        trending: false,
        new: true,
        videosets: {
          "black": [
            "videos/ua_black_1.mp4",
            "videos/ua_black_2.mp4"
          ],
          "grey": [
            "videos/ua_grey_1.mp4",
            "videos/ua_grey_2.mp4"
          ]
        },
        details: [
          "Lightweight mesh upper",
          "EVA sockliner",
          "Charged cushioning midsole",
          "Rubber outsole",
          "Breathable design"
        ]
      },
      {
        id: 9,
        name: "CHUCK 70",
        model: "Chuck Taylor",
        brand: "Converse",
        price: 85,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027450-100_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Casual", "Skate"],
        color: "Black",
        colors: ["black", "white", "red"],
        sizes: [37, 38, 39, 40, 41, 42, 43],
        rating: 4.3,
        trending: true,
        new: false,
        videosets: {
          "black": [
            "videos/chuck_black_1.mp4",
            "videos/chuck_black_2.mp4"
          ],
          "white": [
            "videos/chuck_white_1.mp4",
            "videos/chuck_white_2.mp4",
            "videos/chuck_white_3.mp4"
          ],
          "red": [
            "videos/chuck_red_1.mp4",
            "videos/chuck_red_2.mp4"
          ]
        },
        details: [
          "Canvas upper",
          "OrthoLite insole",
          "Vulcanized rubber sole",
          "Classic Chuck Taylor design",
          "Reinforced toe cap"
        ]
      },
      {
        id: 10,
        name: "GEL-KAYANO 28",
        model: "Kayano 28",
        brand: "ASICS",
        price: 160,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027443-101_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Running"],
        color: "Blue",
        colors: ["blue", "black"],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        rating: 4.8,
        trending: false,
        new: true,
        videosets: {
          "blue": [
            "videos/kayano_blue_1.mp4",
            "videos/kayano_blue_2.mp4",
            "videos/kayano_blue_3.mp4"
          ],
          "black": [
            "videos/kayano_black_1.mp4",
            "videos/kayano_black_2.mp4"
          ]
        },
        details: [
          "Dynamic DUOMAX support system",
          "FF BLAST cushioning",
          "Ortholite X-40 sockliner",
          "AHAR outsole rubber",
          "Engineered mesh upper"
        ]
      },
      {
        id: 11,
        name: "CLASSIC LEATHER",
        model: "Classic",
        brand: "Reebok",
        price: 75,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027439-100_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Casual", "Lifestyle"],
        color: "White",
        colors: ["white", "black"],
        sizes: [38, 39, 40, 41, 42, 43],
        rating: 4.2,
        trending: false,
        new: false,
        videosets: {
          "white": [
            "videos/reebok_white_1.mp4",
            "videos/reebok_white_2.mp4"
          ],
          "black": [
            "videos/reebok_black_1.mp4",
            "videos/reebok_black_2.mp4",
            "videos/reebok_black_3.mp4"
          ]
        },
        details: [
          "Leather upper",
          "EVA midsole",
          "Rubber outsole",
          "Classic Reebok design",
          "Padded collar"
        ]
      },
      {
        id: 12,
        name: "SK8-HI",
        model: "Sk8-Hi",
        brand: "Vans",
        price: 75,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3028410-800_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Skate", "Casual"],
        color: "Black",
        colors: ["black", "checkerboard"],
        sizes: [37, 38, 39, 40, 41, 42],
        rating: 4.4,
        trending: true,
        new: false,
        videosets: {
          "black": [
            "videos/vans_black_1.mp4",
            "videos/vans_black_2.mp4"
          ],
          "checkerboard": [
            "videos/vans_check_1.mp4",
            "videos/vans_check_2.mp4",
            "videos/vans_check_3.mp4"
          ]
        },
        details: [
          "Canvas and suede upper",
          "Reinforced toe caps",
          "Padded collars",
          "Waffle outsole",
          "Signature Vans style"
        ]
      },
      {
        id: 13,
        name: "CUSHION CREW",
        model: "Crew",
        brand: "Under Armour",
        price: 60,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027524-001_DEFAULT?rp=standard-30pad%7CgridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=512&hei=640&size=472%2C600",
        gender: ["Men"],
        sport: ["Training", "Gym"],
        color: "Black",
        colors: ["black", "grey"],
        sizes: [39, 40, 41, 42, 43, 44],
        rating: 4.1,
        trending: false,
        new: true,
        videosets: {
          "black": [
            "videos/ua_black_1.mp4",
            "videos/ua_black_2.mp4"
          ],
          "grey": [
            "videos/ua_grey_1.mp4",
            "videos/ua_grey_2.mp4"
          ]
        },
        details: [
          "Lightweight mesh upper",
          "EVA sockliner",
          "Charged cushioning midsole",
          "Rubber outsole",
          "Breathable design"
        ]
      },
      {
        id: 14,
        name: "CHUCK 70",
        model: "Chuck Taylor",
        brand: "Converse",
        price: 85,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3028384-101_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Casual", "Skate"],
        color: "Black",
        colors: ["black", "white", "red"],
        sizes: [37, 38, 39, 40, 41, 42, 43],
        rating: 4.3,
        trending: true,
        new: false,
        videosets: {
          "black": [
            "videos/chuck_black_1.mp4",
            "videos/chuck_black_2.mp4"
          ],
          "white": [
            "videos/chuck_white_1.mp4",
            "videos/chuck_white_2.mp4",
            "videos/chuck_white_3.mp4"
          ],
          "red": [
            "videos/chuck_red_1.mp4",
            "videos/chuck_red_2.mp4"
          ]
        },
        details: [
          "Canvas upper",
          "OrthoLite insole",
          "Vulcanized rubber sole",
          "Classic Chuck Taylor design",
          "Reinforced toe cap"
        ]
      },
      {
        id: 15,
        name: "GEL-KAYANO 28",
        model: "Kayano 28",
        brand: "ASICS",
        price: 160,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027523-044_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Running"],
        color: "Blue",
        colors: ["blue", "black"],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        rating: 4.8,
        trending: false,
        new: true,
        videosets: {
          "blue": [
            "videos/kayano_blue_1.mp4",
            "videos/kayano_blue_2.mp4",
            "videos/kayano_blue_3.mp4"
          ],
          "black": [
            "videos/kayano_black_1.mp4",
            "videos/kayano_black_2.mp4"
          ]
        },
        details: [
          "Dynamic DUOMAX support system",
          "FF BLAST cushioning",
          "Ortholite X-40 sockliner",
          "AHAR outsole rubber",
          "Engineered mesh upper"
        ]
      },
      {
        id: 16,
        name: "CLASSIC LEATHER",
        model: "Classic",
        brand: "Reebok",
        price: 75,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027767-114_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Casual", "Lifestyle"],
        color: "White",
        colors: ["white", "black"],
        sizes: [38, 39, 40, 41, 42, 43],
        rating: 4.2,
        trending: false,
        new: false,
        videosets: {
          "white": [
            "videos/reebok_white_1.mp4",
            "videos/reebok_white_2.mp4"
          ],
          "black": [
            "videos/reebok_black_1.mp4",
            "videos/reebok_black_2.mp4",
            "videos/reebok_black_3.mp4"
          ]
        },
        details: [
          "Leather upper",
          "EVA midsole",
          "Rubber outsole",
          "Classic Reebok design",
          "Padded collar"
        ]
      },
      {
        id: 17,
        name: "SK8-HI",
        model: "Sk8-Hi",
        brand: "Vans",
        price: 75,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3028168-014_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Skate", "Casual"],
        color: "Black",
        colors: ["black", "checkerboard"],
        sizes: [37, 38, 39, 40, 41, 42],
        rating: 4.4,
        trending: true,
        new: false,
        videosets: {
          "black": [
            "videos/vans_black_1.mp4",
            "videos/vans_black_2.mp4"
          ],
          "checkerboard": [
            "videos/vans_check_1.mp4",
            "videos/vans_check_2.mp4",
            "videos/vans_check_3.mp4"
          ]
        },
        details: [
          "Canvas and suede upper",
          "Reinforced toe caps",
          "Padded collars",
          "Waffle outsole",
          "Signature Vans style"
        ]
      },
      {
        id: 18,
        name: "CUSHION CREW",
        model: "Crew",
        brand: "Under Armour",
        price: 60,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027524-001_DEFAULT?rp=standard-30pad%7CgridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=512&hei=640&size=472%2C600",
        gender: ["Men"],
        sport: ["Training", "Gym"],
        color: "Black",
        colors: ["black", "grey"],
        sizes: [39, 40, 41, 42, 43, 44],
        rating: 4.1,
        trending: false,
        new: true,
        videosets: {
          "black": [
            "videos/ua_black_1.mp4",
            "videos/ua_black_2.mp4"
          ],
          "grey": [
            "videos/ua_grey_1.mp4",
            "videos/ua_grey_2.mp4"
          ]
        },
        details: [
          "Lightweight mesh upper",
          "EVA sockliner",
          "Charged cushioning midsole",
          "Rubber outsole",
          "Breathable design"
        ]
      },
      {
        id: 19,
        name: "CHUCK 70",
        model: "Chuck Taylor",
        brand: "Converse",
        price: 85,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027585-348_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Casual", "Skate"],
        color: "Black",
        colors: ["black", "white", "red"],
        sizes: [37, 38, 39, 40, 41, 42, 43],
        rating: 4.3,
        trending: true,
        new: false,
        videosets: {
          "black": [
            "videos/chuck_black_1.mp4",
            "videos/chuck_black_2.mp4"
          ],
          "white": [
            "videos/chuck_white_1.mp4",
            "videos/chuck_white_2.mp4",
            "videos/chuck_white_3.mp4"
          ],
          "red": [
            "videos/chuck_red_1.mp4",
            "videos/chuck_red_2.mp4"
          ]
        },
        details: [
          "Canvas upper",
          "OrthoLite insole",
          "Vulcanized rubber sole",
          "Classic Chuck Taylor design",
          "Reinforced toe cap"
        ]
      },
      {
        id: 20,
        name: "GEL-KAYANO 28",
        model: "Kayano 28",
        brand: "ASICS",
        price: 160,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027205-102_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Running"],
        color: "Blue",
        colors: ["blue", "black"],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        rating: 4.8,
        trending: false,
        new: true,
        videosets: {
          "blue": [
            "videos/kayano_blue_1.mp4",
            "videos/kayano_blue_2.mp4",
            "videos/kayano_blue_3.mp4"
          ],
          "black": [
            "videos/kayano_black_1.mp4",
            "videos/kayano_black_2.mp4"
          ]
        },
        details: [
          "Dynamic DUOMAX support system",
          "FF BLAST cushioning",
          "Ortholite X-40 sockliner",
          "AHAR outsole rubber",
          "Engineered mesh upper"
        ]
      },
      {
        id: 21,
        name: "CLASSIC LEATHER",
        model: "Classic",
        brand: "Reebok",
        price: 75,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027202-498_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Casual", "Lifestyle"],
        color: "White",
        colors: ["white", "black"],
        sizes: [38, 39, 40, 41, 42, 43],
        rating: 4.2,
        trending: false,
        new: false,
        videosets: {
          "white": [
            "videos/reebok_white_1.mp4",
            "videos/reebok_white_2.mp4"
          ],
          "black": [
            "videos/reebok_black_1.mp4",
            "videos/reebok_black_2.mp4",
            "videos/reebok_black_3.mp4"
          ]
        },
        details: [
          "Leather upper",
          "EVA midsole",
          "Rubber outsole",
          "Classic Reebok design",
          "Padded collar"
        ]
      },
      {
        id: 22,
        name: "SK8-HI",
        model: "Sk8-Hi",
        brand: "Vans",
        price: 75,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027595-007_A?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600",
        gender: ["Men"],
        sport: ["Skate", "Casual"],
        color: "Black",
        colors: ["black", "checkerboard"],
        sizes: [37, 38, 39, 40, 41, 42],
        rating: 4.4,
        trending: true,
        new: false,
        videosets: {
          "black": [
            "videos/vans_black_1.mp4",
            "videos/vans_black_2.mp4"
          ],
          "checkerboard": [
            "videos/vans_check_1.mp4",
            "videos/vans_check_2.mp4",
            "videos/vans_check_3.mp4"
          ]
        },
        details: [
          "Canvas and suede upper",
          "Reinforced toe caps",
          "Padded collars",
          "Waffle outsole",
          "Signature Vans style"
        ]
      },
      {
        id: 23,
        name: "CUSHION CREW",
        model: "Crew",
        brand: "Under Armour",
        price: 60,
        image: "https://underarmour.scene7.com/is/image/Underarmour/3027524-001_DEFAULT?rp=standard-30pad%7CgridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=512&hei=640&size=472%2C600",
        gender: ["Men"],
        sport: ["Training", "Gym"],
        color: "Black",
        colors: ["black", "grey"],
        sizes: [39, 40, 41, 42, 43, 44],
        rating: 4.1,
        trending: false,
        new: true,
        videosets: {
          "black": [
            "videos/ua_black_1.mp4",
            "videos/ua_black_2.mp4"
          ],
          "grey": [
            "videos/ua_grey_1.mp4",
            "videos/ua_grey_2.mp4"
          ]
        },
        details: [
          "Lightweight mesh upper",
          "EVA sockliner",
          "Charged cushioning midsole",
          "Rubber outsole",
          "Breathable design"
        ]
      },
    ];
  
    const productGrid = document.getElementById("product-grid");
    const pagination = document.getElementById("pagination");
    const clearBtn = document.querySelector(".clear-btn");
  
    // Filter elements
    const sortOptions = document.querySelectorAll('input[name="sort"]');
    const genderFilters = document.querySelectorAll('input[name="gender"]');
    const sportFilters = document.querySelectorAll('input[name="sport"]');
    const colorFilters = document.querySelectorAll('input[name="color"]');
    const brandFilters = document.querySelectorAll('input[name="brand"]');
    const sizeButtons = document.querySelectorAll(".size-btn");
    const minPriceInput = document.querySelector('input[name="minPrice"]');
    const maxPriceInput = document.querySelector('input[name="maxPrice"]');
    const priceOkBtn = document.querySelector(".ok-btn");
  
    // Filter state
    let currentFilters = {
      sort: null,
      genders: [],
      sports: [],
      colors: [],
      brands: [],
      sizes: [],
      minPrice: null,
      maxPrice: null,
    };
  
    // Pagination state
    const productsPerPage = 12;
    let currentPage = 1;
  
    // Initialize with all filter sections collapsed
    function initFilterSections() {
      document.querySelectorAll(".filter-options").forEach((section) => {
        section.style.display = "none";
      });
      document.querySelectorAll(".toggle-icon").forEach((icon) => {
        icon.textContent = "+";
      });
    }
  
    // Initialize
    initFilterSections();
    renderProducts(products);
    setupEventListeners();
  
    function setupEventListeners() {
      // Sort options
      sortOptions.forEach((option) => {
        option.addEventListener("change", (e) => {
          currentFilters.sort = e.target.value;
          applyFilters();
        });
      });
  
      // Gender filters
      genderFilters.forEach((filter) => {
        filter.addEventListener("change", (e) => {
          if (e.target.checked) {
            currentFilters.genders.push(e.target.value);
          } else {
            currentFilters.genders = currentFilters.genders.filter(
              (g) => g !== e.target.value
            );
          }
          applyFilters();
        });
      });
  
      // Sport filters
      sportFilters.forEach((filter) => {
        filter.addEventListener("change", (e) => {
          if (e.target.checked) {
            currentFilters.sports.push(e.target.value);
          } else {
            currentFilters.sports = currentFilters.sports.filter(
              (s) => s !== e.target.value
            );
          }
          applyFilters();
        });
      });
  
      // Color filters
      colorFilters.forEach((filter) => {
        filter.addEventListener("change", (e) => {
          if (e.target.checked) {
            currentFilters.colors.push(e.target.value);
          } else {
            currentFilters.colors = currentFilters.colors.filter(
              (c) => c !== e.target.value
            );
          }
          applyFilters();
        });
      });
  
      // Brand filters
      brandFilters.forEach((filter) => {
        filter.addEventListener("change", (e) => {
          if (e.target.checked) {
            currentFilters.brands.push(e.target.value);
          } else {
            currentFilters.brands = currentFilters.brands.filter(
              (b) => b !== e.target.value
            );
          }
          applyFilters();
        });
      });
  
      // Size filters
      sizeButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const size = parseInt(e.target.dataset.size);
          if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
            currentFilters.sizes = currentFilters.sizes.filter((s) => s !== size);
          } else {
            e.target.classList.add("active");
            currentFilters.sizes.push(size);
          }
          applyFilters();
        });
      });
  
      // Price filter
      priceOkBtn.addEventListener("click", () => {
        currentFilters.minPrice = minPriceInput.value
          ? parseInt(minPriceInput.value)
          : null;
        currentFilters.maxPrice = maxPriceInput.value
          ? parseInt(maxPriceInput.value)
          : null;
        applyFilters();
      });
  
      // Clear all filters
      clearBtn.addEventListener("click", clearAllFilters);
  
      // Filter section toggles
      document.querySelectorAll(".filter-header").forEach((header) => {
        header.addEventListener("click", function () {
          const options = this.nextElementSibling;
          const icon = this.querySelector(".toggle-icon");
  
          if (options.style.display === "none" || !options.style.display) {
            options.style.display = "block";
            icon.textContent = "-";
            this.setAttribute("aria-expanded", "true");
          } else {
            options.style.display = "none";
            icon.textContent = "+";
            this.setAttribute("aria-expanded", "false");
          }
        });
      });
    }
  
    function applyFilters() {
      let filteredProducts = [...products];
  
      // Apply gender filter
      if (currentFilters.genders.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          product.gender.some((g) => currentFilters.genders.includes(g))
        );
      }
  
      // Apply sport filter
      if (currentFilters.sports.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          product.sport.some((s) => currentFilters.sports.includes(s))
        );
      }
  
      // Apply color filter
      if (currentFilters.colors.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          currentFilters.colors.includes(product.color)
        );
      }
  
      // Apply brand filter
      if (currentFilters.brands.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          currentFilters.brands.includes(product.brand)
        );
      }
  
      // Apply size filter
      if (currentFilters.sizes.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          product.sizes.some((s) => currentFilters.sizes.includes(s))
        );
      }
  
      // Apply price filter
      if (currentFilters.minPrice !== null) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= currentFilters.minPrice
        );
      }
      if (currentFilters.maxPrice !== null) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price <= currentFilters.maxPrice
        );
      }
  
      // Apply sorting
      if (currentFilters.sort) {
        switch (currentFilters.sort) {
          case "price-low-high":
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
          case "price-high-low":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
          case "trending":
            filteredProducts = filteredProducts.filter((p) => p.trending);
            break;
          case "bestsellers":
            filteredProducts = filteredProducts.filter((p) => p.rating > 4.5);
            break;
          case "top-rated":
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
          case "newest":
            filteredProducts = filteredProducts.filter((p) => p.new);
            break;
        }
      }
  
      // Reset to page 1 when filters change
      currentPage = 1;
  
      // Render filtered products
      renderProducts(filteredProducts);
    }
  
    function clearAllFilters() {
      // Reset filter state
      currentFilters = {
        sort: null,
        genders: [],
        sports: [],
        colors: [],
        brands: [],
        sizes: [],
        minPrice: null,
        maxPrice: null,
      };
  
      // Uncheck all checkboxes
      document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = false;
      });
  
      // Uncheck all radio buttons
      document.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.checked = false;
      });
  
      // Clear size selections
      sizeButtons.forEach((button) => {
        button.classList.remove("active");
      });
  
      // Clear price inputs
      minPriceInput.value = "";
      maxPriceInput.value = "";
  
      // Reset to original products
      renderProducts(products);
    }
  
    function renderProducts(productsToRender) {
      // Calculate pagination
      const totalPages = Math.ceil(productsToRender.length / productsPerPage);
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const paginatedProducts = productsToRender.slice(startIndex, endIndex);
  
      // Clear existing products
      productGrid.innerHTML = "";
  
      // Render products
      if (paginatedProducts.length === 0) {
        productGrid.innerHTML =
          '<div class="no-results">No products match your filters.</div>';
      } else {
        paginatedProducts.forEach((product) => {
          const productCard = document.createElement("div");
          productCard.className = "product-card";
          
          // Prepare product data for the product page
          const productData = {
            id: product.id,
            name: product.name,
            brand: product.brand,
            model: product.model,
            price: product.price,
            colors: product.colors,
            sizes: product.sizes,
            videosets: product.videosets,
            details: product.details,
            rating: product.rating,
            trending: product.trending,
            new: product.new,
            image: product.image
          };
  
          productCard.innerHTML = `
            <div class="product-image">
              <a href="a.html" class="product-link" data-product='${JSON.stringify(productData)}'>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
              </a>
            </div>
            <div class="product-info">
              <div class="product-name">${product.name}</div>
              <div class="product-price">$${product.price}</div>
            </div>
          `;
          productGrid.appendChild(productCard);
        });
  
        // Add click handlers to product links
        document.querySelectorAll('.product-link').forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const productData = JSON.parse(this.getAttribute('data-product'));
            localStorage.setItem('currentProduct', JSON.stringify(productData));
            window.location.href = this.getAttribute('href');
          });
        });
      }
  
      // Render pagination
      renderPagination(totalPages);
    }
  
    function renderPagination(totalPages) {
      pagination.innerHTML = "";
  
      if (totalPages <= 1) return;
  
      // Previous button
      const prevButton = document.createElement("button");
      prevButton.className = "pagination-btn";
      prevButton.innerHTML = "&laquo;";
      prevButton.disabled = currentPage === 1;
      prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          applyFilters();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
      pagination.appendChild(prevButton);
  
      // Page numbers
      const maxVisiblePages = 5;
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
  
      if (startPage > 1) {
        const firstPageButton = document.createElement("button");
        firstPageButton.className = "pagination-btn";
        firstPageButton.textContent = "1";
        firstPageButton.addEventListener("click", () => {
          currentPage = 1;
          applyFilters();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
        pagination.appendChild(firstPageButton);
  
        if (startPage > 2) {
          const ellipsis = document.createElement("span");
          ellipsis.className = "pagination-ellipsis";
          ellipsis.textContent = "...";
          pagination.appendChild(ellipsis);
        }
      }
  
      for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement("button");
        pageButton.className = `pagination-btn ${
          currentPage === i ? "active" : ""
        }`;
        pageButton.textContent = i;
        pageButton.addEventListener("click", () => {
          currentPage = i;
          applyFilters();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
        pagination.appendChild(pageButton);
      }
  
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          const ellipsis = document.createElement("span");
          ellipsis.className = "pagination-ellipsis";
          ellipsis.textContent = "...";
          pagination.appendChild(ellipsis);
        }
  
        const lastPageButton = document.createElement("button");
        lastPageButton.className = "pagination-btn";
        lastPageButton.textContent = totalPages;
        lastPageButton.addEventListener("click", () => {
          currentPage = totalPages;
          applyFilters();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
        pagination.appendChild(lastPageButton);
      }
  
      // Next button
      const nextButton = document.createElement("button");
      nextButton.className = "pagination-btn";
      nextButton.innerHTML = "&raquo;";
      nextButton.disabled = currentPage === totalPages;
      nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          applyFilters();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
      pagination.appendChild(nextButton);
    }
  });