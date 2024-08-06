const whitelist = ["http://localhost:3001", "https://www.google.com/"]
const corsOption = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by cors"))
        }
    },
    optionSuccessStatus: 200
}
export default corsOption