import React from 'react'

export default function PlayCard({ question, optionA, optionB, optionC, optionD, index }) {
    return (
        <div class="question">
            <p>{question}</p>
            <ul>
                <li>
                    <input type="radio" id='optionA' name={index} value={optionA} />
                    <label for="optionA">{optionA}</label>
                </li>
                <li>
                    <input type="radio" id='optionB' name={index} value={optionB} />
                    <label for="optionB">{optionB}</label>
                </li>
                <li>
                    <input type="radio" id="optionC" name={index} value={optionC} />
                    <label for="optionC">{optionC}</label>
                </li>
                <li>
                    <input type="radio" id="optionD" name={index} value={optionD} />
                    <label for="optionD">{optionD}</label>
                </li>
            </ul>
        </div>
    )
}
