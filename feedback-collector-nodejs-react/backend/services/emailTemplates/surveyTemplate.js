module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Hi :)</h3>
                    <p>Please answer the following question:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="http://localhost:3000/api/surveys/thanks">Yes</a>
                    </div>
                    <div>
                        <a href="http://localhost:3000/api/surveys/thanks">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
}