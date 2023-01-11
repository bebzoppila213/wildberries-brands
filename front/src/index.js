import axios from "axios";

document.querySelector("#btn-request").addEventListener("click", async() => {
    const request = document.querySelector("#request");
    const brands = await getBrands(request.value.trim())
    insertingBrands(brands)
});


function insertingBrands(brands = []) {
    const brandList = document.querySelector("#brands-list")
    brandList.innerHTML = ""
    brands.forEach(brandItem => {
        brandList.append(createBrandListItem(brandItem))
    })
}

function createBrandListItem(brandName) {
    const listItem = document.createElement("li")
    listItem.classList.add("list-group-item")
    listItem.textContent = brandName
    return listItem
}

async function getBrands(query) {
    const response = await axios.get("http://localhost:8080/api/v1/brands", {
        params: {
            name: query,
        },
    });
    return response.data
}

document.querySelector("#brand").addEventListener("input", (event) => {
    const brandList = document.querySelector("#brands-list").querySelectorAll(".list-group-item")
    brandList.forEach((brandListItem) => {
        brandListItem.classList.remove("text-primary")
    })
    brandList.forEach(brandListItem => {
        if (brandListItem.textContent == event.target.value) {
            brandListItem.classList.add("text-primary")
        }
    })

    console.log();
})