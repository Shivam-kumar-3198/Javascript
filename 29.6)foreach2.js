const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },

    {
        languageName: "C++",
        languageFileName:".cpp"
    },

    {
        languageName: "Python",
        languageFileName:"py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
})