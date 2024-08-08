    let info = {
        name:"nitin",
        surName: "thapa",
        age: 30,
        isMarried: false,
        favfood: ["chicken", "mutton"],
        fullName : () => {
            return("nitin thapa");
        },
        location: {
            country:"nepal",
            province :3,
            city:"kathmandu",
            exactlocation: "gagalphedi"
        },
    };

    console.log(info.name)
    console.log(info.fullName())
    console.log(info.location.country)
    