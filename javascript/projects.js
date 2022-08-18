async function getData() {
    let url = 'http://jsonplaceholder.typicode.com/posts/?_limit=1';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let info = await getData();
    console.log(info);
    let dataProject = "";
    info.forEach((item) => {
        let cardInfo = `<article class="projectPage">
                    <h1>${item.title.split(' ')[0]} ${item.title.split(' ')[1]}</h1>

                    <div class="projectPage_type">
                        <h3>Ui Design & App Development</h3>
                        <div>
                            Completed on
                            <time
                                class="projectDate"
                                datetime="2022-02-02 19:00"
                                >2/2/22</time
                            >
                        </div>
                    </div>

                    <article >
                        <div class="image_wrapper">
                            <img
                                src="../assets/projects-section/1.jpg"
                                alt="imagen"
                                class="projectPage_img"
                            />
                            <img
                                src="../assets/projects-section/1.jpg"
                                alt="imagen"
                                class="projectPage_imgShadow"
                            />
                        </div>
                        <div class="">
                            <div class="project_textDescription">
                             ${item.body} 
                            </div>
                        </div>
                    </article>
                </article>`;

        return dataProject += cardInfo;
    })

    let container = document.querySelector(".projectPageSection");
    console.log(container);
    container.innerHTML = dataProject;
}

renderData()

