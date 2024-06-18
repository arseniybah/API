async function getCatFact() {
    const url = "https://catfact.ninja/fact";
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            return data.fact;
        } else {
            throw new Error("Ошибка при получении факта о кошках");
        }
    } catch (error) {
        console.error("Произошла ошибка:", error);
        return "Произошла ошибка при получении факта о кошках";
    }
}

// Пример использования функции
getCatFact().then(fact => console.log(fact));