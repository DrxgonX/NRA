// Convert CSV to JSON for JavaScript usage
const tourPackages = [
    {
        id: 1,
        title: "Shimla Volvo Tour Package",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Delhi - Shimla - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "Delhi to Shimla, Shimla to Delhi Volvo Bus tickets",
            "Accomodation of 2 Night in the hotel",
            "Welcome drinks like coffee and tea on arrival",
            "Every day morning breakfast and dinner",
            "Full day shimla sightseeing by car",
            "Full day visit to Kufri by car",
            "Inclusive of all taxes"
        ],
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
    },
    {
        id: 2,
        title: "Kullu Manali Volvo Tour Package",
        duration: "05 NIGHTS/06 DAYS",
        destinations: "Delhi - Manali - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "Delhi to Manali, Manali to Delhi Volvo Bus tickets",
            "Accommodation for 3 Night in the hotel",
            "Welcome drink on arrival",
            "Every day morning Breakfast and Dinner in the hotel",
            "Local Manali half day sightseeing by Car",
            "Sightseeing of Rohtang Pass (Snow Point) by Car full day",
            "Kullu – Manikaran full day sightseeing by Car",
            "One candle light dinner",
            "All pick up and drops from Volvo stand to hotel",
            "Inclusive of all taxes"
        ],
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600"
    },
    {
        id: 3,
        title: "Shimla Kullu Manali Volvo Tour Package",
        duration: "6 NIGHT/7 DAYS",
        destinations: "Delhi - Shimla - Manali - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "Delhi - Manali Volvo tickets",
            "Deluxe bus tickets from Manali-Shimla",
            "Volvo tickets Shimla-Delhi",
            "Accommodation for night in shimla",
            "Manali Accommodation for 3 Nights",
            "Welcome drink on arrival",
            "Every day morning Breakfast and Dinner at hotel",
            "In Manali One candle light dinner",
            "Shimla, kufri Full day sightseeing by Car",
            "Local Manali sightseeing",
            "Rohtang/Snow point full day sightseeing by Sharing Car",
            "Sightseeing Kullu-manikaran by car",
            "Inclusion of all taxes"
        ],
        image: "https://images.unsplash.com/photo-1606219547564-34d765d321ae?w=600"
    },
    {
        id: 4,
        title: "Dharamshala Dalhousie Volvo Tour Package",
        duration: "05 NIGHTS/06 DAYS",
        destinations: "Delhi - Dharamshala - Dalhousie - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "himachal",
        inclusions: [
            "Delhi to Dharamshala, Dharamshala to Delhi Volvo tickets",
            "Accommodation for 2 night in Dharamshala",
            "Accommodation for 2 night in Dalhousie",
            "Welcome drink on arrival",
            "Every day morning breakfast and dinner in the hotel",
            "Pick up and drops",
            "Dharamshala Local sightseeing of by Car",
            "Local sightseeing of Mcleodgang by Car",
            "Local Dalhousie sightseeing by Car",
            "Full day sightseeing of Chamba - Khajjiar - Kalatop by Car",
            "Inclusive of all applicable taxes"
        ],
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600"
    },
    {
        id: 5,
        title: "Kerala Backwaters Tour",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Cochin - Munnar - Thekkady - Alleppey - Cochin",
        price: "Contact Us",
        category: "domestic",
        region: "kerala",
        inclusions: [
            "2 Nights Accommodation in Munnar",
            "1 Night Accommodation in Thekkady",
            "1 Night Accommodation in Alleppey",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Alleppey Houseboat all includes (Breakfast, Lunch & Dinner)",
            "Pick up and Drop ex Cochin",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include"
        ],
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600"
    },
    {
        id: 6,
        title: "Kashmir Paradise Tour",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Srinagar - Gulmarg - Pahalgam - Srinagar",
        price: "Contact Us",
        category: "domestic",
        region: "kashmir",
        inclusions: [
            "1 Night Accommodation in Srinagar Houseboat",
            "3 Night Accommodation in Srinagar Hotel",
            "Welcome drink on arrival",
            "Daily Morning Bed Tea, Breakfast & Dinner",
            "All Transfer & sightseeing by Individual Cab",
            "Pick up and Drop Srinagar",
            "Toll Taxes, Parking, Driver Allowance includes",
            "All Taxes Include"
        ],
        image: "https://images.unsplash.com/photo-1631217784848-6ae72f2d6293?w=600"
    },
    {
        id: 7,
        title: "Andaman Island Paradise",
        duration: "05 NIGHTS/06 DAYS",
        destinations: "Port Blair - Havelock",
        price: "Contact Us",
        category: "domestic",
        region: "andaman",
        inclusions: [
            "5 nights accommodation in quality hotels",
            "Daily breakfast",
            "Airport transfers",
            "Island hopping tours",
            "Water sports activities",
            "All taxes included"
        ],
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600"
    },
    {
        id: 8,
        title: "Golden Triangle Tour",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Delhi - Agra - Jaipur",
        price: "Contact Us",
        category: "domestic",
        region: "rajasthan",
        inclusions: [
            "1 Night Accommodation in Delhi",
            "1 Night Accommodation in Agra",
            "2 Nights Accommodation in Jaipur",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at Delhi",
            "All transport and sightseeing by Individual Car",
            "All taxes are include"
        ],
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600"
    },
    {
        id: 9,
        title: "Darjeeling Gangtok Tour",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Darjeeling - Gangtok",
        price: "Contact Us",
        category: "domestic",
        region: "northeast",
        inclusions: [
            "2 Nights Accommodation in Darjeeling",
            "2 Nights Accommodation in Gangtok",
            "Welcome drink on arrival",
            "Daily Breakfast at Hotel",
            "Pick up and Drop at NJP Railway Station / IXB Airport",
            "All transport and sightseeing by Individual Car",
            "All taxes are include"
        ],
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600"
    },
    {
        id: 10,
        title: "Uttarakhand Hill Station Tour",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Delhi - Nainital - Corbett - Delhi",
        price: "Contact Us",
        category: "domestic",
        region: "uttarakhand",
        inclusions: [
            "2 Nights Accommodation in Nainital",
            "2 Nights Accommodation in Corbett",
            "Welcome drink on arrival",
            "Daily Breakfast & Dinner at Hotel",
            "Pick up and Drop ex Delhi",
            "All Transport and Sightseeing by Individual Car",
            "All Taxes Include"
        ],
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
    },
    {
        id: 11,
        title: "Goa Beach Paradise",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Goa",
        price: "₹8,500",
        category: "domestic",
        region: "goa",
        inclusions: [
            "Welcome Drink on arrival in the hotel",
            "Wine bottle",
            "Morning Tea",
            "Meals as per Plan",
            "Two half days sightseeing, Boat Cruise on the day of South Goa Tour",
            "Complimentary Airport / Railway Station or Bus stop, pickup and drop",
            "Accommodation for 2 persons in A/C room",
            "Free use of swimming pool, gym and indoor games"
        ],
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600"
    },
    {
        id: 12,
        title: "Thailand Tour Package",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Pattaya - Bangkok",
        price: "Contact Us",
        category: "international",
        region: "thailand",
        inclusions: [
            "Economy Class return Airfare on Direct flight",
            "02 Nights accommodation at Pattaya",
            "02 Nights accommodation at Bangkok",
            "04 Breakfast & Early Check in Confirmed",
            "Airport Hotel return transfers Seat-In-Coach basis",
            "Coral island tour Seat-In-Coach basis (max 4 hours)",
            "Pattaya City tour on Seat-In-Coach basis (max 3 hours)",
            "All hotel taxes and service charges",
            "Airport taxes",
            "Service Taxes Included"
        ],
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600"
    },
    {
        id: 13,
        title: "Singapore Tour Package",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Singapore",
        price: "Contact Us",
        category: "international",
        region: "singapore",
        inclusions: [
            "3 Nights accommodation at Hotel",
            "Daily Breakfast",
            "Singapore Half Day City Tour",
            "Airport Hotel Return Transfers",
            "All Hotel taxes and Service charges"
        ],
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600"
    },
    {
        id: 14,
        title: "Dubai Tour Package",
        duration: "03 NIGHTS/04 DAYS",
        destinations: "Dubai",
        price: "Contact Us",
        category: "international",
        region: "dubai",
        inclusions: [
            "3 Nights accommodation at Hotel",
            "Daily Breakfast",
            "Dubai Half Day City Tour",
            "Desert Safari with Dinner (with Dune Bashing, Belly Dance and Bar beque Dinner)",
            "Dhow Cruise with Dinner",
            "Airport Hotel Return Transfers",
            "All Hotel taxes and Service charges"
        ],
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600"
    },
    {
        id: 15,
        title: "Sri Lanka Tour Package",
        duration: "04 NIGHTS/05 DAYS",
        destinations: "Sri Lanka",
        price: "Contact Us",
        category: "international",
        region: "srilanka",
        inclusions: [
            "Transport in an A/C Micro van with the service of an English-speaking chauffeur Guide",
            "Sightseeing as mentioned",
            "Value added tax",
            "Meeting and Assistance at the airport"
        ],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600"
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tourPackages;
}
