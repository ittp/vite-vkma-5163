import axios from 'axios'
import { useState } from 'react'

let locations = []


export async function makeRequest(address:string) {

  let params = {
    apikey: "d11ae1cd-cdbf-4395-a8b0-19c5b6584b84",
    geocode: address,
    format: 'json',
    kind: 'house',
    results: 1
  }
  //?apikey=${apikey}&geocode=${address}&format=json&kind=house&results=1&
  let api = axios.create({
    baseURL: "https://geocode-maps.yandex.ru/1.x",
    headers: { 
      'Accept': 'application/json', 
    }
  })
  try {
    // let { data } = await api.get('/', { params })
    // console.log(data)

    // let fm = data.response.GeoObjectCollection.featureMember
    // let { name, description } = fm[0].GeoObject
    // console.log(name)

    // locations.push({name, description})
    
    // const response = await axios.request(config);
    // console.log(JSON.stringify(response.data));
  }
  catch (error) {
    console.log(error);
  }
}



let r = `VZ,1-я Советская 10
VZ,Ветеранов 36к2
VZ,Лиговский 47 
VZ,Невский 65 
VZ,Кирочная 17
VZ,Просвещения 36к1
VZ,пл. Александра Невского 2
VZ,Одоевского 31
VZ,Пятилеток 2
VZ,Непокорённых 2А
VZ,Бассейная 41
VZ,Большевиков 1а
VZ,Энгельса 139к3
VZ,Новаторов 102к3
VZ,Коломяжский 15к2
VZ,Академика Крылова 3А
VZ,Каменноостровский 40
VZ,Комендантская 1
VZ,Коломяжский 17к2
VZ,1-я Красноармейская 2
VZ,Ленинский 129к6А
VZ,Балканская 5В
VZ,Уткин 13к15
VZ,Испытателей 6
VZ,Лиговский 107
VZ,Кантемировская 27
VZ,Лаврики 63
VZ,Заневский 67к2
VZ,Ленинградская 1К
VZ,Ефимова 1/4
VZ,Звездная 8
VZ,Садовая 40Б
VZ,Пятилеток 2 лит.А
VZ,Европейский 15
VZ,Сенная 4
VZ,Обуховской обороны 116к1
VZ,8-я линия В.О. 45/34
VZ,Просвещения 87А
VZ,Комсомола 45А
VZ,Московский 105-107
VZ,Наставников 21
VZ,Науки 21
VZ,Авиаконструкторов 16к1
VZ,Каменноостровский 16А
VZ,Ветеранов 169к6
VZ,Средний пр. В.О. 28/29
VZ,Заставская 38
VZ,Фурштатская 31 лит.А
VZ,Бул. Менделеева 14
VZ,Парфеновская 9к1
VZ,Стремянная 22/3
VZ,Привокзальная площадь 3
VZ,Литейный проспект 46 лит.А
VZ,Ярослава Гашека 11
VZ,"Михаила Дудина 6к1,стр.1"
VZ,Всеволожский проспект 55
VZ,3-й Верхний переулок, участок 15
KS,Звездная 8 лит.Ж
KS,Садовая 32
KS,8-я линия В.О. 49
KS,Невский пр-кт 175 лит.А
KS,Парголовская 38
KS,Уточкина 4к1
KS,Большая Морская 7
KS,Стачек 90
KS,Московский 109
KS,Садовая 59
KS,Разъезжая 42/34 лит.А
KS,Московский проспект 49
KS,Просвещения 32
KS,Привокзальная 6
KS,г. Пушкин, Привокзальная 1
KS,Бабушкина 42к1
KS,Тепловозная ул. 31
LB,Лиговский 47
LB,Невский 65
LB,Ленинский 127
LB,Новаторов 79
LB,Энгельса 139/21
FC,проспект Стачек 90
PO, Художников 11 
EC,Стремянная 22/3`.split('\n')


// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: `https://geocode-maps.yandex.ru/1.x`,
//   headers: { 
//     'Accept': 'application/json', 
//   },
//   timeout: 10
// };v
let r2 = ["проспект Ветеранов, 36к2", "Московский проспект, 105" ]

// let itemStore = []
// let [data,setDate] = useState(locations)
// // let [items,setItems] = useState(itemStore)
// for (let index = 0; index < r2.length; index++) {
//   // const element = r2[index].split(',');
//   let element = r2[index];

//   let responseData =  makeRequest(element)
//   // console.log(responseData)
//   // itemStore.push(data.response.GeoObjectCollection.featureMember[0])
// }

