let a = 10;
let b = 1000;
// 여러개 export >> export {a,b}
// import시 변수명 일치해야함 여러개 export시에만
// export default a;
let data = [
    {
        id:0,
        title: "submariner",
        content: "masterpiece",
        price: 100000000
    },
    {
        id:1,
        title: "datejust",
        content: "masterpiece2",
        price: 140000000
    },
    {
        id:2,
        title: "moonwatch",
        content: "omega",
        price: 80000000
    }
]
export default data;