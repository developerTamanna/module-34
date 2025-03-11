const fetchData = () => {
    return new Promise((resolve, reject) => {
        const status = true;
        if (status) {
            const mockData = {
                json: () => Promise.resolve({ name: 'tamanna' }) // json ফাংশন রিটার্ন করছে
            }
            resolve(mockData); // mockData পাঠাচ্ছি
        } else {
            reject("server error");
        }
    });
}

fetchData()
    .then((res) => res.json()) // json ফর্ম্যাটে ডেটা রিটার্ন
    .then((data) => {
        console.log(data); // { name: 'tamanna' }
    })
    .catch((err) => {
        console.log(err);
    });
