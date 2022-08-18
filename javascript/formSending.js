document.getElementById("post_info-form").addEventListener("submit", Post);


function Post(event) {
    var new_title = document.getElementById("name").value;
    var new_body = document.getElementById("field").value;
    var userid = document.getElementById("phone").value;

    console.log(`Input Data:  ${userid}   ${new_title}   ${new_body}`);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: new_title,
            body: new_body,
            userId: userid
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

        .then(response => response.json())
        .then(data => {
            console.log(`RESPONSE: ${JSON.stringify(data)}`);

        })
        .then(() => {
            const log = document.getElementById('formDome');
            log.textContent = ` Thank you! Your submission has been received!
             Time stamp: ${event.timeStamp}`;
            event.preventDefault();
        })
        .catch((err) => { console.error(err); });



    let formulario = document.getElementById("post_info-form");
    formulario.submit()
    formulario.reset()
    return false; //Prevent page refresh

}

