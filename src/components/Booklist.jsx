import { useState, useEffect } from "react";

export const Booklist = ({ language, getData }) => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        const result = getData?.(language).then((response) =>
            setBookData(response)
        );
    }, [language, getData]);

    return (
        <ul>
            {bookData === null ? (
                <p>now loading...</p>
            ) : (
                bookData.data.items.map((x, index) => (
                    //                    <li key={index}>{x.volumeInfo.title}</li>
                    <div key={index}><img src={x.volumeInfo.imageLinks.thumbnail} /></div>
                ))
            )}
        </ul>
    );
};