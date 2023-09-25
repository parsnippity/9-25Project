const result = document.querySelector(".result");
const btn = document.querySelector(".submit-btn");
const input = document.querySelector(".form-input");
const formAlert = document.querySelector(".form-alert");
var changing = false;
var formerId = "";
const fetchPeople = async function() {
    try {
        const {data} = await axios.get("/api/people");
        console.log(data);

        const people = data.data.map((person) => {
            return `<h5>${person.name}<button class='block update-btn' id='${person.id}'>Update</button><button class='block delete-btn' id='${person.id}'>Delete</button></h5>`
        });

        result.innerHTML = people.join("");
        var updateBtn = document.querySelectorAll(".update-btn");
        for(let i = 0; i < updateBtn.length; i++){
            let hi = updateBtn[i];
            hi.addEventListener("click", function (e) {
                let id = this.id;
                let person = data.data.find((person) => {
                    return person.id === Number(id)
                });
                input.value = person.name;
                changing = true;
                formerId = id;
            })
        }
        var deleteBtn = document.querySelectorAll(".delete-btn");
        for(let i = 0; i < updateBtn.length; i++){
            let hi = deleteBtn[i];
            hi.addEventListener("click", async function (e) {
                await axios.delete(`/api/people/${this.id}`);
                fetchPeople();
            })
        }
    } catch(err) {
        console.log(err);
        formAlert.textContent = err.response.data.msg;
    }
}
fetchPeople()

//HTML Submit Form

btn.addEventListener("click", async(e) => {
    e.preventDefault();
    const nameValue = input.value;

    try {
        formAlert.textContent = "";
        if(changing == true) {
            const {data} = await axios.put(`/api/people/${formerId}`, {name: nameValue})
            changing = false;
            fetchPeople();
        } else {
            const {data} = await axios.post("/api/people", {name: nameValue});
            fetchPeople();
        }
    } catch(err) {
        formAlert.textContent = err.response.data.msg;
    }
    input.value = "";
})