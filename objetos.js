const user = {
  email: "email@contatopessoa.com",
  age: 18,
  name: {
    firstName: "Rodrigo",
    surName: "Pereira"
  },
  address: {
    street: "Rua X",
    number: 22,
    city: "São Paulo"
  }

}


// console.log(`Nome: ${user.name.firstName} Sobrenome: ${user.name.surName}`)
// console.log(`Endereço: ${user.address.street}, ${user.address.number}, ${user.address.city}`)

const students = {
  student_1 :{
    name: "John",
    age: 16,
    address: {
      street: "st.Paul",
      number: 10
    }
  },
  student_2: {
    name: "Isabel",
    age: 15,
    address: {
      street: "sunset",
      number: 20
    }
  },
  student_3: {
    name: "Bill",
    age: 17,
    address: {
      street: "gold mountain",
      number: 8
    }
  },
  student_4: {
    name: "Polly",
    age: 16,
    address: {
      street: "pineaple",
      number: 12
    }
  }
}

students.student_5 = { name: "Jamie", age: 17, address: { street: "Emerald Lake", number: 11 } }
console.log(students)

// console.log(Object.entries(students))
// let studentsKeys = Object.keys(students)

// for (let studantKey in students) {
//   let kids = students[studantKey]
//   console.log(`${studantKey}, ${kids.name}, ${kids.age}`)
// }


for (let [studentId, student] of Object.entries(students)) {
  let id = studentId
  let name = student.name
  let age = student.age
  let address = `${student.address.street} - ${student.address.number} `

  console.log(typeof(Object.entries(students)))
  console.log(` ${name}, age ${age} | Street: ${address}`)
}