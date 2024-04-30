const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
    const word1 = document.querySelector("#word1Input").value.toLowerCase();
    const word2 = document.querySelector("#word2Input").value.toLowerCase();
    // *remove spaces and punctuation from both words
    const cleanWord1 = word1.replace(/[^\w]/g, "")
    const cleanWord2 = word2.replace(/[^\w]/g, "")

    // *check if the lengths are the same
    if (cleanWord1.length !== cleanWord2.length) {
        result.textContent = "Not an anagram";
        result.classList.remove("success");
        result.classList.add("error");
        return
    }

    // *count letter occurences in the first word
    const letterCount1 = {};
    for (const char of cleanWord1) {
        letterCount1[char] = (letterCount1[char] || 0) + 1;
    }

    // *count letter occurences in the second word
    const letterCount2 = {};
    for (const char of cleanWord2) {
        letterCount2[char] = (letterCount2[char] || 0) + 1;
    }

    //  *Compare letter counts
    for (const char in letterCount1) {
        if (letterCount1[char] !== letterCount2[char]) {
            result.textContent = "Not an anagram";
            result.classList.remove("success");
            result.classList.add("error")
        }
    }

    // *If all letter counts are same it's an anagram
    result.textContent = "It's an anagram!";
    result.classList.remove("error");
    result.classList.add("success");

})