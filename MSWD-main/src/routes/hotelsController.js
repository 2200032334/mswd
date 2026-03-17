exports.getAllHotels = (req, res) => {
    // TODO: Fetch hotels from the database
    res.json([
        { id: 1, name: 'Hotel Grand', city: 'Paris' },
        { id: 2, name: 'Beach Resort', city: 'Maldives' },
    ]);
};
