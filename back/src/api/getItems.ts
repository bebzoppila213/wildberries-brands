import axios from "axios"


export async function getItems(query: string = "Обувь") {
    try{
        let URL = "https://search.wb.ru/exactmatch/ru/common/v4/search";
    let data: any = []
    let params = {
        query: query,
        resultset: "catalog",
        curr: "rub",
        dest: "-1029234,-62224,-1776249,123585628"
    }

    await axios.get(URL, { params: params }).then((response) => {
        data = response.data.data.products
    })

    return data
    }catch{
        return []
    }   
    
}