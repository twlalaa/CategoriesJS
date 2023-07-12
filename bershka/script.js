"use strict";

let categoryBtn = document.querySelectorAll("button");
let container = document.querySelector(".box-container");

for (let i = 0; i < categoryBtn.length; i++) {
  categoryBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    container.innerHTML = "";
    for (let j = 0; j < objArray.length; j++) {
      if (objArray[j].category == categoryBtn[i].innerHTML) {
        let structure = `<div class="box" style="width: 350px; height:620px; padding:20px; display: flex; flex-direction: column; justify-content: space-between;">
        <img src="${objArray[j].image}" style="width: 270px;" />
        <div style="display: flex; flex-direction: column; justify-content: space-between;"><p style="margin-bottom: 10px;">${objArray[j].name}</p>
        <p>${objArray[j].description}</p></div></div>`;
        container.innerHTML += structure;
      }
    }
  });
}

let obj1 = {
  category: "Jeans",
  name: "Twill flare trousers",
  image:
    "https://static.bershka.net/4/photos2/2023/V/0/1/p/5128/665/712/b3c26b48cc69b0351ce4c2a4e87d9a5f-5128665712_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=chrome",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sit error perferendis doloremque enim obcaecati minima, expedita incidunt odit deserunt",
};

let obj2 = {
  category: "Tshirts",
  name: "Lyocell and cotton carrot fit trousers with a buckle",
  image:
    "https://static.bershka.net/4/photos2/2023/V/0/1/p/0137/692/712/183014533b34e60c47bc8903d85a2a9b-0137692712_2_24_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=chrome",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sit error perferendis doloremque enim obcaecati minima, expedita incidunt odit deserunt",
};

let obj3 = {
  category: "Dresses",
  name: "90s jeans with elasticated waistband and pockets",
  image:
    "https://static.bershka.net/4/photos2/2023/V/0/1/p/0255/388/505/de7d8f4f78544d8a0d6d1e62f15a4032-0255388505_2_24_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=chrome",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sit error perferendis doloremque enim obcaecati minima, expedita incidunt odit deserunt",
};

let obj4 = {
  category: "Dresses",
  name: "Super high-waist skinny jeans",
  image:
    "https://static.bershka.net/4/photos2/2023/V/0/1/p/0006/888/428/0c62d2d9ed3161629eb510efa2b9f527-0006888428_2_24_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=chrome",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sit error perferendis doloremque enim obcaecati minima, expedita incidunt odit deserunt",
};

let obj5 = {
  category: "Jeans",
  name: "Ripped wide-leg ’90s jeans",
  image:
    "https://static.bershka.net/4/photos2/2023/V/0/1/p/0008/335/250/68515b75253fc43f802e9206c71dcd35-0008335250_2_24_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=chrome",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sit error perferendis doloremque enim obcaecati minima, expedita incidunt odit deserunt",
};

let objArray = [obj1, obj2, obj3, obj4, obj5];
