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
        feature: "롤렉스의 아름다움",
        price: 100000000
    },
    {
        id:1,
        title: "datejust",
        content: "masterpiece2",
        feature: "롤렉스의 시작과 끝",
        price: 140000000
    },
    {
        id:2,
        title: "moonwatch",
        content: "omega",
        feature: "오메가의 역작",
        price: 80000000
    }
]
export default data;