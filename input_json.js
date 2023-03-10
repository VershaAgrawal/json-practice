const json = {
    theaters:[{
        tid: 1,
        locations: ["pune", "blr", "mumbai"],
        movies:[{
            mid: 1,
            title: "m1",
            releaseDate: "2022-05-31",
            stars: ["srk", "akshay", "versha", "tanu"]
        }, {
            mid: 2,
            title: "m2",
            releaseDate: "2022-06-01",
            stars: ["tanu"]
        }]
    }, {
        tid: 2,
        locations: ["delhi", "pune", "mumbai", "blr"],
        movies:[{
            mid: 2,
            title: "m2",
            releaseDate: "2022-06-01", 
            stars: ["akshay", "versha", "priyank"]
        }, {
            mid: 3,
            title: "m3",
            releaseDate: "2023-05-31"
        }]
    }]
};

module.exports={json};