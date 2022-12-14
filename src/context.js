import axios from 'axios';
import React, { useContext, useState, useEffect, useCallback } from 'react';


const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const [currentval, setCurrentVal] = useState([{
        num: 0,
        category: "null",
        difficulty: "null",
    }])
    const [Homes, setHome] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [currIndex, setIndex] = useState(0);
    const [currques, setCurrques] = useState([]);
    const [correctAns, setcorrectAns] = useState(0);
    const [modal, setModal] = useState(false)


    useEffect(() => {
        const fetchQues = async () => {
            try {
                const res = await axios.get(QuesApi(currentval));
                let newarr = res.data.results;
                setQuestions((prev) => {
                    let arr = [...newarr];
                    return [...arr];
                })
            } catch (error) {
                console.log(error)
            }

        }
        fetchQues();
    }, [currentval])


    const QuesApi = (currentval) => {
        if (currentval[0].difficulty === "null" && currentval[0].category === "null") {
            return `https://opentdb.com/api.php?amount=${currentval[0].num}&type=multiple`
        }
        else if (currentval[0].difficulty === "null" && currentval[0].category !== "null") {

            return `https://opentdb.com/api.php?amount=${currentval[0].num}&category=${currentval[0].category}&type=multiple`
        }
        else if (currentval[0].difficulty !== "null" && currentval[0].category === "null") {
            return `https://opentdb.com/api.php?amount=${currentval[0].num}&difficulty=${currentval[0].difficulty}&type=multiple`
        }
        else if (currentval[0].difficulty !== "null" && currentval[0].category !== "null") {

            return `https://opentdb.com/api.php?amount=${currentval[0].num.trim()}&category=${currentval[0].category.trim()}&difficulty=${currentval[0].difficulty}&type=multiple`
        }
    }

    const nextHandle = () => {
        setIndex((prev) => {
            return prev + 1;
        });
    };




    const randomiseAns = useCallback((answer) => {
        for (let i = 0; i < 4; i++) {
            let randomIndex = Math.floor(Math.random() * 4);
            let temp = "";
            let currentAnswer = answer[i];
            let randomAnswer = answer[randomIndex];
            temp = currentAnswer;
            answer[i] = randomAnswer;
            answer[randomIndex] = temp;
        }
        return answer;
    }, []);




    return (
        <AppContext.Provider value={{ currentval, Homes, setCurrentVal, setHome, questions, currIndex, currques, setCurrques, setIndex, nextHandle, correctAns, setcorrectAns, modal, setModal, randomiseAns }}>{children}</AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }