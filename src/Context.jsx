import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext();

export const UserProvider = (props) => {
    useEffect(() => {
        let logindata = localStorage.getItem("key")
        if (JSON.parse(logindata) == null) {
            let login = { user: "karventhan", pass: "grootan", access: false }
            localStorage.setItem("key", JSON.stringify(login))
        }
    }, []);
    const [login, setLogin] = useState(() => {
        let a = localStorage.getItem("key")
        return JSON.parse(a)
    });
    const [mock,setMock]=useState({})
    const [user,setUser]=useState(()=>{
            axios.get('https://demo8966750.mockable.io/users')
            .then(res=>setUser(res.data))
            .catch(err=>setMock(404))
    });


    /*const [user, setUser] = useState([{
        "id": 1,
        "name": "Karventhan",
        "age": 21,
        "dob": "27-04-2000",
        "firstName": "Karventhan",
        "lastName": "P",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Erode",
            "address_line3": "Arachalur",
            "phone": "6389098762"
        }
    }, {
        "id": 2,
        "name": "Sanjay",
        "age": 22,
        "dob": "20-10-2020",
        "firstName": "Sanjay",
        "lastName": "L",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Tirupur",
            "address_line3": "Anumanpalli",
            "phone": "9867545787"

        }
    },
    {
        "id": 3,
        "name": "Guna",
        "age": 21,
        "dob": "27-04-2000",
        "firstName": "Guna",
        "lastName": "L",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Erode",
            "address_line3": "Kodiveri",
            "phone": "6389098762"
        }
    }, {
        "id": 4,
        "name": "Saravana",
        "age": 15,
        "dob": "20-10-2005",
        "firstName": "Saravana",
        "lastName": "M",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Salem",
            "address_line3": "None",
            "phone": "9867545787"

        }
    },
    {
        "id": 5,
        "name": "Karthick",
        "age": 17,
        "dob": "27-04-2003",
        "firstName": "Karthick",
        "lastName": "K",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Chennai",
            "address_line3": "Pettai",
            "phone": "6389234562"
        }
    }, {
        "id": 6,
        "name": "Murali",
        "age": 18,
        "dob": "20-10-2002",
        "firstName": "Murali",
        "lastName": "P",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Coimbatore",
            "address_line3": "None",
            "phone": "9867545787"

        }
    },

    ])*/

    return (
        <UserContext.Provider value={{ userdata: [user, setUser], logindata: [login, setLogin],mockerr:[mock,setMock] }}>
            {props.children}
        </UserContext.Provider>
    );
}