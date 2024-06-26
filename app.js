
// 1 masala


// const students = [
//     { ism: "Ali", yosh: 20, baholari: [90, 85, 88] },
//     { ism: "Vali", yosh: 22, baholari: [92, 81, 85] },
//     { ism: "Sami", yosh: 21, baholari: [85, 90, 91] }
// ];

// function engYaxshiTalaba(students) {
//     let engYaxshi = students[0];
//     let engYaxshiOrtalama = ortachaBaholar(students[0].baholari);

//     students.forEach(talaba => {
//         const talabaOrtalama = ortachaBaholar(talaba.baholari);
//         if (talabaOrtalama > engYaxshiOrtalama) {
//             engYaxshi = talaba;
//             engYaxshiOrtalama = talabaOrtalama;
//         }
//     });

//     return engYaxshi.ism;
// }

// function ortachaBaholar(baholari) {
//     const jami = baholari.reduce((sum, baho) => sum + baho, 0);
//     return jami / baholari.length;
// }

// console.log(engYaxshiTalaba(students)); 



// 2 masala


// const products = [
//     { name: "kompyuter", narx: 1000, available: true },
//     { name: "telefon", narx: 700, available: false },
//     { name: "planshet", narx: 500, available: true },
//     { name: "Monitor", narx: 300, available: true }
// ];

// function highestPriceProductName(products) {
//     let highestPrice = -Infinity;
//     let highestProductName = null;

//     products.forEach(product => {
//         if (product.available && product.narx > highestPrice) {
//             highestPrice = product.narx;
//             highestProductName = product.name;
//         }
//     });

//     return highestProductName;
// }

// const highestPriceProduct = highestPriceProductName(products);
// console.log("eng qimmat mahsulot :", highestPriceProduct);



// 3 masala

// const students = [
//     { ism: "Ali", yosh: 20, fanlari: ["Matematika", "Fizika"] },
//     { ism: "Vali", yosh: 22, fanlari: ["Matematika", "Informatika"] },
//     { ism: "Sami", yosh: 21, fanlari: ["Fizika", "Informatika",] }
// ];



// function countStudentsBySubjects(students) {
//     let subjectCount = {};

//     students.forEach(student => {
//         student.subjects.forEach(subject => {
//             if (subjectCount[subject]) {
//                 subjectCount[subject]++;
//             } else {
//                 subjectCount[subject] = 1;
//             }
//         });
//     });

//     return subjectCount;
// }

// const result = countStudentsBySubjects(students);
// console.log("fanlar soni", result);


// 4 masala 


// const workers = [
//     { ism: "Ali", lavozim: "dasturchi", maosh: 2000 },
//     { ism: "Vali", lavozim: "dizayner", maosh: 1800 },
//     { ism: "Sami", lavozim: "dasturchi", maosh: 2200 },
//     { ism: "Qodir", lavozim: "loyiha boshqaruvchisi", maosh: 2500 }
// ];

// function engKattaMaoshliLavozimVaSoni(ishchilar) {
//     let engKattaMaosh = -Infinity;
//     let engKattaMaoshliLavozim = null;
//     let ishchilarSoni = 0;

//     ishchilar.forEach(ishchi => {
//         if (ishchi.maosh > engKattaMaosh) {
//             engKattaMaosh = ishchi.maosh;
//             engKattaMaoshliLavozim = ishchi.lavozim;
//             ishchilarSoni = 1; 
//         } else if (ishchi.maosh === engKattaMaosh) {
//             ishchilarSoni++;
//         }
//     });

//     return { lavozim: engKattaMaoshliLavozim, soni: ishchilarSoni };
// }

// const result = engKattaMaoshliLavozimVaSoni(workers);
// console.log("Eng katta maoshli lavozim:", result.lavozim);
// console.log("shu lavozimdagi ishchi soni:", result.soni);


// 5 masala


// const products = [
//     { nom: "kompyuter", narx: 1000, kategoriya: "elektronika" },
//     { nom: "telefon", narx: 700, kategoriya: "elektronika" },
//     { nom: "stol", narx: 200, kategoriya: "mebel" },
//     { nom: "stul", narx: 100, kategoriya: "mebel" },
//     { nom: "lampochka", narx: 10, kategoriya: "elektronika" },
// ];

// function kategoriyaBoyichaOrtachaNarx(mahsulotlar) {
//     let kategoriyaNarxlari = {};
//     let kategoriyaSoni = {};

//     mahsulotlar.forEach(mahsulot => {
//         const { kategoriya, narx } = mahsulot;
//         if (kategoriyaNarxlari[kategoriya]) {
//             kategoriyaNarxlari[kategoriya] += narx;
//             kategoriyaSoni[kategoriya]++;
//         } else {
//             kategoriyaNarxlari[kategoriya] = narx;
//             kategoriyaSoni[kategoriya] = 1;
//         }
//     });

//     let ortachaNarxlar = {};
//     for (let kategoriya in kategoriyaNarxlari) {
//         ortachaNarxlar[kategoriya] = kategoriyaNarxlari[kategoriya] / kategoriyaSoni[kategoriya];
//     }

//     return ortachaNarxlar;
// }

// const result = kategoriyaBoyichaOrtachaNarx(products);
// console.log("Kategoriya bo'yicha o'rtacha narxlar:", result);


