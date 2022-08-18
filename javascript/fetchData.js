async function getData() {
    let url3 = [`http://jsonplaceholder.typicode.com/posts/?_limit=3`]
    let url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        let res = await fetch(url3);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let info = await getData();
    // console.log(info);
    let dataCard = "";
    info.forEach((item) => {
        let cardInfo = `<article class="projectsArticle">
                            <img
                                src="../assets/projects-section/${item.id}.jpg"
                                alt="imagen"
                                class="projectImg"
                            />
                            <div class="project_text">
                                <h3  class="dataTitle">${item.title.split(' ')[0]} ${item.title.split(' ')[1]}</h3>
                                <div class="text dataBody">${item.body}</div>
                                <a href="projects.html" class="learnMore">learn more</a>
                            </div>
                        </article>`;

        return dataCard += cardInfo;
    })

    let container = document.querySelector(".projectsArticles");
    // console.log(container);
    container.innerHTML = dataCard;
}

renderData()



