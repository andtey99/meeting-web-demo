import React from "react";

const SearchStatus = ({ length }) => {
    const renderPhrase = number => {
        const lastDigit = Number(number.toString().slice(-1))
        if (number > 4 && number < 15) return "человек встретятся";
        if ([2, 3, 4].indexOf(lastDigit) >= 0) return "человека встретится";
        if (lastDigit == 1) return "человек встретится";
        return "человек встретятся";
    }

    return (
        <>
        <h1 className="text-center"><span className={"badge bg-"+(length > 0 ? "primary" : "danger" )}>
            {length > 0 ? `${length} ${renderPhrase(length)} с тобой сегодня` : "Нет никого, кто готов встретиться"}
        </span>
        </h1>
        </>
    )
}

export default SearchStatus;