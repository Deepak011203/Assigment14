const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const user = require("../modal/UserModel");
let jwt_key = "Batch35BackendKey";


//Register Api
const registerApi = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        const emailCheck = await user.findOne({ email });
        if (emailCheck) {
            return res.status(400).json({ message: "User email already registered" });

        }
        // Password hashing using bcrypt librariy 
        const hashedPassword = await bcrypt.hash(password, 10);
        //save all the user information incuding hashed password
        const newUser = new user({ username, email, password: hashedPassword, role });
        await newUser.save();
        res.status(201).json({ message: "Registration successfull" });

    } catch (err) {
        console.error(err);
    }

}
// login
const loginApi = async (req, res) => {
    const { email, password } = req.body;
    try {
        const founduser = await user.findOne({ email });
        if (!founduser) {
            return res.status(404).json({ message: "User email not found , please, register first" });

        }
        //password check
        const passwordMatch = await bcrypt.compare(password, founduser.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "unauthorised: Password mismatch" });

        }
        //Token generation 
        const token = jwt.sign(
            { userId: founduser._id,username:founduser.username, email: founduser.email, role: founduser.role },
            jwt_key,
            { expiresIn: '24h' }
        );
        res.status(200).json({ message: "Login successfull", token });
    } catch (err) {
        console.error("Login error:", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
}
module.exports = { registerApi, loginApi };
